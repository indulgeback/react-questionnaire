import request from '@/utils/request'
import { RespType } from './types/common'

const prefix = '/api/answer'

// 获取问卷统计数据 - 旧接口

const getQuestionStats = (id: string) => request.get<string, RespType<any>>(`${prefix}/${id}`)

export default {
  getQuestionStats
}
