import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { App } from 'antd'
import { createTheme, ThemeProvider } from '@mui/material'
import { SnackbarProvider, useSnackbar } from 'notistack'
import store from '@/store'
import { Provider, useDispatch } from 'react-redux'
import { setEnqueueSnackbar } from '@/store/modules/utilsSlice'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#009E8E'
    },
    secondary: {
      main: '#63d6a5'
    }
  }
})

const MyApp: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <App>
          <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
          </Provider>
        </App>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default MyApp
