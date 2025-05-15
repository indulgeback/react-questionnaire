import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2'

interface KeywordItem {
  text: string
  value: number
  name?: string
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

  useEffect(() => {
    if (!containerRef.current) return

    // 清除之前的图表实例
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // 创建新图表
    const chart = new Chart({
      container: containerRef.current,
      autoFit: true,
      padding: 20,
      theme: 'dark'
    })
    chartRef.current = chart

    // 配置词云图
    chart
      .wordCloud()
      .data(data)
      .layout({
        spiral: 'rectangular',
        fontSize: [16, 48],
        padding: 2,
        rotation: [0, 0]
      })
      .encode('text', 'text')
      .encode('size', 'value')
      .encode('color', 'text')
      .scale('color', {
        range: ['#1890FF', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#13C2C2']
      })
      .style({
        fontFamily: 'Verdana',
        fontWeight: 'normal'
      })
      .animate('enter', {
        animation: 'fadeIn',
        duration: 800
      })

    chart.render()

    // 监听容器大小变化，自动调整图表大小
    const observer = new ResizeObserver(() => {
      chart.forceFit()
    })
    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      chart.destroy()
    }
  }, [data])

  // 按出现频率排序
  const sortedData = [...data].sort((a, b) => b.value - a.value)

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-purple-500 rounded-full mr-2 sm:mr-3" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 line-clamp-2">{question}</h2>
      </div>

      <div className="bg-gray-700 rounded-lg p-3 mb-3 flex items-center justify-between">
        <span className="text-sm text-gray-300">回答总数</span>
        <span className="text-lg font-bold text-purple-400">{responseCount}人</span>
      </div>

      <div
        ref={containerRef}
        className="h-80 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow"
      />

      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        <h3 className="text-gray-300 text-sm font-medium">关键词排行</h3>
        {sortedData.slice(0, 10).map((item, index) => (
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
        ))}
      </div>
    </div>
  )
}

export default WordCloudStat
