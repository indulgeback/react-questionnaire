import React, { useEffect } from 'react'
import { ConfigProvider, message } from 'antd'

const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // 将 message 导出为全局对象
    ;(window as any).message = message
  }, [])

  return <ConfigProvider>{children}</ConfigProvider>
}

export default MessageProvider
