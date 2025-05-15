import React from 'react'
import StatDemo from './components/StatDemo'

/**
 * 问卷统计分析页面
 */
const QuestionAnalysis: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 sm:mb-4">
            校园暴力问卷调查分析
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">基于真实数据的深度分析报告</p>
        </div>

        {/* 使用新开发的统计组件 */}
        <StatDemo />
      </div>
    </div>
  )
}

export default QuestionAnalysis
