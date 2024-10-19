import axios, { AxiosInstance } from 'axios'
import { App } from 'antd'
// ... 处理请求

// 创建axios实例
const instance: AxiosInstance = axios.create({
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
})

// 响应拦截器
instance.interceptors.response.use(response => {
  const responseData = response.data
  // 解构状态码与错误提示信息
  const { code, msg } = responseData
  if (code === 1) {
    return responseData
  } else {
    if (msg) {
      // 错误信息统一处理
      if ((window as any).message) {
        ;(window as any).message.error(msg)
      }
    }
    return Promise.reject()
  }
})

export default instance
