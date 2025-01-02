import { LOGIN_PATH } from '@/router'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { getTokenFromStorage } from '@/utils/index'

// 创建axios实例
const instance: AxiosInstance = axios.create({
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  const token = getTokenFromStorage()
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
      window.location.href = LOGIN_PATH + '?redirect=' + window.location.pathname
    }
    console.error(error)
    navigator.clipboard.writeText('https://github.com/indulgeback/react-questionnaire')
    return {
      code: 0,
      msg: '发生了预期之外的错误：请前往 github 提交issue，仓库地址已复制到剪贴板!' + error.message,
      data: null
    }
  }
)

export default instance
