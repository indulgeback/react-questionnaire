import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { App, ConfigProvider } from 'antd'
import store from '@/store'
import { Provider } from 'react-redux'
import { theme } from 'antd'

const themeConfig = {
  token: {
    colorPrimary: '#26A69A',
    colorText: '#263339',
    colorTextDisabled: '#728f9e'
  },
  algorithm: theme.defaultAlgorithm
}

const MyApp: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <App>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </App>
    </ConfigProvider>
  )
}

export default MyApp
