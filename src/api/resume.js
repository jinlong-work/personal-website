import request from '@/utils/request'

export const getPublicResume = (options = {}) =>
  request.get('/public/resume', { ...options, skipAuth: true })
export const getAdminResume = () => request.get('/system/resume')
export const saveAdminResume = (data) => request.put('/system/resume', data)
