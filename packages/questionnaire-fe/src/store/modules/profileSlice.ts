import { LOGIN_STATE } from '@/constant'
import { UserInfo } from '@/utils'
import {
  getLoginState,
  getTokenFromStorage,
  getUserInfoFromStorage,
  login,
  logout,
  setTokenStorage,
  setUserInfoStorage
} from '@/utils'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    token: getTokenFromStorage() || '',
    loginState: getLoginState(),
    userInfo: getUserInfoFromStorage(),
    defaultAvatar: ''
  },
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      setTokenStorage(action.payload)
    },
    setLoginState: (state, action: PayloadAction<LOGIN_STATE>) => {
      action.payload === LOGIN_STATE.LOGIN ? login() : logout()
      state.loginState = action.payload
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload
      setUserInfoStorage(action.payload)
    },
    setDefaultAvatar: (state, action: PayloadAction<string>) => {
      state.defaultAvatar = action.payload
    }
  }
})

// 为每个 case reducer 函数生成 Action creators
export const { setToken, setLoginState, setUserInfo, setDefaultAvatar } = profileSlice.actions

export default profileSlice.reducer
