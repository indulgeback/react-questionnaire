import React, { useEffect, useRef, useState } from 'react'
import { Chart } from '@antv/g2'

interface KeywordItem {
  text: string
  value: number
  name?: string
  count?: number
}

interface WordCloudStatProps {
  question: string
  data: KeywordItem[]
  responseCount?: number
}

/**
 * 词云统计组件
 * 适用于：简答题、段落题等文本题型
 */
const WordCloudStat: React.FC<WordCloudStatProps> = ({ question, data, responseCount = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<Chart>()
  const [renderError, setRenderError] = useState(false)

  // 预处理数据，确保中文词汇能正确显示
  const processedData = React.useMemo(() => {
    if (!data || data.length === 0) return []

    // 确保所有项都有正确的text和value属性
    return data
      .map(item => ({
        text: item.text || item.name || '',
        value: typeof item.value === 'number' ? item.value : item.count || 1,
        name: item.name || item.text || ''
      }))
      .filter(item => item.text.trim() !== '')
  }, [data])

  useEffect(() => {
    if (!containerRef.current || !processedData || processedData.length === 0) return

    // 清除之前的图表实例
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    setRenderError(false)

    try {
      // 创建新图表
      const chart = new Chart({
        container: containerRef.current,
        autoFit: true,
        padding: 20,
        theme: 'dark'
      })
      chartRef.current = chart

      // G2 v5 词云图实现
      try {
        chart
          .wordCloud()
          .data(processedData)
          .encode('text', 'text')
          .encode('value', 'value')
          .encode('color', 'text')
          .scale('color', {
            range: ['#1890FF', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#13C2C2']
          })
          .style({
            fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif', // 添加中文字体支持
            fontWeight: 'normal',
            fontSize: (d: any) => {
              // 根据词长度和权重调整字体大小，避免中文词过大
              const textLength = d.text.length
              const baseFontSize = Math.min(Math.max(d.value * 1.5, 14), 42)
              // 中文词汇长度越长，字体越小
              return baseFontSize * (textLength > 3 ? 0.85 : 1)
            },
            padding: 3, // 增加词之间的间距
            rotation: () => {
              // 中文词汇优先使用水平方向
              const isChineseChar = (str: string) => /[\u4e00-\u9fa5]/.test(str)
              return isChineseChar(processedData[0]?.text || '')
                ? 0
                : [-30, 0, 30][Math.floor(Math.random() * 3)]
            }
          })
          .animate('enter', {
            animation: 'fadeIn',
            duration: 800
          })

        chart.render()
      } catch (wordCloudError) {
        console.error('词云特定渲染错误:', wordCloudError)
        setRenderError(true)

        // 词云渲染失败，使用柱状图作为降级方案
        chart.clear() // 清除原来的图表配置

        // 创建新的柱状图
        chart
          .interval()
          .data(processedData.slice(0, 15)) // 只显示前15个
          .encode('x', 'text')
          .encode('y', 'value')
          .encode('color', 'text')
          .axis('y', {
            title: '出现次数',
            grid: true
          })
          .axis('x', {
            title: '关键词',
            label: {
              style: {
                angle: 45,
                textAlign: 'start',
                textBaseline: 'middle'
              }
            }
          })
          .coordinate({ transform: [{ type: 'transpose' }] }) // 使用横向柱状图
          .animate('enter', {
            animation: 'fadeIn',
            duration: 800
          })

        chart.render()
      }

      // 监听容器大小变化，自动调整图表大小
      const observer = new ResizeObserver(() => {
        chart.forceFit()
      })
      observer.observe(containerRef.current)

      return () => {
        observer.disconnect()
        chart.destroy()
      }
    } catch (error) {
      console.error('渲染词云图出错:', error)
      setRenderError(true)
    }
  }, [processedData])

  // 按出现频率排序
  const sortedData =
    processedData.length > 0 ? [...processedData].sort((a, b) => b.value - a.value) : []

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-purple-500 rounded-full mr-2 sm:mr-3" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 line-clamp-2">{question}</h2>
      </div>

      <div className="bg-gray-700 rounded-lg p-3 mb-3 flex items-center justify-between">
        <span className="text-sm text-gray-300">回答总数</span>
        <span className="text-lg font-bold text-purple-400">{responseCount}人</span>
        {renderError && (
          <span className="text-xs text-yellow-400 ml-2">词云渲染失败，显示柱状图</span>
        )}
      </div>

      {processedData.length > 0 ? (
        <div
          ref={containerRef}
          className="h-80 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow"
        />
      ) : (
        <div className="h-80 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow flex items-center justify-center">
          <span className="text-gray-400">暂无足够数据生成词云</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        <h3 className="text-gray-300 text-sm font-medium">关键词排行</h3>
        {sortedData.length > 0 ? (
          sortedData.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-2 sm:p-3 flex justify-between items-center transform transition-all duration-200 hover:bg-gray-600"
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center mr-2 text-xs text-white">
                  {index + 1}
                </div>
                <span className="overflow-hidden whitespace-nowrap text-ellipsis text-gray-200 text-xs sm:text-sm">
                  {item.text}
                </span>
              </div>
              <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-purple-400 whitespace-nowrap">
                {`出现${item.value}次`}
              </span>
            </div>
          ))
        ) : (
          <div className="bg-gray-700 rounded-lg p-3 text-center text-gray-400">暂无关键词数据</div>
        )}
      </div>
    </div>
  )
}

export default WordCloudStat
