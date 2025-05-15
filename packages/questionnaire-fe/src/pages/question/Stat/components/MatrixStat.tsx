import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2'

interface MatrixStatItem {
  row: string
  column: string
  count: number
  percentage: number
}

interface MatrixStatProps {
  question: string
  data: MatrixStatItem[]
  rows: string[]
  columns: string[]
}

/**
 * 矩阵热力图统计组件
 * 适用于：矩阵单选题、矩阵多选题
 */
const MatrixStat: React.FC<MatrixStatProps> = ({ question, data, rows, columns }) => {
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

    // 配置热力图
    chart
      .cell()
      .data(data)
      .encode('x', 'column')
      .encode('y', 'row')
      .encode('color', 'percentage')
      .encode('size', 'percentage')
      .scale('y', {
        domain: rows
      })
      .scale('x', {
        domain: columns
      })
      .scale('color', {
        domain: [0, 100],
        range: ['#F8FAFC', '#3B82F6']
      })
      .axis('x', {
        title: false,
        label: {
          style: {
            fill: '#9CA3AF',
            fontSize: 12
          }
        }
      })
      .axis('y', {
        title: false,
        label: {
          style: {
            fill: '#9CA3AF',
            fontSize: 12
          }
        }
      })
      .style({
        radius: 4
      })
      .animate('enter', {
        type: 'fadeIn',
        duration: 800
      })
      .label({
        text: (d: MatrixStatItem) => `${d.percentage.toFixed(1)}%`,
        style: {
          fill: (d: MatrixStatItem) => (d.percentage > 50 ? '#FFFFFF' : '#1E3A8A'),
          fontSize: 12,
          textAlign: 'center'
        }
      })
      .tooltip({
        items: [
          { field: 'row', label: '行选项' },
          { field: 'column', label: '列选项' },
          { field: 'count', label: '人数' },
          { field: 'percentage', label: '占比', transform: (v: number) => `${v.toFixed(1)}%` }
        ]
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
  }, [data, rows, columns])

  // 按行分组显示数据
  const dataByRow = rows.map(row => {
    const rowData = data.filter(item => item.row === row)
    return {
      row,
      columns: rowData
    }
  })

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-blue-500 rounded-full mr-2 sm:mr-3" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 line-clamp-2">{question}</h2>
      </div>

      <div
        ref={containerRef}
        className="h-80 sm:h-96 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-2 sm:p-4 flex-grow"
      />

      <div className="grid grid-cols-1 gap-4">
        {dataByRow.map((rowGroup, rowIndex) => (
          <div key={rowIndex} className="bg-gray-700 rounded-lg p-3">
            <h3 className="text-gray-200 text-sm font-medium mb-2 pb-2 border-b border-gray-600">
              {rowGroup.row}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {rowGroup.columns.map((item, colIndex) => (
                <div
                  key={colIndex}
                  className="flex justify-between items-center py-1 transform transition-all duration-200 hover:bg-gray-600 hover:px-2 rounded"
                >
                  <span className="text-gray-300 text-xs sm:text-sm">{item.column}</span>
                  <div className="flex items-center">
                    <div
                      className="h-2 rounded bg-blue-500"
                      style={{ width: `${Math.max(item.percentage, 5)}px` }}
                    ></div>
                    <span className="ml-2 text-xs text-blue-400">
                      {`${item.count}人 (${item.percentage.toFixed(1)}%)`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatrixStat
