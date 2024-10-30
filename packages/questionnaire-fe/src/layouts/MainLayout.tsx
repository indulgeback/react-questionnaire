import React from 'react'
import { Link, Outlet } from 'react-router-dom'
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
    <div className="custom-app">
      <header className="custom-header">
        <div id="Logo">
          <Logo />
        </div>
        <div id="UserInfo">
          <UserInfo />
        </div>
      </header>
      <main className="custom-main">
        <Outlet />
      </main>
      <footer className="custom-footer">
        小木问卷 &copy;2024 - present. Created by{' '}
        <Link to="https://indulgeback.netlify.app/">IndulgeBack</Link>
      </footer>
    </div>
  )
}

export default MainLayout
