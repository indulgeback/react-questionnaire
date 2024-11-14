import React from 'react'
import { LOGIN_PATH, PROFILE_PATH, REGISTER_PATH } from '@/router'
import { Button, Dropdown, MenuProps, Space } from 'antd'
import { DownOutlined, LogoutOutlined, RocketOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { LOGIN_STATE } from '@/constant'
import { setLoginState } from '@/store/modules/profileSlice'

const UserMenu: React.FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector((state: RootState) => state.profile.loginState)

  const handleLogout = () => {
    dispatch(setLoginState(LOGIN_STATE.LOGOUT))
    nav(LOGIN_PATH)
  }

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: (
        <span onClick={() => nav(PROFILE_PATH)}>
          <UserOutlined /> 个人信息
        </span>
      )
    },
    {
      key: 'logout',
      danger: true,
      label: (
        <span onClick={handleLogout}>
          <LogoutOutlined /> 退出登录
        </span>
      )
    }
  ]

  return (
    <>
      {loginState === LOGIN_STATE.LOGIN ? (
        <Space>
          <img />
          <Dropdown menu={{ items }}>
            <Space className="cursor-pointer">
              Hover me
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      ) : (
        <Space>
          <Button onClick={() => nav(LOGIN_PATH)}>
            <RocketOutlined />
            sign in
          </Button>
          <Button type="link" onClick={() => nav(REGISTER_PATH)}>
            sign up
          </Button>
        </Space>
      )}
    </>
  )
}

export default UserMenu
