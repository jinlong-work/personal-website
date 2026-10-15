import axios from 'axios'
import { getToken, removeToken } from '@/utils/auth'

const request = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, ''),
  timeout: 15000
})

let onUnauthorized = () => {}

export function setUnauthorizedHandler(handler) {
  onUnauthorized = handler
}

export function getErrorStatus(error) {
  return error?.businessCode || error?.response?.status
}

function handleUnauthorized(error) {
  const config = error.config
  // 403 表示本次操作无权限，不等同于登录失效。
  if (getErrorStatus(error) === 401 && config?.authToken && config.authToken === getToken()) {
    removeToken()
    onUnauthorized({ redirect: !config.suppressAuthRedirect })
  }
  return Promise.reject(error)
}

request.interceptors.request.use((config) => {
  const token = config.skipAuth ? '' : getToken()
  if (token) config.headers.set('Authorization', `Bearer ${token}`)
  // 此字段仅在内存中标识本次请求，不发送给服务端，也不保存请求体。
  config.authToken = token
  return config
})

request.interceptors.response.use((response) => {
  const body = response.data
  if (body?.code !== 200) {
    const error = new axios.AxiosError(
      body?.msg || '后台响应异常，请稍后重试',
      'ERR_BAD_RESPONSE', response.config, response.request, response
    )
    error.businessCode = Number.isInteger(body?.code) && body.code >= 400 && body.code <= 599
      ? body.code : 502
    return handleUnauthorized(error)
  }
  return response
}, handleUnauthorized)

export default request
