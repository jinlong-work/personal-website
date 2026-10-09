import request from '@/utils/request'

export const login = (username, password) => request.post('/auth/login', { username, password }, { skipAuth: true })
export const getProfile = (options = {}) => request.get('/auth/me', options)
export const updateProfile = (data) => request.put('/auth/me', data)
export const updatePassword = (data) => request.put('/auth/me/password', data)
export const logout = () => request.post('/auth/logout')
