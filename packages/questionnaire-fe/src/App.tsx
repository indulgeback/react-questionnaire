import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'

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
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default MyApp
