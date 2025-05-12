import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

/**
 * 用于解决React 18 StrictMode下的react-beautiful-dnd问题
 * 参考: https://github.com/atlassian/react-beautiful-dnd/issues/2399
 */
interface DragDropWrapperProps {
  children: React.ReactNode
  onDragEnd: (result: any) => void
  onDragStart?: (start: any) => void
}

const DragDropWrapper: React.FC<DragDropWrapperProps> = ({ children, ...props }) => {
  // 直接使用DragDropContext，不再使用延迟启用的逻辑
  // 这可能会在React严格模式下出现警告，但功能会正常工作
  return <DragDropContext {...props}>{children}</DragDropContext>
}

export default DragDropWrapper
