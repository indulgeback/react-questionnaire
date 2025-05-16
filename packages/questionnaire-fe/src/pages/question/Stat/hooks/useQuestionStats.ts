import { useState } from 'react'
import { useRequest } from 'ahooks'
import apis from '@/apis'

// 题型中英文映射
export const questionTypeMap = {
  questionTitle: '标题',
  questionShortAnswer: '简答题',
  questionParagraph: '段落题',
  questionRadio: '单选题',
  questionCheckbox: '多选题',
  questionDropdown: '下拉选择题',
  questionRating: '评分题',
  questionNPS: 'NPS评分题',
  questionMatrixRadio: '矩阵单选题',
  questionMatrixCheckbox: '矩阵多选题',
  questionSlider: '滑块题',
  questionDate: '日期选择题',
  other: '其他'
}

// 统计数据类型定义
export interface QuestionStat {
  questionId: string | number
  questionType: string
  totalResponses: number
  statistics?: Record<string, any>
  textAnswers?: string[]
  summary?: {
    averageScore?: number
    medianScore?: number
    maxScore?: number
    minScore?: number
    mostCommon?: { value: any; count: number }[]
  }
  // 后端直接提供的增强数据
  question?: string // 问题文本
  questionTypeName?: string // 问题类型的中文名称
  options?: { text: string; value: string }[] // 选项列表(针对单选、多选等)
  componentInfo?: {
    title: string
    type: string
    props: any
    options: any
  }
}

export interface UseQuestionStatsResult {
  loading: boolean
  error: Error | null
  statsData: QuestionStat[] | null
  questionnaireTitle: string
  questionnaireDesc: string
  totalResponseCount: number
}

/**
 * 问卷统计数据 Hook
 * 直接使用后端增强的统计数据
 */
export default function useQuestionStats(questionnaireId?: string): UseQuestionStatsResult {
  const [questionnaireTitle, setQuestionnaireTitle] = useState('问卷统计分析')
  const [questionnaireDesc, setQuestionnaireDesc] = useState('')

  // 加载问卷详情
  const {
    loading: loadingDetail,
    data: questionDetail,
    error: detailError
  } = useRequest(
    async () => {
      if (!questionnaireId) return null
      const res = await apis.questionApi.getQuestionById(parseInt(questionnaireId))
      return res.data
    },
    {
      refreshDeps: [questionnaireId],
      onSuccess: data => {
        if (data) {
          setQuestionnaireTitle(data.title || '问卷统计分析')
          setQuestionnaireDesc(data.description || '')
        }
      }
    }
  )

  // 加载统计数据 - 直接使用后端增强的统计数据
  const {
    loading: loadingStats,
    data: statsData,
    error: statsError
  } = useRequest(
    async () => {
      if (!questionnaireId) return null
      // 确保questionnaireId是字符串
      const idStr = String(questionnaireId)
      console.log('[useQuestionStats] 获取统计数据, id:', idStr)
      const res = await apis.answerApi.getQuestionStats(idStr)
      console.log('[useQuestionStats] 获取到统计数据:', res.data)

      // 处理统计数据，为每个项目添加中文题型名称（如果后端没有提供）
      if (res.data && Array.isArray(res.data)) {
        return res.data.map(item => ({
          ...item,
          // 如果后端未提供questionTypeName，则从映射表中获取
          questionTypeName:
            item.questionTypeName ||
            questionTypeMap[item.questionType as keyof typeof questionTypeMap] ||
            '未知类型'
        }))
      }

      return res.data
    },
    {
      refreshDeps: [questionnaireId]
    }
  )

  // 整合错误
  const error = detailError || statsError || null

  // 总答卷数
  const totalResponseCount = questionDetail?.answer_count || 0

  // 增加日志
  console.log('[useQuestionStats] 最终返回数据:', {
    loading: loadingDetail || loadingStats,
    error,
    statsData,
    questionnaireTitle,
    questionnaireDesc,
    totalResponseCount
  })

  return {
    loading: loadingDetail || loadingStats,
    error,
    statsData,
    questionnaireTitle,
    questionnaireDesc,
    totalResponseCount
  }
}
