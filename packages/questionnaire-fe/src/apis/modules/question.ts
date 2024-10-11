import request from '@/utils/request'
import type { createQuestionRespType } from './types/question'

// 统一前缀
const prefix = '/api/question'

/**
 * 获取问卷列表
 */
export const getQuestionList = async (page: number, limit: number) => {
  const { data } = await request.get(`${prefix}?page=${page}&limit=${limit}`)
  return data
}

/**
 * 获取问卷详情
 */
export const getQuestionById = async (id: string) => {
  const { data } = await request.get(`${prefix}/${id}`)
  return data
}

/**
 * 创建问卷
 */
export const createQuestion = async () => {
  const { data } = (await request.post(`${prefix}`)) as createQuestionRespType
  return data
}
