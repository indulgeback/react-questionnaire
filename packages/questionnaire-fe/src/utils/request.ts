import axios, { AxiosInstance } from 'axios'

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
  return response.data
})

export default instance
