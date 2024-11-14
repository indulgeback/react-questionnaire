import request from '@/utils/request'
import { RespType } from './types/common'

const prefix = '/api/mail'

const sendEmailCode = (data: { email: string }) =>
  request.post<any, RespType<any>>(`${prefix}/send`, data)

const verifyEmailCode = (data: { email: string; code: string }) =>
  request.post<any, RespType<any>>(`${prefix}/verify`, data)

export default { sendEmailCode, verifyEmailCode }
