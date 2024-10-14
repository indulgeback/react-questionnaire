import request from '@/utils/request'
import { RespType } from './types/common'

// 统一前缀
const prefix = '/api/question'

/**
 * 获取问卷列表
 */
export const getQuestionList = async (page: number, limit: number) => {
  return await request.get<any, RespType<any>>(`${prefix}?page=${page}&limit=${limit}`)
}

/**
 * 获取问卷详情
 */
export const getQuestionById = async (id: string) => {
  return await request.get<string, RespType<any>>(`${prefix}/${id}`)
}

/**
 * 创建问卷
 */
export const createQuestion = async () => {
  return await request.post<any, RespType<{ id: string }>>(`${prefix}`)
}
