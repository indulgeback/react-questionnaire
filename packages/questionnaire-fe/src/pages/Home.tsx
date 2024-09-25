import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATH } from '@/router'
import styles from './Home.module.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Face from '@/components/Face/Face'

const { Title, Paragraph } = Typography

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
    <div className={styles.container}>
      <Face />
      <div className={styles.info}>
        <Title id="title">问卷调查 | 在线投票</Title>
        <Paragraph id="description">
          <p style={{ fontSize: '1.2rem' }}>
            已累计创建问卷 100👧 份，发布问卷 87🧒 份，收到答卷 1800📃 份
          </p>
        </Paragraph>
        <div id="startBtn">
          <Button type="dashed" onClick={() => nav(MANAGE_INDEX_PATH)}>
            Start Use &rarr;
          </Button>
        </div>
        <Title id="subTitle" className={styles.subTitle} level={3}></Title>
      </div>
    </div>
  )
}

export default Home
