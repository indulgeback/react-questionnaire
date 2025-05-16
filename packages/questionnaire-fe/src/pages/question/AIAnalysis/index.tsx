import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Spin, Alert, Card, Button, Tag, List, Space } from 'antd'
import { ArrowLeftOutlined, FileWordOutlined } from '@ant-design/icons'
import apis from '@/apis'

const { Title, Paragraph, Text } = Typography

// 简化的AI分析结果类型定义
interface AIAnalysisResult {
  title: string
  overview: string
  key_insights: string[]
  question_analyses: Array<{
    id: string
    title: string
    analysis: string
  }>
  recommendations: string[]
}

/**
 * 问卷AI分析页面
 */
const AIAnalysis: React.FC = () => {
  const { id = '' } = useParams() // 从URL参数中获取问卷ID
  const navigate = useNavigate() // 用于页面导航
  const [error, setError] = useState<string | null>(null)
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [progressText, setProgressText] = useState('正在分析问卷数据...')
  const [downloading, setDownloading] = useState(false)

  // 返回统计页面
  const handleBack = () => {
    navigate(`/question/stat/${id}`)
  }

  // 下载Word报告
  const downloadWordReport = () => {
    if (!analysisResult) return

    setDownloading(true)

    // 创建一个HTML内容
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${analysisResult.title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1, h2 { color: #1e40af; }
          .section { margin: 20px 0; }
          .insight { margin: 10px 0; }
          .question { margin: 15px 0; padding-bottom: 15px; border-bottom: 1px solid #eee; }
          .question-title { font-weight: bold; }
          .recommendation { margin: 10px 0; }
        </style>
      </head>
      <body>
        <h1>${analysisResult.title}</h1>
        <div class="section">
          <p>${analysisResult.overview}</p>
        </div>
        
        <h2>关键发现</h2>
        <div class="section">
          ${analysisResult.key_insights
            .map((insight, index) => `<div class="insight">${index + 1}. ${insight}</div>`)
            .join('')}
        </div>
        
        <h2>问题分析</h2>
        <div class="section">
          ${analysisResult.question_analyses
            .map(
              q =>
                `<div class="question">
              <div class="question-title">${q.title} (ID: ${q.id})</div>
              <div>${q.analysis}</div>
            </div>`
            )
            .join('')}
        </div>
        
        <h2>改进建议</h2>
        <div class="section">
          ${analysisResult.recommendations
            .map((rec, index) => `<div class="recommendation">${index + 1}. ${rec}</div>`)
            .join('')}
        </div>
      </body>
      </html>
    `

    // 创建Blob对象
    const blob = new Blob([htmlContent], { type: 'application/msword' })
    const url = URL.createObjectURL(blob)

    // 创建下载链接
    const link = document.createElement('a')
    link.href = url
    link.download = `问卷分析报告_${id}.doc`
    document.body.appendChild(link)
    link.click()

    // 清理
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setDownloading(false)
  }

  // 生成AI分析报告
  const generateAnalysis = async () => {
    try {
      setAnalyzing(true)
      setProgressText('正在分析问卷数据...')
      setError(null)

      // 使用封装好的SSE请求
      const { onMessage, onError, close } = apis.aiApi.analyzeQuestionnaire(id)

      // 处理消息事件
      onMessage(data => {
        try {
          // 检查是否为完成标记
          if (data === '{[DONE]}') {
            close()
            setAnalyzing(false)
            return
          }

          // 更新进度文本
          if (data.length > 500) {
            setProgressText('AI正在完成分析...')
          }

          // 尝试解析JSON
          try {
            // 寻找有效的JSON字符串
            const jsonMatch = data.match(/\{[\s\S]*\}/)
            if (jsonMatch) {
              const jsonStr = jsonMatch[0]
              const result = JSON.parse(jsonStr)
              setAnalysisResult(result)
            }
          } catch (jsonError) {
            // JSON解析失败，可能是数据尚未完整
            console.log('等待完整数据...')
          }
        } catch (err) {
          console.error('处理响应错误:', err)
        }
      })

      // 处理错误
      onError(errorEvent => {
        console.error('分析错误:', errorEvent)
        setError('AI分析服务连接失败，请稍后重试')
        close()
        setAnalyzing(false)
      })
    } catch (error: any) {
      console.error('启动分析错误:', error)
      setError(`分析启动失败：${error?.message || '未知错误'}`)
      setAnalyzing(false)
    }
  }

  // 渲染分析结果 - 简化版
  const renderAnalysisResult = () => {
    if (!analysisResult) return null

    return (
      <div className="space-y-6 mt-4">
        {/* 概要部分 */}
        <Card className="bg-sky-50">
          <Title level={3}>{analysisResult.title}</Title>
          <Paragraph className="text-lg">{analysisResult.overview}</Paragraph>
        </Card>

        {/* 关键发现 */}
        <Card title="关键发现" className="bg-white">
          <List
            dataSource={analysisResult.key_insights}
            renderItem={(item, index) => (
              <List.Item>
                <Text strong>{index + 1}. </Text>
                {item}
              </List.Item>
            )}
          />
        </Card>

        {/* 问题分析 */}
        <Card title="问题分析" className="bg-white">
          <List
            dataSource={analysisResult.question_analyses}
            renderItem={item => (
              <List.Item>
                <div>
                  <Text strong>{item.title}</Text>
                  <Tag color="blue" className="ml-2">
                    ID: {item.id}
                  </Tag>
                  <Paragraph className="mt-2">{item.analysis}</Paragraph>
                </div>
              </List.Item>
            )}
          />
        </Card>

        {/* 建议 */}
        <Card title="改进建议" className="bg-orange-50">
          <List
            dataSource={analysisResult.recommendations}
            renderItem={(item, index) => (
              <List.Item>
                <Text strong>{index + 1}. </Text>
                {item}
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }

  // 渲染主页面
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4 py-4 relative">
        {/* 返回按钮 */}
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          style={{ position: 'absolute', left: '20px', top: '20px' }}
        >
          返回统计
        </Button>

        {/* 下载报告按钮 - 仅在有分析结果时显示 */}
        {analysisResult && (
          <Button
            type="primary"
            icon={<FileWordOutlined />}
            onClick={downloadWordReport}
            loading={downloading}
            style={{ position: 'absolute', right: '20px', top: '20px' }}
          >
            生成Word报告
          </Button>
        )}

        <div className="text-center mb-8 mt-10">
          <Title level={2} style={{ color: '#1e40af' }}>
            问卷AI分析
          </Title>
          <Paragraph className="text-gray-600">快速获取问卷数据洞察和建议</Paragraph>
        </div>

        {/* 错误提示 */}
        {error && (
          <Alert message="分析出错" description={error} type="error" showIcon className="mb-6" />
        )}

        {/* 开始分析按钮 */}
        {!analysisResult && !analyzing && (
          <div className="text-center py-8">
            <Button type="primary" size="large" onClick={generateAnalysis}>
              开始AI分析
            </Button>
            <Paragraph className="text-gray-500 mt-4">点击开始分析问卷数据 (需要10-15秒)</Paragraph>
          </div>
        )}

        {/* 分析进行中 */}
        {analyzing && (
          <div className="flex flex-col items-center justify-center py-8">
            <Spin size="large" />
            <Paragraph className="mt-4 text-blue-600">{progressText}</Paragraph>
          </div>
        )}

        {/* 分析结果 */}
        {analysisResult && renderAnalysisResult()}
      </div>
    </div>
  )
}

export default AIAnalysis
