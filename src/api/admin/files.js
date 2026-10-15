import request from '@/utils/request'
import { isAvatarPath } from '@/utils/avatar'

export async function uploadAvatar(file) {
  const body = new FormData()
  body.append('file', file)
  const { data } = await request.post('/files/avatars', body, { timeout: 30000 })
  if (!isAvatarPath(data.data?.avatar)) throw new Error('头像上传响应异常，请重试')
  return data.data.avatar
}
