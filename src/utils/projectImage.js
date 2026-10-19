import { detectImageType } from '@/utils/avatarImage'

const apiBase = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '')
export const PROJECT_IMAGE_ACCEPT = '.jpg,.jpeg,.png,.webp,.gif,.bmp,.avif,image/jpeg,image/png,image/webp,image/gif,image/bmp,image/avif'
export const isProjectImagePath = value => typeof value === 'string' && /^\/files\/projects\/[a-f0-9]{32}\.jpg$/.test(value)
export function resolveProjectImage(value) {
  if (isProjectImagePath(value)) return `${apiBase}${value}`
  return typeof value === 'string' && /^(blob:|\/img\/)/.test(value) ? value : ''
}

function loadImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob)
    const image = new Image()
    image.onload = () => { URL.revokeObjectURL(url); resolve(image) }
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('图片无法读取，请转换为 JPG / PNG 后重试')) }
    image.src = url
  })
}

export async function prepareProjectImage(file) {
  if (!file.size || file.size > 10 * 1024 * 1024) throw new Error(`${file.name}：请选择非空且不超过10MB的图片`)
  const bytes = new Uint8Array(await file.arrayBuffer())
  const blob = new Blob([bytes], { type: detectImageType(bytes) })
  let image
  let canvas
  try {
    if (typeof createImageBitmap === 'function') {
      try { image = await createImageBitmap(blob, { imageOrientation: 'from-image' }) } catch { /* 兼容浏览器的 Image 解码器。 */ }
    }
    image ||= await loadImage(blob)
    const width = image.naturalWidth || image.width
    const height = image.naturalHeight || image.height
    if (!width || !height || Math.max(width, height) > 8192 || width * height > 32_000_000) throw new Error(`${file.name}：边长不能超过8192，总像素不能超过3200万`)
    const scale = Math.min(1, 2560 / Math.max(width, height))
    canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(width * scale))
    canvas.height = Math.max(1, Math.round(height * scale))
    const context = canvas.getContext('2d')
    if (!context) throw new Error('当前浏览器无法处理图片')
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = 'high'
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    const output = await new Promise((resolve, reject) => {
      canvas.toBlob(value => value?.size ? resolve(value) : reject(new Error('图片转换失败，请重新选择')), 'image/jpeg', 0.9)
    })
    if (output.size > 10 * 1024 * 1024) throw new Error('处理后的图片超过10MB，请缩小图片后重试')
    return new File([output], `${file.name.replace(/\.[^.]+$/, '') || 'project'}.jpg`, { type: 'image/jpeg' })
  } finally {
    image?.close?.()
    if (canvas) { canvas.width = 0; canvas.height = 0 }
  }
}
