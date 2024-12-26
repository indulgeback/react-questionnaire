import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MANAGE_MARKET_PATH, MARKDOWN_VIEW_PATH } from '@/router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from 'antd'
import SvgIcon from '@/components/Common/SvgIcon'
import LottieAnimation from '@/components/Common/LottieAnimation'
import cat from '@/assets/lottie/cat.json'

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

      <div className="custom-intro-banner">
        <div className="custom-intro-card">
          <h2 className="text-2xl font-bold mb-4">小木问卷</h2>
          <p className="text-lg text-gray-700">
            小木问卷是一个功能强大的问卷生成系统，基于 NestJS 构建，支持多平台使用。前端采用 React18
            和 NextJS，提供流畅的用户体验。后端结合 NestJS、MySQL、MongoDB 和
            Redis，确保数据的高效处理和存储。 系统集成了 AI 模型 DeepSeek
            Chat，支持智能化问卷生成。动画效果由 GSAP 和 lottie web 提供，UI 设计使用 Ant Design 和
            TailwindCSS，确保现代化和美观的界面。 项目采用 Vite 和 SWC 进行前端构建，使用 pnpm
            作为包管理器，Lerna 进行版本管理，确保开发流程的高效和规范。代码质量由 ESLint 和
            Prettier 保证，Husky 和 Commitlint 确保提交规范。Jest 用于单元测试，确保代码的可靠性。
            支持容器化部署，方便在本地或云服务器上快速搭建。项目遵循 MIT 开源协议，欢迎在 gitee 提交
            issue 或 pr，积极参与贡献。
          </p>
        </div>
        <div className="custom-intro-lottie">
          <LottieAnimation animationData={cat} />
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
