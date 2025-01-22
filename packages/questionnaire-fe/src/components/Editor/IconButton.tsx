import React, { useState } from 'react'
import clsx from 'clsx'
import SvgIcon from '@/components/Common/SvgIcon'

interface EditorButtonProps {
  icon?: string
  activeIcon?: string
  addtionalStyles?: string
  isDisabled?: boolean
}

// 默认样式
const defaultStyles =
  'size-10 rounded-full flex justify-center items-center hover:bg-white hover:shadow-md active:shadow-inner cursor-pointer'

const disabledStyles =
  'size-10 rounded-full flex justify-center items-center cursor-not-allowed opacity-50 '

const EditorButton = ({
  icon = 'github',
  activeIcon,
  addtionalStyles,
  isDisabled
}: EditorButtonProps) => {
  // 状态管理 hover 状态
  const [isHovered, setIsHovered] = useState(false)

  // 根据 hover 状态选择图标
  const currentIcon = isHovered && activeIcon ? activeIcon : icon

  // 禁用状态直接返回禁用样式按钮
  if (isDisabled) {
    return (
      <div className={clsx(disabledStyles, addtionalStyles)}>
        <SvgIcon name={icon} size="1.5rem" />
      </div>
    )
  }

  return (
    <div
      className={clsx(defaultStyles, addtionalStyles)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SvgIcon name={currentIcon} size="1.5rem" />
    </div>
  )
}

export default EditorButton
