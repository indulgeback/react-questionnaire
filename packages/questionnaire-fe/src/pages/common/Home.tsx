import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MANAGE_MARKET_PATH, MARKDOWN_VIEW_PATH } from '@/router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from 'antd'
import SvgIcon from '@/components/Common/SvgIcon'
import LottieAnimation from '@/components/Common/LottieAnimation'
import aiTransform from '@/assets/lottie/aiTransform.json'
import report from '@/assets/lottie/report.json'
import stat from '@/assets/lottie/stat.json'

const Home: React.FC = () => {
  const nav = useNavigate()

  // 配置 GSAP 动画
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('#title', { x: -100, duration: 1.5, opacity: 0 })
    tl.from('#startBtn', { opacity: 0, y: 200, duration: 1, ease: 'bounce.out' }, '<')
    tl.from('#description', { y: 50, duration: 1.5, opacity: 0 })
  })

  const cardInfoList = [
    {
      title: 'AI生成问卷',
      icon: 'generate',
      rotate: 15
    },
    {
      title: '实时数据监控',
      icon: 'monitor',
      rotate: 5
    },
    {
      title: '可视化数据分析',
      icon: 'analysis',
      rotate: 25
    },
    {
      title: '导出结果报告',
      icon: 'report',
      rotate: -15
    }
  ]

  return (
    <>
      <div className="custom-hero-banner flex flex-col justify-center items-center">
        <div className="text-center mb-10">
          <div className="custom-main-title mb-5" id="title">
            问卷调查 | 在线投票
          </div>
          <div className="mb-5 text-lg" id="description">
            已累计创建问卷 100👧 份，发布问卷 87🧒 份，收到答卷 1800📃 份
          </div>
          <div id="startBtn" className="flex gap-4 justify-center">
            <Button type="dashed" onClick={() => nav(MANAGE_MARKET_PATH)}>
              START USE
            </Button>
            <Button type="dashed" onClick={() => nav(MARKDOWN_VIEW_PATH)}>
              TRY AI
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-fit">
        <div className="text-center w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">AI生成问卷</h2>
          <p className="text-lg text-gray-700">
            利用先进的 AI 技术，快速生成高质量的问卷，节省时间和精力。
          </p>
        </div>
        <div className="custom-intro-lottie">
          <LottieAnimation animationData={aiTransform} />
        </div>
      </div>

      <div className="flex justify-center items-center h-fit">
        <div className="custom-intro-lottie">
          <LottieAnimation animationData={stat} />
        </div>
        <div className="text-center w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">实时数据监控</h2>
          <p className="text-lg text-gray-700">
            实时监控问卷数据，及时了解问卷的反馈情况，做出快速反应。
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-fit">
        <div className="text-center w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">导出结果报告</h2>
          <p className="text-lg text-gray-700">轻松导出问卷结果报告，方便进行数据分析和分享。</p>
        </div>
        <div className="custom-intro-lottie">
          <LottieAnimation animationData={report} />
        </div>
      </div>

      <div className="custom-feature-banner">
        <div className="custom-feature-card-container">
          {cardInfoList.map(item => (
            <div
              className="custom-feature-card"
              style={{ '--r': item.rotate } as React.CSSProperties}
              data-text={item.title}
              key={item.title}
            >
              <SvgIcon name={item.icon} size="9rem" color="rgb(var(--bg-300))" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
