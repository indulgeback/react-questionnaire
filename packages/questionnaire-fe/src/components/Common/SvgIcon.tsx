import React from 'react'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assets/svg', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>

const SvgIcon = (props: Props) => {
  return (
    <svg>
      <use xlinkHref={'#' + props.name} />
    </svg>
  )
}

export default SvgIcon
