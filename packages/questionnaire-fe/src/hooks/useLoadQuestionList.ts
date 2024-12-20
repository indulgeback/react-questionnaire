import { useRequest } from 'ahooks'
import apis from '@/apis'
import { RespType } from '@/apis/modules/types/common'
import { UseLoadQestionListParams } from './types'

const useLoadQuestionList = (
  useLoadQuestionListParams: UseLoadQestionListParams
): {
  loading: boolean
  res: RespType<any>
} => {
  const { currentView, stepSize, search, type, forceRefresh } = useLoadQuestionListParams
  // 使用 useRequest 获取数据
  const { loading, data: res } = useRequest(
    () => apis.questionApi.getQuestionList(currentView, stepSize, search, type),
    {
      refreshDeps: [currentView, stepSize, search, forceRefresh]
    }
  )

  return {
    loading,
    res: res as RespType<any>
  }
}

export default useLoadQuestionList
