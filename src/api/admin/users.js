import request from '@/utils/request'

export const listUsers = (params, options = {}) => request.get('/system/users', { ...options, params })
export const createUser = (data) => request.post('/system/users', data)
export const updateUser = (userId, data) => request.put(`/system/users/${userId}`, data)
export const setUserRole = (userId, role) => request.put(`/system/users/${userId}/role`, { role })
export const setUserStatus = (userId, status) => request.put(`/system/users/${userId}/status`, { status })
export const resetUserPassword = (userId, data) => request.put(`/system/users/${userId}/password`, data)
