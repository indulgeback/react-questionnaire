import request from '@/utils/request'
import { RespType } from './types/common'
import qs from 'qs'
import { QuestionListType } from '@/hooks/types'
import { Question, QuestionListResponse } from './types/question'

// 统一前缀
const prefix = '/api/question'

/**
 * 获取问卷列表
 */
const getQuestionList = (page: number, limit: number, search: string, type: QuestionListType) =>
  request.get<any, RespType<QuestionListResponse>>(
    `${prefix}?${qs.stringify({ page, limit, search, type })}`
  )

/**
 * 获取问卷详情
 */
const getQuestionById = (id: number) => request.get<number, RespType<Question>>(`${prefix}/${id}`)

/**
 * 创建问卷
 */
const createQuestion = () => request.post<any, RespType<{ id: number }>>(`${prefix}`)

/**
 * 收藏问卷
 */
const favorateQuestion = (id: number) =>
  request.get<number, RespType<any>>(`${prefix}/favorate/${id}`)

/**
 * 取消收藏问卷
 */
const unFavorateQuestion = (id: number) =>
  request.delete<number, RespType<any>>(`${prefix}/favorate/${id}`)

/**
 * 删除问卷
 */
const deleteQuestion = (id: number) => request.delete<number, RespType<any>>(`${prefix}/${id}`)

export default {
  getQuestionList,
  getQuestionById,
  createQuestion,
  favorateQuestion,
  unFavorateQuestion,
  deleteQuestion
}
