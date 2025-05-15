import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2'

interface StatItem {
  score: number
  count: number
  percentage: number
}

interface RatingStatProps {
  question: string
  data: StatItem[]
  maxScore?: number
}

/**
 * 评分统计组件
 * 适用于：评分题、NPS题、滑块题
 */
const RatingStat: React.FC<RatingStatProps> = ({ question, data, maxScore = 5 }) => {
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
      padding: 40,
      theme: 'dark'
    })
    chartRef.current = chart

    // 计算平均分
    const totalCount = data.reduce((sum, item) => sum + item.count, 0)
    const totalScore = data.reduce((sum, item) => sum + item.score * item.count, 0)
    const averageScore = totalCount > 0 ? totalScore / totalCount : 0

    // 配置图表
    chart
      .interval()
      .data(data)
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
        range: ['#13C2C2', '#2FC25B', '#FACC14', '#F04864']
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
  }, [data, maxScore])

  // 计算平均分
  const totalCount = data.reduce((sum, item) => sum + item.count, 0)
  const totalScore = data.reduce((sum, item) => sum + item.score * item.count, 0)
  const averageScore = totalCount > 0 ? totalScore / totalCount : 0

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-yellow-500 rounded-full mr-2 sm:mr-3" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 line-clamp-2">{question}</h2>
      </div>

      <div className="bg-gray-700 rounded-lg p-3 mb-3 text-center">
        <span className="text-sm text-gray-300">平均分</span>
        <div className="text-3xl font-bold text-yellow-400 mt-1">{averageScore.toFixed(1)}</div>
        <div className="flex justify-center mt-2">
          {Array.from({ length: maxScore }).map((_, i) => (
            <span
              key={i}
              className={`text-lg mx-0.5 ${
                i < Math.round(averageScore) ? 'text-yellow-400' : 'text-gray-500'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="h-60 sm:h-72 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow"
      />

      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-2 sm:p-3 flex justify-between items-center transform transition-all duration-200 hover:bg-gray-600"
          >
            <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-gray-200 text-xs sm:text-sm">
              {item.score} 分
            </span>
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-yellow-400 whitespace-nowrap">
              {`${item.count}人 (${item.percentage?.toFixed(1)}%)`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RatingStat
