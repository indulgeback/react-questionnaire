import request from '@/utils/request'
import { RespType } from './types/common'
import { UserInfo, UserProfile } from './types/auth'

// 统一前缀
const prefix = '/api/auth'

/**
 * 用户注册
 */
const register = (data: UserInfo) => request.post<any, RespType<any>>(`${prefix}/register`, data)

/**
 * 用户登录
 */
const login = (data: UserInfo) => request.post<any, RespType<any>>(`${prefix}/login`, data)

/**
 * 获取用户信息
 */
const getUserInfo = () => request.get<any, RespType<UserProfile>>(`${prefix}/info`)

export default {
  register,
  login,
  getUserInfo
}
