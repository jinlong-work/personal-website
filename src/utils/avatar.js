const avatarPath = /^\/files\/avatars\/[a-f0-9]{32}\.png$/
const apiBase = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '')

export function resolveAvatarUrl(value) {
  if (!value || typeof value !== 'string') return ''
  if (avatarPath.test(value)) return `${apiBase}${value}`
  // 本地选择预览与旧账号已保存的 HTTP 图片地址。
  if (/^(blob:|https?:\/\/)/i.test(value)) return value
  return ''
}

export function isAvatarPath(value) {
  return typeof value === 'string' && avatarPath.test(value)
}
