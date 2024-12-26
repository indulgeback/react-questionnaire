import { useRequest } from 'ahooks'
import apis from '@/apis'
import { RespType } from '@/apis/modules/types/common'
import { UseLoadQestionListParams } from './types'
import { useState } from 'react'
import { QuestionListResponse } from '@/apis/modules/types/question'

const useLoadQuestionList = (
  useLoadQuestionListParams: UseLoadQestionListParams
): {
  loading: boolean
  res: RespType<QuestionListResponse>
} => {
  const { currentView, stepSize, search, type } = useLoadQuestionListParams
  // 使用 useRequest 获取数据
  const { loading, data: res } = useRequest(
    () => apis.questionApi.getQuestionList(currentView, stepSize, search, type),
    {
      refreshDeps: [currentView, stepSize, search]
    }
  )

  return {
    loading,
    res: res as RespType<QuestionListResponse>
  }
}

export default useLoadQuestionList
