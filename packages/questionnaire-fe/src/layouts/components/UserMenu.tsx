import React, { memo, useEffect } from 'react'
import { LOGIN_PATH, PROFILE_PATH, REGISTER_PATH } from '@/router'
import { Avatar, Button, Dropdown, MenuProps, Space } from 'antd'
import { DownOutlined, LogoutOutlined, RocketOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { LOGIN_STATE } from '@/constant'
import { setDefaultAvatar, setLoginState } from '@/store/modules/profileSlice'
import { defaultAvatarList } from '@/constant/defaultDataConstant'

const UserMenu: React.FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector((state: RootState) => state.profile.loginState)
  const userInfo = useSelector((state: RootState) => state.profile.userInfo)
  const defaultAvatar = useSelector((state: RootState) => state.profile.defaultAvatar)

  useEffect(() => {
    if (!defaultAvatar && !userInfo.avatar) {
      const randomAvatar = defaultAvatarList[Math.floor(Math.random() * defaultAvatarList.length)]
      dispatch(setDefaultAvatar(randomAvatar))
    }
  }, [dispatch, defaultAvatar, userInfo.avatar])

  const handleLogout = () => {
    dispatch(setLoginState(LOGIN_STATE.LOGOUT))
    nav(LOGIN_PATH)
  }

  defaultAvatarList[Math.floor(Math.random() * defaultAvatarList.length)]

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
          <Dropdown menu={{ items }}>
            <Space className="cursor-pointer">
              <Avatar src={<img src={userInfo.avatar || defaultAvatar || ''} alt="avatar" />} />
              <span className="text-custom-text-100">{userInfo.nickname}</span>
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
