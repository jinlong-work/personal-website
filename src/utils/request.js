import axios from 'axios'
import { getToken, removeToken, updateTokenExpiry } from '@/utils/auth'

const request = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, ''),
  timeout: 15000
})

let onUnauthorized = () => {}

export function setUnauthorizedHandler(handler) {
  onUnauthorized = handler
}

request.interceptors.request.use((config) => {
  const token = config.skipAuth ? '' : getToken()
  if (token) config.headers.set('Authorization', `Bearer ${token}`)
  // 此字段仅在内存中标识本次请求，不发送给服务端，也不保存请求体。
  config.authToken = token
  return config
})

request.interceptors.response.use((response) => {
  updateTokenExpiry(response.config.authToken,
    Number(response.headers['x-token-expires-at']),
    Number(response.headers['x-token-max-expires-at']))
  return response
}, (error) => {
  const config = error.config
  const status = error.response?.status
  const invalidLogin = status === 401 || (status === 403 && error.response?.data?.code === 'FORBIDDEN')
  if (invalidLogin && config?.authToken && config.authToken === getToken()) {
    removeToken()
    onUnauthorized({ redirect: !config.suppressAuthRedirect })
  }
  return Promise.reject(error)
})

export default request
