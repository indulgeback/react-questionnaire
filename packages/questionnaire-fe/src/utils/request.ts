import axios, { AxiosInstance } from 'axios'
// ... 处理请求

// const enqueueSnackbar = store.getState().utils.enqueueSnackbar as unknown as EnqueueSnackbar

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
    return
  }
})

export default instance
