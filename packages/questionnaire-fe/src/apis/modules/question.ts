import request from '@/utils/request'
import { RespType } from './types/common'
import qs from 'qs'
import { QuestionListType } from '@/hooks/types'

// 统一前缀
const prefix = '/api/question'

/**
 * 获取问卷列表
 */
const getQuestionList = (page: number, limit: number, search: string, type: QuestionListType) =>
  request.get<any, RespType<any>>(`${prefix}?${qs.stringify({ page, limit, search, type })}`)

/**
 * 获取问卷详情
 */
const getQuestionById = (id: string) => request.get<string, RespType<any>>(`${prefix}/${id}`)

/**
 * 创建问卷
 */
const createQuestion = () => request.post<any, RespType<{ id: string }>>(`${prefix}`)

/**
 * 收藏问卷
 */
const favorateQuestion = (id: string) =>
  request.get<string, RespType<any>>(`${prefix}/favorate/${id}`)

/**
 * 取消收藏问卷
 */
const unFavorateQuestion = (id: string) =>
  request.get<string, RespType<any>>(`${prefix}/favorate/${id}`)

/**
 * 删除问卷
 */
const deleteQuestion = (id: string) => request.delete<string, RespType<any>>(`${prefix}/${id}`)

export default {
  getQuestionList,
  getQuestionById,
  createQuestion,
  favorateQuestion,
  unFavorateQuestion,
  deleteQuestion
}
