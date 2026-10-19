import request from '@/utils/request'
import { resolveProjectImage } from '@/utils/projectImage'

export async function getProjects(options = {}) {
  const { data } = await request.get('/public/projects', { ...options, skipAuth: true })
  if (!Array.isArray(data.data)) throw new Error('项目数据响应异常')
  return {
    projects: data.data.map(project => ({
      ...project,
      images: Array.isArray(project.images) ? project.images.map(resolveProjectImage).filter(Boolean) : []
    }))
  }
}

