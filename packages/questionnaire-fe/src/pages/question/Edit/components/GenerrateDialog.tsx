import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Modal } from 'antd'
import LottieAnimation from '@/components/Common/LottieAnimation'
import ai from '@/assets/lottie/ai.json'
import { Input, Button, Skeleton } from 'antd'
import apis from '@/apis'
import ReactMarkdown from 'react-markdown'
import { throttle } from '@/utils'
import regexp from '@/utils/regexp'

interface GenerateDialogProps {
  isOpen: boolean // 控制对话框显示/隐藏
  close: () => void // 关闭对话框的回调函数
}

let isFirstOpen = true

// 对话框标题组件 - 使用 memo 优化性能，避免不必要的重渲染
const GenerateDialogTitle = React.memo((props: { title: string }) => {
  const { title } = props
  return (
    <div className="inline-flex items-center gap-1 relative">
      {/* Lottie 动画容器 */}
      <span className="size-14 absolute top-[-16px] left-[-14px]">
        <LottieAnimation animationData={ai} />
      </span>
      <span className="text-custom-text-200 font-normal ml-10">{title}</span>
    </div>
  )
})

GenerateDialogTitle.displayName = 'GenerateDialogTitle'

const GenerateDialog = (props: GenerateDialogProps) => {
  const { isOpen, close } = props
  // 用于存储停止生成的回调函数
  const handleStopClickRef = useRef<() => void>(() => {
    return
  })

  // 状态管理
  const [theme, setTheme] = useState('') // 用户输入的主题
  const [isGenerating, setIsGenerating] = useState(false) // 是否正在生成问卷
  const [formattedContent, setFormattedContent] = useState('') // 格式化后的问卷内容

  const markdownRef = useRef<HTMLDivElement>(null) // Markdown 容器的引用

  // 将 AI 返回的内容解析为题目数组
  const parseQuestionsFromContent = (content: string) => {
    const matches = content.match(regexp.questionRegExp)
    if (!matches) return []
    return matches
      .map(questionObj => {
        try {
          return JSON.parse(questionObj)
        } catch (e) {
          return null
        }
      })
      .filter(Boolean) // 过滤掉解析失败的题目
  }

  // 将题目数组转换为 Markdown 格式
  const formatQuestionsToMarkdown = (questions: any[]) => {
    if (!questions.length) return ''

    return questions
      .map(
        (question, index) => `
### 题目 ${index + 1}
- 题型：${question.type}
- 题目：${question.question}
${
  question.options
    ? `- 选项：\n${question.options.map((opt: string) => `  - ${opt}`).join('\n')}`
    : ''
}
`
      )
      .join('\n')
  }

  // 使用节流优化更新频率，避免过于频繁的状态更新
  const printCurQuestionThrottled = useCallback(
    throttle((content: string) => {
      printCurQuestion(content)
    }, 1000),
    []
  )

  const printCurQuestion = (content: string) => {
    const questions = parseQuestionsFromContent(content)
    const formattedContent = formatQuestionsToMarkdown(questions)
    setFormattedContent(formattedContent)
  }

  // 处理生成按钮点击事件
  const handleButtonClick = () => {
    isFirstOpen = false
    setIsGenerating(true)
    const { eventSource, onMessage, onError, close } = apis.aiApi.generateQuestionnaire(theme)
    setTheme('')
    setFormattedContent('')

    // 存储停止生成的回调函数
    handleStopClickRef.current = () => {
      close()
      setIsGenerating(false)
      setFormattedContent('')
    }

    // 缓存当前生成的所有数据，如果输出完成则使用当前缓存的数据，以此保证生成的所有数据即使存在节流的情况下，也能保证数据完整性
    let cacheData = ''

    // 处理服务器返回的消息
    onMessage(data => {
      if (data === '{[DONE]}') {
        close()
        setTimeout(() => {
          printCurQuestion(cacheData)
        }, 1000)
        setIsGenerating(false)
        return
      } else {
        cacheData = data
        printCurQuestionThrottled(cacheData)
      }
    })

    // 处理错误情况
    onError(error => {
      console.log(error)
      setIsGenerating(false)
    })
  }

  const dialogTitle = isGenerating ? '生成中，要稍等一会哦～～' : '小木来帮你生成一个问卷吧'

  useEffect(() => {
    if (markdownRef.current) {
      markdownRef.current.scrollTop = markdownRef.current.scrollHeight
    }
  }, [formattedContent])

  const onClose = () => {
    close()
    setIsGenerating(false)
    setFormattedContent('')
    isFirstOpen = true
    setTheme('')
    handleStopClickRef.current()
  }

  const onCancel = () => {
    isFirstOpen = true
    handleStopClickRef.current()
  }

  return (
    <Modal
      className="top-16"
      title={<GenerateDialogTitle title={dialogTitle} />}
      width={1000}
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <div className="w-full h-[600px]">
        {/* 顶部操作区域 */}
        <div className="flex mb-4 items-center justify-end">
          <Input
            className="w-48"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            placeholder="输入主题"
          />
          <Button
            className="ml-4"
            type="primary"
            onClick={handleButtonClick}
            loading={isGenerating}
          >
            生成问卷
          </Button>
          <Button className="ml-4" type="default" onClick={onCancel}>
            取消生成
          </Button>
        </div>
        {/* Markdown 内容展示区域 */}
        {!isFirstOpen && (
          <div
            ref={markdownRef}
            className="bg-custom-bg-100 overflow-y-auto p-4 rounded-lg"
            style={{ height: 'calc(100% - 50px)', overflowY: 'auto' }}
          >
            {formattedContent ? (
              <ReactMarkdown
                className="
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-4
              [&_ul]:list-disc [&_ul]:pl-8 [&_ul]:my-2
              [&_li]:my-1
              prose prose-slate max-w-none
            "
              >
                {formattedContent}
              </ReactMarkdown>
            ) : (
              <div className="h-full flex flex-col justify-between items-center bg-custom-bg-300 p-4 rounded-lg">
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  )
}

export default GenerateDialog
