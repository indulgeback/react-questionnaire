import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2'

interface StatItem {
  option?: string
  word?: string
  count?: number
  percentage?: number
  frequency?: number
  score?: number
}

interface KeywordItem {
  text: string
  value: number
  name: string
}

interface QuestionData {
  question: string
  type: 'multiple-choice' | 'multi-choice' | 'rating' | 'open-question'
  stats?: StatItem[]
  keywords?: KeywordItem[]
}

const generateMockData = (): QuestionData[] => {
  return [
    {
      question: '您是否经历过校园暴力？',
      type: 'multiple-choice',
      stats: [
        { option: '经常经历', count: 120, percentage: 18.2 },
        { option: '偶尔经历', count: 280, percentage: 42.4 },
        { option: '从未经历', count: 250, percentage: 37.9 },
        { option: '不确定', count: 30, percentage: 4.5 }
      ]
    },
    {
      question: '您认为校园暴力的主要施暴者是？',
      type: 'multi-choice',
      stats: [
        { option: '同班同学', count: 380, percentage: 57.6 },
        { option: '高年级学生', count: 220, percentage: 33.3 },
        { option: '校外人员', count: 150, percentage: 22.7 },
        { option: '教师', count: 25, percentage: 3.8 }
      ]
    },
    {
      question: '您遭遇暴力时的心理状态评分（1-5分）',
      type: 'rating',
      stats: [
        { score: 5, count: 280, percentage: 42.4 },
        { score: 4, count: 220, percentage: 33.3 },
        { score: 3, count: 120, percentage: 18.2 },
        { score: 2, count: 50, percentage: 7.6 },
        { score: 1, count: 30, percentage: 4.5 }
      ]
    },
    {
      question: '您希望学校采取哪些措施？',
      type: 'open-question',
      keywords: [
        { text: '加强安保', value: 32, name: '加强安保' },
        { text: '心理辅导', value: 28, name: '心理辅导' },
        { text: '反暴力教育', value: 25, name: '反暴力教育' },
        { text: '匿名举报', value: 20, name: '匿名举报' },
        { text: '严惩施暴者', value: 18, name: '严惩施暴者' }
      ]
    },
    {
      question: '您认为校园暴力的主要原因是？',
      type: 'multiple-choice',
      stats: [
        { option: '家庭问题', count: 220, percentage: 33.3 },
        { option: '社会影响', count: 180, percentage: 27.3 },
        { option: '学校管理缺失', count: 250, percentage: 37.9 },
        { option: '其他', count: 50, percentage: 7.6 }
      ]
    },
    {
      question: '您遇到暴力时的应对方式是？',
      type: 'multi-choice',
      stats: [
        { option: '告诉家长', count: 350, percentage: 53.0 },
        { option: '向老师求助', count: 280, percentage: 42.4 },
        { option: '默默忍受', count: 120, percentage: 18.2 },
        { option: '以暴制暴', count: 50, percentage: 7.6 }
      ]
    }
  ]
}

const QuestionAnalysis: React.FC = () => {
  const [loading, setLoading] = React.useState(true)
  const [analysisData, setAnalysisData] = React.useState<QuestionData[]>([])
  const chartContainers = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setTimeout(() => {
      setAnalysisData(generateMockData())
      setLoading(false)
    }, 1000)
  }, [])

  const initCharts = React.useCallback(() => {
    analysisData.forEach((item, index) => {
      const container = chartContainers.current[index]
      if (!container) return

      // 清除之前的图表实例
      container.innerHTML = ''

      const chart = new Chart({
        container,
        autoFit: true,
        padding: 40,
        theme: 'dark'
      })

      const colors = ['#1890FF', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#13C2C2']

      switch (item.type) {
        case 'multiple-choice':
          chart
            .coordinate({ type: 'theta' })
            .interval()
            .data(item.stats || [])
            .transform({ type: 'stackY' })
            .encode('y', 'percentage')
            .encode('color', 'option')
            .axis(false)
            .style({
              lineWidth: 1,
              fillOpacity: 0.85
            })
            .animate('enter', { type: 'waveIn' })
            .scale('color', {
              range: colors
            })
            .label({
              text: (d: StatItem) => `${d.option}\n${d.percentage?.toFixed(1)}%`,
              position: 'outside',
              style: {
                fontSize: 12,
                fill: '#E5E7EB',
                textAlign: 'center'
              },
              transform: [
                {
                  type: 'overflowHide'
                }
              ]
            })
            .state('active', {
              style: {
                lineWidth: 2,
                fillOpacity: 0.95,
                stroke: '#fff'
              }
            })
            .interaction('elementHighlight')
            .tooltip({
              title: (d: StatItem) => d.option,
              items: [
                { field: 'count', label: '人数' },
                { field: 'percentage', label: '占比', transform: (v: number) => `${v.toFixed(1)}%` }
              ]
            })
          break

        case 'multi-choice':
          chart
            .interval()
            .data(item.stats || [])
            .transform({ type: 'sortX', by: 'y', reverse: true })
            .encode('x', 'option')
            .encode('y', 'count')
            .encode('color', 'option')
            .axis('y', {
              title: false,
              grid: true,
              label: {
                style: {
                  fill: '#9CA3AF'
                }
              }
            })
            .axis('x', {
              title: false,
              label: {
                style: {
                  fill: '#9CA3AF'
                }
              }
            })
            .style({
              fillOpacity: 0.85
            })
            .animate('enter', { type: 'fadeIn' })
            .scale('y', { nice: true })
            .scale('color', {
              range: colors
            })
            .label({
              text: (d: StatItem) => `${d.count}人\n${d.percentage?.toFixed(1)}%`,
              position: 'top',
              style: {
                fontSize: 12,
                fill: '#E5E7EB',
                textAlign: 'center'
              }
            })
          break

        case 'rating':
          chart
            .interval()
            .data(item.stats || [])
            .encode('x', 'score')
            .encode('y', 'count')
            .encode('color', 'score')
            .axis('y', {
              title: false,
              grid: true,
              label: {
                style: {
                  fill: '#9CA3AF'
                }
              }
            })
            .axis('x', {
              title: false,
              label: {
                style: {
                  fill: '#9CA3AF'
                }
              }
            })
            .style({
              fillOpacity: 0.85
            })
            .animate('enter', { type: 'fadeIn' })
            .scale('y', { nice: true })
            .scale('color', {
              range: ['#2FC25B']
            })
            .label({
              text: (d: StatItem) => `${d.count}人\n${d.percentage?.toFixed(1)}%`,
              position: 'top',
              style: {
                fontSize: 12,
                fill: '#E5E7EB',
                textAlign: 'center'
              }
            })
          break

        case 'open-question': {
          chart
            .wordCloud()
            .data(item.keywords || [])
            .layout({
              spiral: 'rectangular',
              fontSize: [16, 32],
              padding: 2,
              rotation: 0
            })
            .encode('text', 'text')
            .encode('size', 'value')
            .encode('color', 'text')
            .scale('color', {
              range: colors
            })
            .style({
              fontFamily: 'Verdana',
              fontWeight: 'normal'
            })
          break
        }
      }

      chart.render()

      // 监听容器大小变化，自动调整图表大小
      const observer = new ResizeObserver(() => {
        chart.forceFit()
      })
      observer.observe(container)

      // 组件卸载时清理
      return () => {
        observer.disconnect()
        chart.destroy()
      }
    })
  }, [analysisData])

  useEffect(() => {
    if (!loading && analysisData.length > 0) {
      initCharts()
    }
  }, [loading, analysisData, initCharts])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 sm:mb-4">
            校园暴力问卷调查分析
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">基于真实数据的深度分析报告</p>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4" />
                <div className="h-48 bg-gray-700 rounded-lg" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {analysisData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-blue-500 rounded-full mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-100 line-clamp-2">
                    {item.question}
                  </h2>
                </div>

                <div
                  ref={el => {
                    chartContainers.current[index] = el
                  }}
                  className="h-72 sm:h-80 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow"
                />

                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {(item.stats || item.keywords || []).map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="bg-gray-700 rounded-lg p-2 sm:p-3 flex justify-between items-center transform transition-all duration-200 hover:bg-gray-600"
                    >
                      <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-gray-200 text-xs sm:text-sm">
                        {'text' in stat ? stat.text : stat.option}
                      </span>
                      <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-blue-400 whitespace-nowrap">
                        {'value' in stat
                          ? `${stat.value}次`
                          : `${stat.count}人 (${stat.percentage?.toFixed(1)}%)`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionAnalysis
