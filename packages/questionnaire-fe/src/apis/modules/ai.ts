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

export default {
  generateQuestionnaire
}
