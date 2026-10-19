import request from '@/utils/request'

export const listProjects = (params, options = {}) => request.get('/system/projects', { ...options, params })
export const getProject = id => request.get(`/system/projects/${id}`)
export const createProject = data => request.post('/system/projects', data)
export const updateProject = (id, data) => request.put(`/system/projects/${id}`, data)
export const setProjectStatus = (id, status, version) => request.put(`/system/projects/${id}/status`, { status, version })
export const deleteProject = (id, version) => request.delete(`/system/projects/${id}`, { params: { version } })
export const uploadProjectImage = (file, onUploadProgress) => {
  const body = new FormData()
  body.append('file', file)
  return request.post('/files/projects', body, { timeout: 60000, onUploadProgress })
}
