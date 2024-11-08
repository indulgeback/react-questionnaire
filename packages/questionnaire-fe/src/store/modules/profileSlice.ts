import { LOGIN_STATE } from '@/constant'
import { getLoginState, getTokenFormStorage, login, logout, setTokenStorage } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    token: getTokenFormStorage() || '',
    loginState: getLoginState()
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      setTokenStorage(action.payload)
    },
    setLoginState: (state, action) => {
      action.payload === LOGIN_STATE.LOGIN ? login() : logout()
      state.loginState = action.payload
    }
  }
})

// 为每个 case reducer 函数生成 Action creators
export const { setToken, setLoginState } = profileSlice.actions

export default profileSlice.reducer
