import { LOGIN_PATH } from '@/router'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { getTokenFormStorage } from '.'

// 创建axios实例
const instance: AxiosInstance = axios.create({
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  const token = getTokenFormStorage()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.href = LOGIN_PATH
    }
    return Promise.reject(error)
  }
)

export default instance
