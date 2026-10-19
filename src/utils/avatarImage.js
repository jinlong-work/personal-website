export const MAX_AVATAR_BYTES = 2 * 1024 * 1024
export const AVATAR_IMAGE_TYPES = 'JPG / JPEG / PNG / WebP / GIF / BMP / AVIF'
export const AVATAR_IMAGE_ACCEPT = '.jpg,.jpeg,.png,.webp,.gif,.bmp,.avif,image/jpeg,image/png,image/webp,image/gif,image/bmp,image/avif'

// 根据文件内容识别格式，兼容文件选择器未提供 MIME 的图片。
export function detectImageType(bytes) {
  const text = (start, end) => String.fromCharCode(...bytes.slice(start, end))
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'image/jpeg'
  if ([137, 80, 78, 71, 13, 10, 26, 10].every((value, index) => bytes[index] === value)) return 'image/png'
  if (['GIF87a', 'GIF89a'].includes(text(0, 6))) return 'image/gif'
  if (text(0, 4) === 'RIFF' && text(8, 12) === 'WEBP') return 'image/webp'
  if (text(0, 2) === 'BM') return 'image/bmp'
  if (text(4, 8) === 'ftyp') {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    const end = Math.min(view.getUint32(0), bytes.length)
    for (let index = 8; index + 4 <= end; index += 4) {
      if (index !== 12 && ['avif', 'avis'].includes(text(index, index + 4))) return 'image/avif'
    }
  }
  throw new Error(`请选择 ${AVATAR_IMAGE_TYPES} 格式的图片`)
}

function loadImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob)
    const image = new Image()
    image.onload = () => { URL.revokeObjectURL(url); resolve(image) }
    image.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('图片无法读取，请更换图片或转换为 JPG / PNG 后重试'))
    }
    image.src = url
  })
}

export function canvasToPng(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob?.size) resolve(blob)
      else reject(new Error('图片生成失败，请重新选择图片'))
    }, 'image/png')
  })
}

export async function prepareAvatarImage(file) {
  if (!file?.size) throw new Error('请选择非空的图片文件')
  if (file.size > MAX_AVATAR_BYTES) throw new Error('头像原图不能超过2MB')
  const bytes = new Uint8Array(await file.arrayBuffer())
  const type = detectImageType(bytes)
  const blob = new Blob([bytes], { type })
  let image
  let canvas
  try {
    // ImageBitmap 按照片方向解码，并为动图取静态帧，避免预览与最终头像不一致。
    if (typeof createImageBitmap === 'function') {
      try { image = await createImageBitmap(blob, { imageOrientation: 'from-image' }) } catch { /* 兼容浏览器的 Image 解码器。 */ }
    }
    image ||= await loadImage(blob)
    const width = image.naturalWidth || image.width
    const height = image.naturalHeight || image.height
    if (!width || !height || width > 4096 || height > 4096 || width * height > 16_000_000) {
      throw new Error('头像尺寸不能超过4096×4096，且总像素不能超过1600万')
    }
    // 保留未裁剪的静态原图，仅在本次编辑期间用于重新裁剪。
    canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) throw new Error('当前浏览器无法处理图片，请更换浏览器后重试')
    context.drawImage(image, 0, 0)
    return { blob: await canvasToPng(canvas), width, height, name: file.name || 'avatar.png' }
  } finally {
    image?.close?.()
    if (canvas) { canvas.width = 0; canvas.height = 0 }
  }
}
