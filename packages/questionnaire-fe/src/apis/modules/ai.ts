import useSseRequest from '@/utils/sseRequest'
import request from '@/utils/request'
import { RespType } from '@/apis/modules/types/common'
const prefix = '/api/ai'

// 获取可用的AI模型列表
const getModelList = async () => request.get<any, RespType<any>>(`${prefix}/models`)

// 生成问卷，支持模型选择和题目数量
const generateQuestionnaire = (theme: string, count = 10, model?: string) => {
  let url = `${prefix}/generate?theme=${theme}&count=${count}`
  if (model) {
    url += `&model=${model}`
  }

  const { eventSource, onMessage, onError, close } = useSseRequest(url)

  return {
    eventSource,
    onMessage,
    onError,
    close
  }
}

// 分析问卷，支持模型选择
const analyzeQuestionnaire = (questionnaireId: string, model?: string) => {
  let url = `${prefix}/analysis?questionnaire_id=${questionnaireId}`
  if (model) {
    url += `&model=${model}`
  }

  const { eventSource, onMessage, onError, close } = useSseRequest(url)

  return {
    eventSource,
    onMessage,
    onError,
    close
  }
}

export default {
  getModelList,
  generateQuestionnaire,
  analyzeQuestionnaire
}
