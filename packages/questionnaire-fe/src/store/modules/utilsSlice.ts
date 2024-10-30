import { createSlice } from '@reduxjs/toolkit'

export const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    enqueueSnackbar: null
  },
  reducers: {
    setEnqueueSnackbar: (state, action) => {
      state.enqueueSnackbar = action.payload
    }
  }
})

// 为每个 case reducer 函数生成 Action creators
export const { setEnqueueSnackbar } = utilsSlice.actions

export default utilsSlice.reducer
