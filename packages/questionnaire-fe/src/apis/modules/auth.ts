import request from '@/utils/request'
import { UserInfo } from './types/auth'
import { RespType } from './types/common'

// 统一前缀
const prefix = '/api/auth'

/**
 * 用户注册
 */
export const register = async (data: UserInfo) => {
  return await request.post<any, RespType<any>>(`${prefix}/register`, data)
}

/**
 * 用户登录
 */
export const login = async (data: UserInfo) => {
  return await request.post<any, RespType<any>>(`${prefix}/login`, data)
}
