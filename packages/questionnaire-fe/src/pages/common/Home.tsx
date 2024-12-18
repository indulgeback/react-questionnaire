import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MANAGE_INDEX_PATH, MARKDOWN_VIEW_PATH } from '@/router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from 'antd'
import SvgIcon from '@/components/Common/SvgIcon'

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
            <Button type="dashed" onClick={() => nav(MANAGE_INDEX_PATH)}>
              START USE
            </Button>
            <Button type="dashed" onClick={() => nav(MARKDOWN_VIEW_PATH)}>
              TRY AI
            </Button>
          </div>
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
