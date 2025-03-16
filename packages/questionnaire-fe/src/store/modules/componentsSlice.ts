import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/QuestionComponents'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

export type ComponentsStateType = {
  selectedId: string
  componentList: Array<ComponentInfoType>
}

const initialState: ComponentsStateType = {
  selectedId: '',
  componentList: []
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
      return action.payload
    },
    setSelectedId: (state: ComponentsStateType, action: PayloadAction<string>) => {
      state.selectedId = action.payload
    }
  }
})

export const { resetComponents, setSelectedId } = componentsSlice.actions

export default componentsSlice.reducer
