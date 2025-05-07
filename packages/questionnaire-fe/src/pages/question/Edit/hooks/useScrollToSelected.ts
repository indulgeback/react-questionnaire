import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import useScrollToElement from '@/hooks/useScrollToElement'

/**
 * 用于问卷编辑器滚动到选中组件的Hook
 * @returns 组件引用映射对象和相关工具函数
 */
export default function useScrollToSelected() {
  const selectedId = useSelector((state: RootState) => state.components.selectedId)
  return useScrollToElement(selectedId, {
    behavior: 'smooth',
    block: 'center'
  })
}
