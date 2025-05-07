import { useEffect, useRef } from 'react'

export interface ScrollOptions {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
}

/**
 * 通用的滚动到元素的自定义Hook
 * @param selectedId 当前选中的元素ID
 * @param options 滚动配置选项
 * @returns 用于获取元素引用的工具函数
 */
export default function useScrollToElement<T extends HTMLElement = HTMLDivElement>(
  selectedId: string | null | undefined,
  options: ScrollOptions = { behavior: 'smooth', block: 'center' }
) {
  const elementRefs = useRef<Record<string, T | null>>({})

  // 当选中的元素ID变化时，滚动到对应位置
  useEffect(() => {
    if (selectedId && elementRefs.current[selectedId]) {
      elementRefs.current[selectedId]?.scrollIntoView(options)
    }
  }, [selectedId, options])

  return {
    // 返回完整的refs对象，以便更灵活地使用
    elementRefs,

    // 提供方便的ref设置函数
    getRef: (id: string) => (el: T | null) => {
      elementRefs.current[id] = el
    },

    // 手动触发滚动到特定元素的方法
    scrollToElement: (id: string, scrollOptions?: ScrollOptions) => {
      if (elementRefs.current[id]) {
        elementRefs.current[id]?.scrollIntoView(scrollOptions || options)
      }
    }
  }
}
