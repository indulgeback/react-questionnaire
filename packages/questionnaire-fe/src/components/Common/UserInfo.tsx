import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'

const UserInfo: React.FC = () => {
  return (
    <div>
      <Link to={LOGIN_PATH}>登录</Link>
    </div>
  )
}

export default UserInfo
