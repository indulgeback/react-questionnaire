import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    screenSpinning: false
  },
  reducers: {
    setScreenSpinning: (state, action: PayloadAction<boolean>) => {
      state.screenSpinning = action.payload
    }
  }
})

// 为每个 case reducer 函数生成 Action creators
export const { setScreenSpinning } = utilsSlice.actions

export default utilsSlice.reducer
