import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider, App } from 'antd'
import MessageProvider from '@/components/Common/MessageProvider'

const MyApp: React.FC = () => {
  return (
    // AntD 配置主题色
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#24bab0'
        }
      }}
    >
      <MessageProvider>
        <App>
          <RouterProvider router={router}></RouterProvider>
        </App>
      </MessageProvider>
    </ConfigProvider>
  )
}

export default MyApp
