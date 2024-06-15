import { useEffect, useRef } from 'react'

const useRollEyeBalls = () => {
  const leftEyeBallRef = useRef<HTMLDivElement>(null)
  const rightEyeBallRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const eyesBalls = [leftEyeBallRef.current, rightEyeBallRef.current]
    document.addEventListener('mousemove', e => ballRoll(e))

    const ballRoll = (e: MouseEvent): void => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      eyesBalls.forEach(eyeBall => {
        if (eyeBall) {
          const eyeBallRect = eyeBall.getBoundingClientRect()

          // 获取眼珠中心点坐标
          const eyeBallCenterX = eyeBallRect.left + eyeBallRect.width / 2
          const eyeBallCenterY = eyeBallRect.top + eyeBallRect.height / 2

          // 获取正弦值
          const tan = Math.atan2(mouseY - eyeBallCenterY, mouseX - eyeBallCenterX)

          // 计算偏移量
          const offsetX = Math.cos(tan) * (eyeBallRect.width / 2 - 10)
          const offsetY = Math.sin(tan) * (eyeBallRect.height / 2 - 10)
          eyeBall.style.transform = `translate(${offsetX}px, ${offsetY}px)`
        }
      })
    }

    return () => {
      document.removeEventListener('mousemove', e => ballRoll(e))
    }
  }, [])

  return { leftEyeBallRef, rightEyeBallRef }
}

export default useRollEyeBalls
