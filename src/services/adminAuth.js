import axios from 'axios'
import { readonly, ref } from 'vue'
import * as authApi from '@/api/admin/auth'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { setUnauthorizedHandler } from '@/utils/request'

const user = ref(null)
export const currentAdmin = readonly(user)
let sessionExpiredHandler = () => {}

export function clearAdminLogin() {
  removeToken()
  user.value = null
}

export function setSessionExpiredHandler(handler) {
  sessionExpiredHandler = handler
}

setUnauthorizedHandler(({ redirect }) => {
  user.value = null
  if (redirect) sessionExpiredHandler()
})

function requireUser(response, data = response.data?.data) {
  if (response.data?.code !== 'OK' || !data?.id || data.role !== 'ADMIN' || data.status !== 'ACTIVE') {
    throw new Error('登录响应异常，请稍后重试')
  }
  user.value = data
  return data
}

export async function loginAdmin(username, password) {
  const response = await authApi.login(username, password)
  const data = response.data?.data
  if (response.data?.code !== 'OK' || data?.tokenType !== 'Bearer') {
    throw new Error('登录响应异常，请稍后重试')
  }
  try {
    const profile = requireUser(response, data.user)
    setToken(data)
    return profile
  } catch (error) {
    clearAdminLogin()
    throw error
  }
}

export async function updateAdminProfile({ username, nickname, email }) {
  return requireUser(await authApi.updateProfile({ username, nickname, email }))
}

export async function updateAdminPassword({ currentPassword, newPassword, confirmPassword }) {
  const response = await authApi.updatePassword({ currentPassword, newPassword, confirmPassword })
  if (response.data?.code !== 'OK') throw new Error('密码修改结果异常，请重新登录确认')
  clearAdminLogin()
}

export async function fetchCurrentAdmin(options = {}) {
  try {
    return requireUser(await authApi.getProfile(options))
  } catch (error) {
    // 服务端无法验证登录状态时不显示缓存的账号资料。
    user.value = null
    throw error
  }
}

export function isSessionError(error) {
  return [401, 403].includes(error.response?.status)
}

export async function logoutAdmin() {
  try {
    if (getToken()) await authApi.logout()
  } catch (error) {
    // 登录已失效时也完成本机退出。
    if (error.response?.status !== 401) throw error
  }
  clearAdminLogin()
}

export function authErrorMessage(error) {
  if (error.response?.status === 429) return '登录尝试过于频繁，请稍后再试'
  if (error.response?.status === 401) return '账号或密码错误，请重新输入'
  if (error.response?.status === 403) return '访问被拒绝，请检查账号权限或网站来源配置'
  if (error.response?.status === 400) return error.response.data?.message || '请检查账号和密码'
  if (error.response?.status === 409) return error.response.data?.message || '该登录账号已被使用'
  if (error.response?.status >= 500) return '登录服务暂时不可用，请稍后重试'
  if (error.code === 'ECONNABORTED') return '请求超时，请稍后重试'
  if (axios.isAxiosError(error)) return '无法连接后台服务，请确认后端已启动'
  return error.message || '操作失败，请稍后重试'
}
