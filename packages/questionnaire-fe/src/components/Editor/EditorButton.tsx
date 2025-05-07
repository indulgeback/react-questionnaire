import React, { useState } from 'react'
import clsx from 'clsx'
import SvgIcon from '@/components/Common/SvgIcon'
import { Tooltip } from 'antd'
interface EditorButtonProps {
  icon?: string
  activeIcon?: string
  addtionalStyles?: string
  isDisabled?: boolean
  title?: string
  activeColor?: string
  onClick?: () => void
}

// 默认样式
const defaultStyles =
  'size-10 rounded-full flex justify-center items-center hover:shadow-xl cursor-pointer transition-all duration-300'

const disabledStyles =
  'size-10 rounded-full flex justify-center items-center cursor-not-allowed opacity-50 '

const EditorButton = ({
  icon = 'github',
  activeIcon,
  addtionalStyles,
  isDisabled,
  title = '',
  activeColor = 'currentColor',
  onClick
}: EditorButtonProps) => {
  // 状态管理 hover 状态
  const [isHovered, setIsHovered] = useState(false)

  // 根据 hover 状态选择图标
  const currentIcon = isHovered && activeIcon ? activeIcon : icon

  // 禁用状态直接返回禁用样式按钮
  if (isDisabled) {
    return (
      <div className={clsx(disabledStyles, addtionalStyles)} onClick={onClick}>
        <Tooltip title={title}>
          <SvgIcon name={icon} size="1.5rem" />
        </Tooltip>
      </div>
    )
  }

  return (
    <div
      className={clsx(defaultStyles, addtionalStyles)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Tooltip title={title}>
        <SvgIcon
          name={currentIcon}
          size="1.5rem"
          color={isHovered ? activeColor : 'currentColor'}
        />
      </Tooltip>
    </div>
  )
}

export default EditorButton
