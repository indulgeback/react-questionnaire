import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(response => {
  const responseData = response.data
  // 解构状态码与错误提示信息
  const { code, msg } = responseData
  if (code === 1) {
    return responseData
  } else {
    if (msg) {
      message.error(msg)
      throw new Error(msg)
    }
  }
})

export default instance
