import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PageConfigType = {
  title: string
  description: string
  footerText: string
}

const initialState: PageConfigType = {
  title: '未命名问卷',
  description: '问卷描述信息',
  footerText: '感谢您的参与'
}

export const pageConfigSlice = createSlice({
  name: 'pageConfig',
  initialState,
  reducers: {
    resetPageConfig: (state: PageConfigType, action: PayloadAction<PageConfigType>) => {
      return action.payload
    },
    updatePageConfig: (state: PageConfigType, action: PayloadAction<Partial<PageConfigType>>) => {
      return { ...state, ...action.payload }
    },
    updatePageTitle: (state: PageConfigType, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    updatePageDescription: (state: PageConfigType, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    updateFooterText: (state: PageConfigType, action: PayloadAction<string>) => {
      state.footerText = action.payload
    }
  }
})

export const {
  resetPageConfig,
  updatePageConfig,
  updatePageTitle,
  updatePageDescription,
  updateFooterText
} = pageConfigSlice.actions

export default pageConfigSlice.reducer
