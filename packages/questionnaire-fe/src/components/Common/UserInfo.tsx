import React from 'react'
import { LOGIN_PATH, REGISTER_PATH } from '@/router'
import { Button, Space } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const UserInfo: React.FC = () => {
  const nav = useNavigate()
  return (
    <Space>
      <Button onClick={() => nav(LOGIN_PATH)}>
        <RocketOutlined />
        sign in
      </Button>
      <Button type="link" onClick={() => nav(REGISTER_PATH)}>
        sign up
      </Button>
    </Space>
  )
}

export default UserInfo
