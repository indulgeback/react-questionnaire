import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '@/layouts/components/Logo'
import UserMenu from '@/layouts/components/UserMenu'
import CustomSpin from '@/components/CustomSpin/CustomSpin'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const MainLayout: React.FC = () => {
  const screenSpinning = useSelector((state: RootState) => state.utils.screenSpinning)

  return (
    <div className="custom-app">
      <header className="custom-header">
        <Logo />
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="custom-footer">
        <div>
          小木问卷 &copy;2024 - present. Created by{' '}
          <Link to="https://indulgeback.netlify.app/">IndulgeBack</Link> Version: {__APP_VERSION__}
        </div>
        <div>晋ICP备2023025256号-2</div>
      </footer>
      <Spin indicator={<CustomSpin />} spinning={screenSpinning} fullscreen />
    </div>
  )
}

export default MainLayout
