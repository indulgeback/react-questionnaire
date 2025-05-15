import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2'

interface DateRange {
  range: string
  count: number
  percentage: number
}

interface DateStatProps {
  question: string
  data: DateRange[]
  responseCount: number
  // 可能的附加信息
  earliestDate?: string
  latestDate?: string
  mostFrequentDate?: {
    date: string
    count: number
  }
}

/**
 * 日期统计组件
 * 适用于：日期题
 */
const DateStat: React.FC<DateStatProps> = ({
  question,
  data,
  responseCount,
  earliestDate,
  latestDate,
  mostFrequentDate
}) => {
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

    // 配置图表
    chart
      .area()
      .data(data)
      .encode('x', 'range')
      .encode('y', 'count')
      .style({
        fill: 'l(270) 0:#8b5cf6 1:#3b82f6',
        fillOpacity: 0.4,
        stroke: '#8b5cf6'
      })
      .axis('y', {
        title: '回答数',
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
            fill: '#9CA3AF',
            angle: 45
          }
        }
      })
      .animate('enter', {
        type: 'fadeIn',
        duration: 600
      })

    chart
      .point()
      .data(data)
      .encode('x', 'range')
      .encode('y', 'count')
      .encode('shape', 'circle')
      .style({
        fill: '#8b5cf6',
        r: 4
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

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-indigo-500 rounded-full mr-2 sm:mr-3" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 line-clamp-2">{question}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="bg-gray-700 rounded-lg p-3 text-center">
          <span className="text-sm text-gray-300">总回答数</span>
          <div className="text-2xl font-bold text-indigo-400 mt-1">{responseCount}人</div>
        </div>

        {mostFrequentDate && (
          <div className="bg-gray-700 rounded-lg p-3 text-center">
            <span className="text-sm text-gray-300">最常选日期</span>
            <div className="text-xl font-bold text-indigo-400 mt-1">{mostFrequentDate.date}</div>
            <div className="text-xs text-gray-400">{mostFrequentDate.count}人选择</div>
          </div>
        )}

        {earliestDate && latestDate && (
          <div className="bg-gray-700 rounded-lg p-3 text-center">
            <span className="text-sm text-gray-300">日期区间</span>
            <div className="text-sm font-bold text-indigo-400 mt-1">
              {earliestDate} ~ {latestDate}
            </div>
          </div>
        )}
      </div>

      <div
        ref={containerRef}
        className="h-72 sm:h-80 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow"
      />

      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        <h3 className="text-gray-300 text-sm font-medium">日期分布详情</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-2 transform transition-all duration-200 hover:bg-gray-600"
            >
              <div className="text-xs text-gray-300 mb-1">{item.range}</div>
              <div className="flex justify-between items-center">
                <span className="text-indigo-400 text-xs">{item.count}人</span>
                <span className="text-gray-400 text-xs">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DateStat
