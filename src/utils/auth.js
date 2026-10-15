import { readonly, ref } from 'vue'

const TOKEN_KEY = 'Personal-Website-Admin-Token'

function validLogin(value) {
  return value?.version === 2 && typeof value.token === 'string' &&
    value.token.length > 0 && value.token.length <= 8192
}

function tokenExpiry(token) {
  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    const { exp } = JSON.parse(atob(payload.padEnd(Math.ceil(payload.length / 4) * 4, '=')))
    const expiresAt = exp * 1000
    return Number.isSafeInteger(expiresAt) && expiresAt > 0 ? expiresAt : null
  } catch {
    return null
  }
}

function readLogin() {
  try {
    const value = JSON.parse(sessionStorage.getItem(TOKEN_KEY))
    if (validLogin(value)) return { ...value, expiresAt: tokenExpiry(value.token) }
    sessionStorage.removeItem(TOKEN_KEY)
  } catch {
    // 浏览器禁用存储时，仍可在当前页面内使用登录状态。
  }
  return null
}

const login = ref(readLogin())
export const tokenState = readonly(login)

function persist() {
  try {
    if (login.value) sessionStorage.setItem(TOKEN_KEY, JSON.stringify(login.value))
    else sessionStorage.removeItem(TOKEN_KEY)
  } catch {
    // 不记录 Token 或浏览器存储内容。
  }
}

export function getToken() {
  return login.value?.token || ''
}

export function setToken(token) {
  // JWT 的 exp 仅用于展示；会话是否有效始终由 /getInfo 验证。
  const value = { version: 2, token, expiresAt: typeof token === 'string' ? tokenExpiry(token) : null }
  if (!validLogin(value)) throw new Error('登录令牌响应异常，请重新登录')
  login.value = value
  persist()
}

export function removeToken() {
  login.value = null
  persist()
}

