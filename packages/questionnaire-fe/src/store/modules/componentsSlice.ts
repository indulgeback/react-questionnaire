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
  version: number
}

const initialState: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  version: 1
}

// 生成唯一ID
const generateID = () => {
  return Math.floor(Math.random() * 1000000).toString()
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    resetComponents: (
      state: ComponentsStateType,
      action: PayloadAction<{
        selectedId: string
        componentList: Array<ComponentInfoType>
        version: number
      }>
    ) => {
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
    },
    deleteComponent: (state: ComponentsStateType, action: PayloadAction<string>) => {
      const deleteId = action.payload

      // 删除指定 id 的组件
      state.componentList = state.componentList.filter(comp => comp.fe_id !== deleteId)

      // 如果删除的是当前选中的组件，则取消选中状态
      if (state.selectedId === deleteId) {
        state.selectedId = state.componentList.length > 0 ? state.componentList[0].fe_id : ''
      }
    },
    updateComponentProps: (
      state: ComponentsStateType,
      action: PayloadAction<{
        fe_id: string
        newProps: ComponentPropsType
      }>
    ) => {
      const { fe_id, newProps } = action.payload

      // 查找要更新的组件
      const targetComponent = state.componentList.find(c => c.fe_id === fe_id)
      if (targetComponent) {
        // 直接替换组件属性
        targetComponent.props = newProps
      }
    },
    changeComponentTitle: (
      state: ComponentsStateType,
      action: PayloadAction<{
        fe_id: string
        title: string
      }>
    ) => {
      const { fe_id, title } = action.payload

      // 查找要更新的组件
      const targetComponent = state.componentList.find(c => c.fe_id === fe_id)
      if (targetComponent) {
        // 更新组件标题
        targetComponent.title = title
      }
    },
    reorderComponents: (
      state: ComponentsStateType,
      action: PayloadAction<{
        sourceIndex: number
        destinationIndex: number
      }>
    ) => {
      const { sourceIndex, destinationIndex } = action.payload

      // 确保索引有效
      if (
        sourceIndex < 0 ||
        sourceIndex >= state.componentList.length ||
        destinationIndex < 0 ||
        destinationIndex >= state.componentList.length
      ) {
        return
      }

      // 创建新数组以重新排序组件
      const newComponentList = [...state.componentList]
      const [movedComponent] = newComponentList.splice(sourceIndex, 1)
      newComponentList.splice(destinationIndex, 0, movedComponent)

      // 更新组件列表
      state.componentList = newComponentList
    },
    setVersion: (state: ComponentsStateType, action: PayloadAction<number>) => {
      state.version = action.payload
    }
  }
})

export const {
  resetComponents,
  setSelectedId,
  addComponent,
  deleteComponent,
  updateComponentProps,
  changeComponentTitle,
  reorderComponents,
  setVersion
} = componentsSlice.actions

export default componentsSlice.reducer
