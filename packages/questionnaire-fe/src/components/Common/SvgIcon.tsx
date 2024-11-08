import React from 'react'

const SvgIcon: React.FC<{ name: string; prefix?: string; color?: string; size?: string }> = ({
  name,
  prefix = 'icon',
  color = '#333',
  size = '1em',
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} width={size} height={size} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
