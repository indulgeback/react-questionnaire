import { getTokenFormStorage, setTokenStorage } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    token: getTokenFormStorage() || ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      setTokenStorage(action.payload)
    }
  }
})

// 为每个 case reducer 函数生成 Action creators
export const { setToken } = profileSlice.actions

export default profileSlice.reducer
