import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MANAGE_INDEX_PATH } from '@/router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from 'antd'
import lottieFile from '@/assets/lottie/lottieFile.json'
import LottieAnimation from '@/components/common/LottieAnimation'

const Home: React.FC = () => {
  const nav = useNavigate()

  // 配置 GSAP 动画
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('#title', { x: -100, duration: 1.5, opacity: 0 })
    tl.from('#startBtn', { opacity: 0, y: 200, duration: 1, ease: 'bounce.out' }, '<')
    tl.from('#description', { y: 50, duration: 1.5, opacity: 0 })
  })

  return (
    <div className="custom-main flex flex-col justify-center items-center">
      <div className="absolute top-8">
        <LottieAnimation animationData={lottieFile} />
      </div>
      <div className="text-center mb-10">
        <div className="custom-main-title mb-5" id="title">
          问卷调查 | 在线投票
        </div>
        <div className="mb-5 text-lg" id="description">
          已累计创建问卷 100👧 份，发布问卷 87🧒 份，收到答卷 1800📃 份
        </div>
        <div id="startBtn">
          <Button type="dashed" onClick={() => nav(MANAGE_INDEX_PATH)}>
            START USE
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
