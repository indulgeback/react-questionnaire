import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Spin, Empty, Alert, Divider, Typography, Button } from 'antd'
import {
  StatComponents,
  PieChartStat,
  BarChartStat,
  RatingStat,
  MatrixStat,
  WordCloudStat,
  DateStat
} from './components'
import useQuestionStats from './hooks/useQuestionStats'
import type { QuestionStat } from './hooks/useQuestionStats'
import apis from '@/apis'
import { useRequest } from 'ahooks'

const { Title, Paragraph } = Typography

/**
 * 问卷统计分析页面
 */
const QuestionStat: React.FC = () => {
  const { id = '' } = useParams() // 从URL参数中获取问卷ID
  const navigate = useNavigate()

  // 使用统一的Hook获取统计数据
  const { loading, error, statsData, questionnaireTitle, questionnaireDesc, totalResponseCount } =
    useQuestionStats(id)

  console.log('[QuestionStat] 当前数据:', statsData)

  // 导航到AI分析页面
  const goToAIAnalysis = () => {
    navigate(`/question/ai-analysis/${id}`)
  }

  // 渲染统计组件
  const renderStatComponent = (item: QuestionStat) => {
    const { questionType, questionId, question } = item

    try {
      // 根据不同题型准备数据
      switch (questionType) {
        case 'questionRadio':
        case 'questionDropdown': {
          // 单选题和下拉选择题 - 使用PieChartStat
          if (!item.statistics) return null
          const pieData = Object.entries(item.statistics).map(([option, stats]: [string, any]) => ({
            option,
            count: stats.count,
            percentage: stats.percentage
          }))

          // 使用具体组件类型，显示后端返回的问题标题
          return <PieChartStat question={question || `问题ID: ${questionId}`} data={pieData} />
        }

        case 'questionCheckbox': {
          // 多选题 - 使用BarChartStat
          if (!item.statistics) return null
          const barData = Object.entries(item.statistics).map(([option, stats]: [string, any]) => ({
            option,
            count: stats.count,
            percentage: stats.percentage
          }))

          // 使用具体组件类型，显示后端返回的问题标题
          return <BarChartStat question={question || `问题ID: ${questionId}`} data={barData} />
        }

        case 'questionRating':
        case 'questionNPS':
        case 'questionSlider': {
          // 评分类题目 - 使用RatingStat
          if (!item.statistics || !item.summary) return null
          const ratingData = Object.entries(item.statistics).map(
            ([score, stats]: [string, any]) => ({
              score: parseInt(score),
              count: stats.count,
              percentage: stats.percentage
            })
          )

          // 使用具体组件类型，显示后端返回的问题标题
          return (
            <RatingStat
              question={question || `问题ID: ${questionId}`}
              data={ratingData}
              maxScore={item.summary.maxScore || 5}
            />
          )
        }

        case 'questionMatrixRadio':
        case 'questionMatrixCheckbox': {
          // 矩阵题 - 使用MatrixStat
          // 获取矩阵题的行列信息，优先从componentInfo中获取
          let rows: string[] = []
          let columns: string[] = []

          // 尝试从component信息中获取行列数据
          if (item.componentInfo?.options) {
            rows = item.componentInfo.options.rows || []
            columns = item.componentInfo.options.columns || []
            console.log('从组件配置获取矩阵行列:', { rows, columns })
          }

          const matrixData: Array<{
            row: string
            column: string
            count: number
            percentage: number
          }> = []

          // 处理统计数据(如果存在)
          if (item.statistics && typeof item.statistics === 'object') {
            // 如果rows为空，从statistics中获取
            if (rows.length === 0) {
              rows = Object.keys(item.statistics)
            }

            // 处理矩阵数据
            rows.forEach(row => {
              if (item.statistics && item.statistics[row]) {
                Object.entries(item.statistics[row]).forEach(([column, stats]: [string, any]) => {
                  if (!columns.includes(column)) {
                    columns.push(column)
                  }

                  matrixData.push({
                    row,
                    column,
                    count: stats.count,
                    percentage: stats.percentage
                  })
                })
              }
            })
          }

          // 如果没有数据，但有行列信息，生成默认数据(全部0)
          if (matrixData.length === 0 && rows.length > 0 && columns.length > 0) {
            rows.forEach(row => {
              columns.forEach(column => {
                matrixData.push({
                  row,
                  column,
                  count: 0,
                  percentage: 0
                })
              })
            })
          }

          // 如果还是没有数据，则无法显示
          if (rows.length === 0 || columns.length === 0) {
            return (
              <div className="bg-gray-800 rounded-xl p-6 text-center text-gray-300">
                该矩阵题暂无数据或无法解析
              </div>
            )
          }

          // 矩阵组件，显示后端返回的问题标题
          return (
            <MatrixStat
              question={question || `问题ID: ${questionId}`}
              data={matrixData}
              rows={rows}
              columns={columns}
            />
          )
        }

        case 'questionShortAnswer':
        case 'questionParagraph': {
          // 文本题 - 使用WordCloudStat
          if (!item.textAnswers || !item.summary?.mostCommon) return null

          const wordCloudData = item.summary.mostCommon.map((word: any) => ({
            text: word.value,
            value: word.count,
            name: word.value
          }))

          // 使用具体组件类型，显示后端返回的问题标题
          return (
            <WordCloudStat
              question={question || `问题ID: ${questionId}`}
              data={wordCloudData}
              responseCount={item.totalResponses}
            />
          )
        }

        case 'questionDate': {
          // 日期题 - 使用DateStat
          if (!item.statistics) return null

          // 将日期按月份分组
          const datesByMonth: Record<string, number> = {}

          Object.entries(item.statistics).forEach(([date, stats]: [string, any]) => {
            const month = date.substring(0, 7) // 提取YYYY-MM
            datesByMonth[month] = (datesByMonth[month] || 0) + stats.count
          })

          // 转换为DateStat组件需要的格式
          const dateData = Object.entries(datesByMonth).map(([range, count]) => ({
            range,
            count,
            percentage: (count / item.totalResponses) * 100
          }))

          // 找出最早和最晚日期
          const dates = Object.keys(item.statistics).sort()
          const earliestDate = dates[0] || ''
          const latestDate = dates[dates.length - 1] || ''

          // 找出出现频率最高的日期
          let mostFrequentDate = {
            date: '',
            count: 0
          }

          Object.entries(item.statistics).forEach(([date, stats]: [string, any]) => {
            if (stats.count > mostFrequentDate.count) {
              mostFrequentDate = {
                date,
                count: stats.count
              }
            }
          })

          // 使用具体组件类型，显示后端返回的问题标题
          return (
            <DateStat
              question={question || `问题ID: ${questionId}`}
              data={dateData}
              responseCount={item.totalResponses}
              earliestDate={earliestDate}
              latestDate={latestDate}
              mostFrequentDate={mostFrequentDate}
            />
          )
        }

        default:
          return null
      }
    } catch (error) {
      console.error(`渲染统计组件出错:`, error)
      return <div className="text-red-500">渲染统计组件出错: {String(error)}</div>
    }
  }

  // 加载状态
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <Spin size="large" />
      </div>
    )
  }

  // 错误状态
  if (error) {
    return (
      <div className="p-8">
        <Alert
          message="获取统计数据失败"
          description="无法加载问卷统计数据，请稍后再试。"
          type="error"
          showIcon
        />
      </div>
    )
  }

  // 没有数据状态
  if (!statsData || statsData.length === 0) {
    return (
      <div className="p-8 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <Empty description="暂无统计数据" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="text-center mb-8">
          <Title level={2} style={{ color: '#38bdf8', marginBottom: '8px' }}>
            {questionnaireTitle}
          </Title>
          <Paragraph style={{ color: '#94a3b8' }}>
            {questionnaireDesc || '问卷统计分析报告'}
          </Paragraph>
          <Paragraph style={{ color: '#64748b' }}>共有 {totalResponseCount} 份答卷</Paragraph>

          {/* AI分析按钮 */}
          <Button
            type="primary"
            size="large"
            onClick={goToAIAnalysis}
            style={{ marginTop: '12px', background: '#4338ca' }}
          >
            AI智能分析
          </Button>
        </div>

        {/* 统计结果展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {statsData.map((item: QuestionStat, index: number) => {
            // 每个题型的统计卡片
            const statComponent = renderStatComponent(item)

            if (!statComponent) return null

            return (
              <div key={index} className="col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-4">
                  题目 {index + 1} ({item.questionTypeName})
                </h2>
                {statComponent}
                <Divider style={{ borderColor: '#4b5563' }} />
                <div className="text-sm text-gray-400">总回答数: {item.totalResponses}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuestionStat
