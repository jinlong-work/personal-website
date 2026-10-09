import { readonly, ref } from 'vue'

const TOKEN_KEY = 'Personal-Website-Admin-Token'

function validLogin(value) {
  return typeof value?.token === 'string' && value.token.length > 0 && value.token.length <= 4096 &&
    Number.isSafeInteger(value.expiresAt) && Number.isSafeInteger(value.maxExpiresAt) &&
    value.expiresAt > 0 && value.maxExpiresAt >= value.expiresAt
}

function readLogin() {
  try {
    const value = JSON.parse(sessionStorage.getItem(TOKEN_KEY))
    if (validLogin(value)) return value
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

export function setToken({ token, expiresAt, maxExpiresAt }) {
  const value = { token, expiresAt, maxExpiresAt }
  if (!validLogin(value)) throw new Error('登录令牌响应异常，请重新登录')
  login.value = value
  persist()
}

export function removeToken() {
  login.value = null
  persist()
}

export function updateTokenExpiry(token, expiresAt, maxExpiresAt) {
  const current = login.value
  if (!current || token !== current.token || maxExpiresAt !== current.maxExpiresAt) return
  const value = { token, expiresAt, maxExpiresAt }
  if (!validLogin(value)) return
  // 并发请求的旧响应不能把较新的续期时间覆盖掉。
  login.value = { ...current, expiresAt: Math.max(current.expiresAt, expiresAt) }
  persist()
}
