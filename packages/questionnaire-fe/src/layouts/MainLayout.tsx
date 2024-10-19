import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Logo from '@/components/Common/Logo'
import UserInfo from '@/components/Common/UserInfo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const MainLayout: React.FC = () => {
  useGSAP(() => {
    gsap.from('#Logo', { duration: 1, x: 100, opacity: 0 })
    gsap.from('#UserInfo', { duration: 1, x: -100, opacity: 0 })
  })
  return (
    <div className={styles.app} style={{ overflow: 'hidden' }}>
      <header className={styles.header} style={{ zIndex: 999 }}>
        <div id="Logo" className={styles.left}>
          <Logo />
        </div>
        <div id="UserInfo" className={styles.right}>
          <UserInfo />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer} style={{ zIndex: 999 }}>
        小木问卷 &copy;2024 - present. Created by{' '}
        <Link to="https://indulgeback.netlify.app/">IndulgeBack</Link>
      </footer>
    </div>
  )
}

export default MainLayout
