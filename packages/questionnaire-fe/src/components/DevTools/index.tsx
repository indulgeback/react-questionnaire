import React, { useEffect } from 'react'

/**
 * 开发调试工具组件
 * 用于在开发环境中提供调试功能
 */
const DevTools: React.FC = () => {
  useEffect(() => {
    // 为拖拽功能添加事件监听
    const handleMouseDown = (e: MouseEvent) => {
      console.log('Mouse down on:', e.target)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // 只在按下鼠标时记录移动
      if (e.buttons > 0) {
        console.log('Mouse move with buttons:', e.buttons, 'at', e.clientX, e.clientY)
      }
    }

    // 添加事件监听
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)

    // 在console中提供说明
    console.log('🔍 DevTools initialized. Drag debugging enabled.')
    console.log('👉 Try to drag components and check the console for events.')

    // 在组件卸载时移除事件监听
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // 这个组件不渲染任何内容
  return null
}

export default DevTools
