import request from '@/utils/request'
import { UserInfo } from './types/auth'

// 统一前缀
const prefix = '/api/auth'

/**
 * 获取问卷列表
 */
export const register = async (data: UserInfo) => {
  return await request.post(`${prefix}/register`, data)
}
