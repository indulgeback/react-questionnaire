import useSseRequest from '@/utils/sseRequest'

const prefix = '/api/ai'

const generateQuestionnaire = (theme: string) => {
  const { eventSource, onMessage, onError, close } = useSseRequest(
    `${prefix}/generate?theme=${theme}`
  )

  return {
    eventSource,
    onMessage,
    onError,
    close
  }
}

// 新增：问卷分析方法
const analyzeQuestionnaire = (questionnaireId: string) => {
  const { eventSource, onMessage, onError, close } = useSseRequest(
    `${prefix}/analysis?questionnaire_id=${questionnaireId}`
  )

  return {
    eventSource,
    onMessage,
    onError,
    close
  }
}

export default {
  generateQuestionnaire,
  analyzeQuestionnaire
}
