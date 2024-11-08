import React from 'react'

const SvgIcon: React.FC<{ name: string; prefix?: string; color?: string }> = ({
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
