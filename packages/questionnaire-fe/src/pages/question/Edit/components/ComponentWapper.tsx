import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { setSelectedId } from '@/store/modules/componentsSlice'
import { MenuOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

type ComponentWapperProps = {
  children: React.ReactNode
  fe_id: string
  dragHandleProps?: any
  isDragging?: boolean
}

const ComponentWapper: React.FC<ComponentWapperProps> = ({
  children,
  fe_id,
  dragHandleProps,
  isDragging = false
}) => {
  const selectedId = useSelector((state: RootState) => state.components.selectedId)
  const dispatch = useDispatch()
  const dragHandleRef = useRef<HTMLDivElement>(null)

  // 点击组件时选中
  const handleClick = () => {
    if (selectedId === fe_id) {
      dispatch(setSelectedId(''))
    } else {
      dispatch(setSelectedId(fe_id))
    }
  }

  // 调试拖拽手柄属性
  useEffect(() => {
    if (dragHandleRef.current && dragHandleProps) {
      console.log(`拖拽手柄 (${fe_id}) 属性:`, dragHandleProps)
      // 确保dragHandleProps中的事件处理程序能够正确绑定
      if (dragHandleProps.onMouseDown) {
        console.log(`拖拽手柄 (${fe_id}) 已绑定 onMouseDown 事件`)
      } else {
        console.warn(`拖拽手柄 (${fe_id}) 缺少 onMouseDown 事件`)
      }
    }
  }, [dragHandleProps, fe_id])

  // 确保draggableProps正确应用到组件上
  return (
    <div
      className={clsx(
        'p-4 pt-12 bg-custom-bg-300 rounded-lg mb-2 border-2 border-transparent transition-all duration-200 hover:border-custom-primary-300 relative shadow-sm',
        selectedId === fe_id && '!border-custom-primary-300 shadow-md',
        isDragging && 'opacity-90 border-dashed border-custom-primary-200 shadow-lg rotate-1'
      )}
      onClick={handleClick}
    >
      {/* 拖拽手柄 - 使用自定义事件监听，确保拖拽可以触发 */}
      <div
        ref={dragHandleRef}
        {...dragHandleProps}
        onMouseDown={e => {
          console.log(`拖拽手柄 (${fe_id}) 鼠标按下事件触发`)
          if (dragHandleProps?.onMouseDown) {
            dragHandleProps.onMouseDown(e)
          }
        }}
        className={clsx(
          'absolute left-0 top-0 w-full h-10 px-3 flex items-center bg-gradient-to-r from-custom-primary-300 to-custom-bg-400 cursor-grab active:cursor-grabbing transition-all duration-200 rounded-t-md group',
          isDragging &&
            'cursor-grabbing bg-gradient-to-r from-custom-primary-300 to-custom-primary-200 shadow-inner'
        )}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <MenuOutlined
          className={clsx(
            'text-custom-primary-100 group-hover:text-custom-primary-200 transition-all',
            isDragging && 'text-custom-primary-300'
          )}
        />
        <span
          className={clsx(
            'text-xs ml-2 text-custom-primary-100 font-medium group-hover:text-custom-primary-100 flex items-center',
            isDragging && 'text-custom-primary-100'
          )}
        >
          <span className="transform transition-transform group-hover:translate-y-[-1px] group-hover:translate-x-[-1px] inline-block mr-1">
            ↕️
          </span>
          拖拽调整位置
        </span>

        {/* 右侧状态标签 */}
        <div
          className={clsx(
            'ml-auto text-xs px-2 py-1 rounded transition-all',
            isDragging
              ? 'bg-custom-primary-300 text-custom-primary-100'
              : selectedId === fe_id
              ? 'bg-custom-primary-300 text-custom-accent-200'
              : 'bg-custom-bg-200 text-custom-text-200 group-hover:bg-custom-bg-100'
          )}
        >
          {isDragging ? '拖拽中...' : selectedId === fe_id ? '编辑中' : '点击编辑'}
        </div>
      </div>

      {/* 组件内容 */}
      <div className={clsx('transition-all', isDragging && 'transform scale-[0.98] opacity-90')}>
        {children}
      </div>
    </div>
  )
}

export default ComponentWapper
