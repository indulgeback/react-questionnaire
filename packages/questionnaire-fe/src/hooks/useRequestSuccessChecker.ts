import { RespType } from '@/apis/modules/types/common'
import { App } from 'antd'

/**
 * 钩子函数，用于检查请求是否成功并显示相应的通知
 * 该函数的主要作用是根据响应结果判断请求状态，并通过Snackbar通知用户
 * @returns {Object} 返回一个对象，包含一个用于检查请求是否成功的函数
 */
const useRequestSuccessChecker = () => {
  const { message } = App.useApp()
  /**
   * 检查请求是否成功
   * 根据响应代码判断请求是否成功，并显示相应的Snackbar通知
   * @param {RespType<any>} response 请求的响应数据，用于判断请求状态
   */
  const isRequestSuccess = (response: RespType<any>) => {
    // 如果响应代码为1，表示请求成功，显示成功通知
    if (response?.code === 1) {
      message.success(response?.msg)
      return true
    } else {
      // 如果响应代码不为1，表示请求失败，显示错误通知
      message.error(response?.msg)
      return false
    }
  }

  // 返回包含检查请求成功与否的函数
  return {
    isRequestSuccess
  }
}

export default useRequestSuccessChecker
