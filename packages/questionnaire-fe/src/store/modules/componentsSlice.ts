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
  history: Array<{
    componentList: Array<ComponentInfoType>
    selectedId: string
  }>
  historyIndex: number
}

const initialState: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  version: 1,
  history: [],
  historyIndex: -1
}

// 生成唯一ID
const generateID = () => {
  return Math.floor(Math.random() * 1000000).toString()
}

// 保存历史记录
const saveHistory = (state: ComponentsStateType) => {
  // 如果当前不是最新状态，删除当前位置之后的历史记录
  if (state.historyIndex < state.history.length - 1) {
    state.history = state.history.slice(0, state.historyIndex + 1)
  }

  // 添加新的历史记录
  state.history.push({
    componentList: JSON.parse(JSON.stringify(state.componentList)),
    selectedId: state.selectedId
  })

  // 更新历史记录索引
  state.historyIndex = state.history.length - 1
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
      return {
        ...action.payload,
        history: [],
        historyIndex: -1
      }
    },
    setSelectedId: (state: ComponentsStateType, action: PayloadAction<string>) => {
      state.selectedId = action.payload
      saveHistory(state)
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
        fe_id: generateID(),
        type,
        title,
        props
      }

      state.componentList.push(newComponent)
      state.selectedId = newComponent.fe_id
      saveHistory(state)
    },
    deleteComponent: (state: ComponentsStateType, action: PayloadAction<string>) => {
      const deleteId = action.payload

      state.componentList = state.componentList.filter(comp => comp.fe_id !== deleteId)

      if (state.selectedId === deleteId) {
        state.selectedId = state.componentList.length > 0 ? state.componentList[0].fe_id : ''
      }
      saveHistory(state)
    },
    updateComponentProps: (
      state: ComponentsStateType,
      action: PayloadAction<{
        fe_id: string
        newProps: ComponentPropsType
      }>
    ) => {
      const { fe_id, newProps } = action.payload

      const targetComponent = state.componentList.find(c => c.fe_id === fe_id)
      if (targetComponent) {
        targetComponent.props = newProps
        saveHistory(state)
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

      const targetComponent = state.componentList.find(c => c.fe_id === fe_id)
      if (targetComponent) {
        targetComponent.title = title
        saveHistory(state)
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

      if (
        sourceIndex < 0 ||
        sourceIndex >= state.componentList.length ||
        destinationIndex < 0 ||
        destinationIndex >= state.componentList.length
      ) {
        return
      }

      const newComponentList = [...state.componentList]
      const [movedComponent] = newComponentList.splice(sourceIndex, 1)
      newComponentList.splice(destinationIndex, 0, movedComponent)

      state.componentList = newComponentList
      saveHistory(state)
    },
    setVersion: (state: ComponentsStateType, action: PayloadAction<number>) => {
      state.version = action.payload
    },
    undo: (state: ComponentsStateType) => {
      if (state.historyIndex > 0) {
        state.historyIndex--
        const previousState = state.history[state.historyIndex]
        state.componentList = JSON.parse(JSON.stringify(previousState.componentList))
        state.selectedId = previousState.selectedId
      }
    },
    redo: (state: ComponentsStateType) => {
      if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++
        const nextState = state.history[state.historyIndex]
        state.componentList = JSON.parse(JSON.stringify(nextState.componentList))
        state.selectedId = nextState.selectedId
      }
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
  setVersion,
  undo,
  redo
} = componentsSlice.actions

export default componentsSlice.reducer
