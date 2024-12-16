import apis from '@/apis'
import React, { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, Button } from 'antd'

const MarkdownView: React.FC = () => {
  const [questionJsonStr, setQuestionJsonStr] = useState('')
  const [theme, setTheme] = useState('')

  const markdownRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    const { eventSource, onMessage, onError, close } = apis.aiApi.generateQuestionnaire(theme)
    setTheme('')
    onMessage(data => {
      if (data === '{[DONE]}') {
        close()
        return
      } else {
        console.log(data)
        setQuestionJsonStr(data)
      }
    })

    onError(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    if (markdownRef.current) {
      markdownRef.current.scrollTop = markdownRef.current.scrollHeight
    }
  }, [questionJsonStr])

  return (
    <div className="w-full h-screen p-4 bg-gray-100 ">
      <div className="mb-4">
        <Input
          value={theme}
          onChange={e => setTheme(e.target.value)}
          placeholder="输入主题"
          style={{ width: '200px', marginRight: '8px' }}
        />
        <Button type="primary" onClick={handleButtonClick}>
          生成问卷
        </Button>
      </div>

      <div ref={markdownRef} style={{ height: 'calc(100% - 100px)', overflowY: 'auto' }}>
        <ReactMarkdown>{'```json\n' + questionJsonStr + '\n```'}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownView
