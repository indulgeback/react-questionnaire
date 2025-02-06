import request from '@/utils/request'
import { RespType } from './types/common'
import { UserInfo, UserProfile, ChangePasswordParams } from './types/auth'

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

/**
 * 修改密码
 */
const changePassword = (data: ChangePasswordParams) =>
  request.post<any, RespType<any>>(`${prefix}/changePassword`, data)

/**
 * 注销账户
 */
const deleteAccount = (id: string) => request.delete<any, RespType<any>>(`${prefix}/delete/${id}`)

export default {
  register,
  login,
  getUserInfo,
  changePassword,
  deleteAccount
}
