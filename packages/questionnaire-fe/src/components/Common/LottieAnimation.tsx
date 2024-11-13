import React from 'react'
import Lottie, { LottieComponentProps } from 'lottie-react'

const LottieAnimation: React.FC<LottieComponentProps> = ({ animationData }) => {
  return <Lottie animationData={animationData} loop={true} autoplay={true} />
}

export default LottieAnimation
