import React, { useEffect } from 'react'
import { message } from 'antd'
import { MESSAGE_EVENT_NAME } from '@/utils/customMessage'

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading'
const Message: React.FC = () => {
  const [api, contextHolder] = message.useMessage()

  useEffect(() => {
    const bindEvent = (e: CustomEvent | any) => {
      const func: NoticeType = e.detail.type || 'info'
      const { content, duration, onClose } = e.detail.params
      api[func](content, duration, onClose)
    }

    window.addEventListener(MESSAGE_EVENT_NAME, bindEvent)

    return () => {
      window.removeEventListener(MESSAGE_EVENT_NAME, bindEvent)
    }
  }, [api])

  return <>{contextHolder}</>
}

export default Message
