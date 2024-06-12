import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const { Header, Content, Footer } = Layout

const MainLayout: React.FC = () => {
  useGSAP(() => {
    gsap.from('#Logo', { duration: 1, x: 100, opacity: 0 })
    gsap.from('#UserInfo', { duration: 1, x: -100, opacity: 0 })
  })
  return (
    <Layout style={{ overflow: 'hidden' }}>
      <Header className={styles.header} style={{ zIndex: 999 }}>
        <div id="Logo" className={styles.left}>
          <Logo />
        </div>
        <div id="UserInfo" className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer} style={{ zIndex: 999 }}>
        小木问卷 &copy;2024 - present. Created by{' '}
        <Link to="https://indulgeback.netlify.app/">IndulgeBack</Link>
      </Footer>
    </Layout>
  )
}

export default MainLayout
