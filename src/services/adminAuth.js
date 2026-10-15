import axios from 'axios'
import { readonly, ref } from 'vue'
import * as authApi from '@/api/admin/auth'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { getErrorStatus, setUnauthorizedHandler } from '@/utils/request'

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

function requireUser(response) {
  const { user: account, roles, permissions, isDefaultModifyPwd, isPasswordExpired } = response.data
  if (!account?.userId || typeof account.userName !== 'string' || account.status !== '0') {
    throw new Error('账号信息响应异常，请重新登录')
  }
  const roleKeys = Array.isArray(roles) ? roles.filter(role => typeof role === 'string') : []
  const roleNames = Array.isArray(account.roles)
    ? account.roles.filter(role => role.status === '0').map(role => role.roleName).filter(Boolean) : []
  const profile = {
    id: account.userId,
    username: account.userName,
    nickname: account.nickName || '',
    avatar: account.avatar || '',
    email: account.email || '',
    phone: account.phonenumber || '',
    department: account.dept?.deptName || '',
    lastLoginAt: account.loginDate,
    roles: roleKeys,
    canManageUsers: roleKeys.includes('admin') || roleKeys.includes('manager'),
    isSuperAdmin: roleKeys.includes('admin'),
    roleLabel: roleKeys.includes('admin') ? '超级管理员' : roleNames.join('、') || roleKeys.join('、') || '未分配角色',
    permissions: Array.isArray(permissions) ? permissions : [],
    needsPasswordUpdate: Boolean(isDefaultModifyPwd || isPasswordExpired)
  }
  user.value = profile
  return profile
}

export async function fetchLoginCaptcha(options = {}) {
  const { data } = await authApi.getCaptcha(options)
  if (data.captchaEnabled === false) return { enabled: false, image: '', uuid: '' }
  if (typeof data.img !== 'string' || !data.img || !/^[a-f\d]{32}$/i.test(data.uuid || '')) {
    throw new Error('验证码加载异常，请点击重试')
  }
  return { enabled: true, image: `data:image/jpeg;base64,${data.img}`, uuid: data.uuid }
}

export async function loginAdmin(credentials, options = {}) {
  clearAdminLogin()
  const { data } = await authApi.login(credentials, options)
  const issuedToken = data.token
  try {
    setToken(issuedToken)
    return await fetchCurrentAdmin({ ...options, suppressAuthRedirect: true })
  } catch (error) {
    if (getToken() === issuedToken) clearAdminLogin()
    throw error
  }
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
  return getErrorStatus(error) === 401
}

export async function logoutAdmin() {
  try {
    if (getToken()) await authApi.logout()
  } catch (error) {
    // 登录已失效时也完成本机退出。
    if (!isSessionError(error)) throw error
  }
  clearAdminLogin()
}

export function authErrorMessage(error) {
  const status = getErrorStatus(error)
  const message = error.response?.data?.msg
  if (status === 429) return message || '登录尝试过于频繁，请稍后再试'
  if (status === 401) return message || '账号或密码错误，请重新输入'
  if (status === 403) return message || '此账号没有访问权限'
  if (status === 400) return message || '请检查账号、密码和验证码'
  if (status === 409) return message || '该登录账号已被使用'
  if (status === 404) return '登录接口暂不可用，请稍后重试'
  if (status >= 500) return '登录服务暂时不可用，请稍后重试'
  if (error.code === 'ECONNABORTED') return '请求超时，请稍后重试'
  if (axios.isAxiosError(error)) return '无法连接后台服务，请确认后端已启动'
  return error.message || '操作失败，请稍后重试'
}
