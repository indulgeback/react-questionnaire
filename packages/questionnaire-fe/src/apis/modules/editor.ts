import request from '@/utils/request'
import { RespType } from './types/common'
import { ComponentInfoType } from '@/store/modules/componentsSlice'
import { PageConfigType } from '@/store/modules/pageConfigSlice'

// 统一前缀
const prefix = '/api/editor'

/**
 * 保存问卷详情
 * @param params 问卷详情参数
 * @returns 保存结果
 */
const saveQuestionnaireDetail = (params: {
  questionnaire_id: number
  title: string
  description: string
  components: ComponentInfoType[]
  version: number
}) => {
  return request.post<any, RespType<null>>(`${prefix}/save`, params)
}

/**
 * 创建新问卷
 * @param params 问卷详情参数
 * @returns 创建结果
 */
const createQuestionnaire = (params: {
  questionnaire_id: number
  title: string
  description: string
  components: ComponentInfoType[]
  version: number
}) => {
  return request.post<any, RespType<null>>(`${prefix}/create`, params)
}

/**
 * 获取问卷详情
 * @param questionnaireId 问卷ID
 * @returns 问卷详情
 */
const getQuestionnaireDetail = (questionnaireId: string) => {
  return request.get<any, RespType<any>>(
    `${prefix}/getQuestionnaireDetail?questionnaireId=${questionnaireId}`
  )
}

const editorApi = {
  saveQuestionnaireDetail,
  getQuestionnaireDetail,
  createQuestionnaire
}

export default editorApi
