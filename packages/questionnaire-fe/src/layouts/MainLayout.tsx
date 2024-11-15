import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '@/layouts/components/Logo'
import UserMenu from '@/layouts/components/UserMenu'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import CustomSpin from '@/components/customSpin/CustomSpin'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const MainLayout: React.FC = () => {
  useGSAP(() => {
    gsap.from('#Logo', { duration: 1, x: 100, opacity: 0 })
    gsap.from('#UserMenu', { duration: 1, x: -100, opacity: 0 })
  })

  const screenSpinning = useSelector((state: RootState) => state.utils.screenSpinning)

  return (
    <div className="custom-app">
      <header className="custom-header">
        <div id="Logo">
          <Logo />
        </div>
        <div id="UserMenu">
          <UserMenu />
        </div>
      </header>
      <main className="custom-main">
        <Outlet />
      </main>
      <footer className="custom-footer">
        小木问卷 &copy;2024 - present. Created by{' '}
        <Link to="https://indulgeback.netlify.app/">IndulgeBack</Link>
      </footer>
      <Spin indicator={<CustomSpin />} spinning={screenSpinning} fullscreen />
    </div>
  )
}

export default MainLayout
