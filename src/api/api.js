import axios from 'axios'

// 创建一个axios实例
const apiClient = axios.create({
  baseURL: '/personal-website/config',
  headers: {
    'Content-Type': 'application/json'
  }
})

// 定义一个函数来获取数据
export function getProjects() {
  return apiClient
    .get('/projects.json')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching data:', error)
      throw error
    })
}

