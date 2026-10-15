import request from '@/utils/request'

export const getCaptcha = (options = {}) => request.get('/captchaImage', {
  ...options,
  params: { _t: Date.now() },
  skipAuth: true
})
export const login = ({ username, password, code, uuid }, options = {}) => request.post(
  '/login', { username, password, code, uuid }, { ...options, skipAuth: true }
)
export const getProfile = (options = {}) => request.get('/getInfo', options)
export const logout = (options = {}) => request.post('/logout', null, options)
