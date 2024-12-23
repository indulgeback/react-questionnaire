import { useRequest } from 'ahooks'
import apis from '@/apis'
import { RespType } from '@/apis/modules/types/common'
import { UseLoadQestionListParams } from './types'
import { useState } from 'react'

const useLoadQuestionList = (
  useLoadQuestionListParams: UseLoadQestionListParams
): {
  loading: boolean
  res: RespType<any>
  refresh: () => void
} => {
  const [forceRefresh, setForceRefresh] = useState(false)
  const { currentView, stepSize, search, type } = useLoadQuestionListParams
  // 使用 useRequest 获取数据
  const { loading, data: res } = useRequest(
    () => apis.questionApi.getQuestionList(currentView, stepSize, search, type),
    {
      refreshDeps: [currentView, stepSize, search, forceRefresh]
    }
  )

  const refresh = () => {
    setForceRefresh(!forceRefresh)
  }

  return {
    loading,
    res: res as RespType<any>,
    refresh
  }
}

export default useLoadQuestionList
