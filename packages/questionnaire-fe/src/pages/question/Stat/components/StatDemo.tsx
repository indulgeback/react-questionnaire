import React from 'react'
import { PieChartStat, BarChartStat, RatingStat, MatrixStat, WordCloudStat, DateStat } from '.'

import {
  mockPieChartData,
  mockBarChartData,
  mockRatingData,
  mockMatrixData,
  mockWordCloudData,
  mockDateData
} from './mockData'

/**
 * 统计组件展示页
 * 展示所有统计图表组件的样例
 */
const StatDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">问卷统计组件展示</h1>
          <p className="text-gray-300">各种问题类型的统计图表展示</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 单选题统计 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">单选题统计（饼图）</h2>
            <PieChartStat question={mockPieChartData.question} data={mockPieChartData.data} />
          </div>

          {/* 多选题统计 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">多选题统计（柱状图）</h2>
            <BarChartStat question={mockBarChartData.question} data={mockBarChartData.data} />
          </div>

          {/* 评分题统计 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">评分题统计</h2>
            <RatingStat
              question={mockRatingData.question}
              data={mockRatingData.data}
              maxScore={mockRatingData.maxScore}
            />
          </div>

          {/* 矩阵题统计 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">矩阵题统计</h2>
            <MatrixStat
              question={mockMatrixData.question}
              data={mockMatrixData.data}
              rows={mockMatrixData.rows}
              columns={mockMatrixData.columns}
            />
          </div>

          {/* 文本题统计 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">文本题统计（词云）</h2>
            <WordCloudStat
              question={mockWordCloudData.question}
              data={mockWordCloudData.data}
              responseCount={mockWordCloudData.responseCount}
            />
          </div>

          {/* 日期题统计 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">日期题统计</h2>
            <DateStat
              question={mockDateData.question}
              data={mockDateData.data}
              responseCount={mockDateData.responseCount}
              earliestDate={mockDateData.earliestDate}
              latestDate={mockDateData.latestDate}
              mostFrequentDate={mockDateData.mostFrequentDate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatDemo
