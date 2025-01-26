import apis from '@/apis'
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_PATH } from '@/router'
import regexp from '@/utils/regexp'
import { throttle } from '@/utils'

const MarkdownView: React.FC = () => {
  const [questionJsonStr, setQuestionJsonStr] = useState('')
  const [theme, setTheme] = useState('')

  const handleStopClickRef = useRef<() => void>(() => {
    return
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const markdownRef = useRef<HTMLDivElement>(null)
  const nav = useNavigate()
  const handleButtonClick = () => {
    setIsGenerating(true)
    const { eventSource, onMessage, onError, close } = apis.aiApi.generateQuestionnaire(theme)
    setTheme('')

    handleStopClickRef.current = () => {
      // 取消生成
      close()
      setIsGenerating(false)
      setQuestionJsonStr('')
    }

    onMessage(data => {
      if (data === '{[DONE]}') {
        close()
        setIsGenerating(false)
        return
      } else {
        setQuestionJsonStr(data)
      }
    })

    onError(error => {
      console.log(error)
      setIsGenerating(false)
    })
  }

  const matches = questionJsonStr.match(regexp.questionRegExp)
  const printCurQuestionThrottled = useCallback(
    throttle(() => {
      // 输出结果
      if (matches) {
        matches.forEach((questionObj, index) => {
          console.log(`题目 ${index + 1}: ${questionObj}`)
        })
      } else {
        console.log('未匹配到题目对象')
      }
    }, 1000),
    [matches?.length]
  )

  useEffect(() => {
    if (markdownRef.current) {
      markdownRef.current.scrollTop = markdownRef.current.scrollHeight
    }
    printCurQuestionThrottled()
  }, [questionJsonStr, printCurQuestionThrottled])

  useEffect(() => {
    if (!isGenerating) {
      handleStopClickRef.current = () => {
        return
      }
    }
  }, [isGenerating])

  return (
    <div className="w-full h-screen p-4 bg-gray-100 ">
      <div className="mb-4">
        <Input
          className="w-48"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          placeholder="输入主题"
        />
        <Button className="ml-4" type="primary" onClick={handleButtonClick} loading={isGenerating}>
          生成问卷
        </Button>
        <Button className="ml-4" type="default" onClick={() => handleStopClickRef.current()}>
          取消生成
        </Button>
        <Button className="ml-4" type="primary" onClick={() => nav(HOME_PATH)}>
          Back To Home
        </Button>
      </div>

      <div ref={markdownRef} style={{ height: 'calc(100% - 100px)', overflowY: 'auto' }}>
        <ReactMarkdown>{questionJsonStr}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownView
