import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '@/router'
import whiteLogo from '@/assets/img/white-logo.png'
import SvgIcon from './SvgIcon'

const Logo: React.FC = () => {
  return (
    <div className="w-48 text-xs text-center">
      <Link to={HOME_PATH}>
        <img className="h-17" src={whiteLogo} />
      </Link>
    </div>
  )
}

export default Logo
