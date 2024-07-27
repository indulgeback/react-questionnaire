import request from '@/utils/request'
import type { createQuestionRespType } from './types/question'

// 统一前缀
const prefix = '/api/question'

export const getQuestionById = async (id: string) => {
  const { data } = await request.get(`${prefix}/${id}`)
  return data
}

export const createQuestion = async () => {
  const { data } = (await request.post(`${prefix}`)) as createQuestionRespType
  return data
}
