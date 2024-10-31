import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { App, ConfigProvider } from 'antd'
import store from '@/store'
import { Provider } from 'react-redux'

const theme = {
  token: {
    colorPrimary: '#009E8E',
    colorText: '#081E40',
    colorTextDisabled: '#A9A9A9'
  }
}

const MyApp: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <App>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </App>
    </ConfigProvider>
  )
}

export default MyApp
