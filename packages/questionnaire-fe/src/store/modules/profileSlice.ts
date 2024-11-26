import { LOGIN_STATE } from '@/constant'
import {
  getLoginState,
  getTokenFromStorage,
  getUserInfoFromStorage,
  login,
  logout,
  setTokenStorage,
  setUserInfoStorage
} from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    token: getTokenFromStorage() || '',
    loginState: getLoginState(),
    userInfo: getUserInfoFromStorage()
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      setTokenStorage(action.payload)
    },
    setLoginState: (state, action) => {
      action.payload === LOGIN_STATE.LOGIN ? login() : logout()
      state.loginState = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
      setUserInfoStorage(action.payload)
    }
  }
})

// 为每个 case reducer 函数生成 Action creators
export const { setToken, setLoginState, setUserInfo } = profileSlice.actions

export default profileSlice.reducer
