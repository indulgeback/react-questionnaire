import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType, ComponentType } from '@/components/QuestionComponents'

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

// 生成唯一ID
const generateID = () => {
  return Math.floor(Math.random() * 1000000).toString()
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
    },
    addComponent: (
      state: ComponentsStateType,
      action: PayloadAction<{
        type: string
        title: string
        props: ComponentPropsType
      }>
    ) => {
      const { type, title, props } = action.payload
      const newComponent: ComponentInfoType = {
        fe_id: generateID(), // 生成唯一ID
        type,
        title,
        props
      }

      // 添加到组件列表末尾
      state.componentList.push(newComponent)

      // 选中新添加的组件
      state.selectedId = newComponent.fe_id
    }
  }
})

export const { resetComponents, setSelectedId, addComponent } = componentsSlice.actions

export default componentsSlice.reducer
