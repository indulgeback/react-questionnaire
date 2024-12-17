import React, { memo, useEffect } from 'react'
import { LOGIN_PATH, PROFILE_PATH, REGISTER_PATH } from '@/router'
import { Avatar, Button, Dropdown, MenuProps, Space, Tooltip } from 'antd'
import { DownOutlined, LogoutOutlined, RocketOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { LOGIN_STATE } from '@/constant'
import { setDefaultAvatar, setLoginState } from '@/store/modules/profileSlice'
import { defaultAvatarList } from '@/constant/defaultDataConstant'
import SvgIcon from '@/components/Common/SvgIcon'
import { App } from 'antd'

const UserMenu: React.FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector((state: RootState) => state.profile.loginState)
  const userInfo = useSelector((state: RootState) => state.profile.userInfo)
  const defaultAvatar = useSelector((state: RootState) => state.profile.defaultAvatar)
  const { message } = App.useApp()

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

  const iconItems = [
    {
      key: 'gitee',
      icon: <SvgIcon name="gitee" size="1.2em" />,
      url: 'https://gitee.com/IndulgeBack/react-questionnaire'
    },
    {
      key: 'github',
      icon: <SvgIcon name="github" size="1.2em" />,
      url: 'https://github.com/indulgeback/react-questionnaire'
    },
    {
      key: 'email',
      icon: <SvgIcon name="email" size="1.2em" />,
      url: 'https://xmquestionnaire@163.com'
    },
    {
      key: 'juejin',
      icon: <SvgIcon name="juejin" size="1.2em" />,
      url: 'https://juejin.cn/user/1410020421418286'
    }
  ]

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

  const clickIconItem = (item: { key: string; icon: React.ReactNode; url: string }) => {
    if (item.key === 'email') {
      // 复制邮箱
      navigator.clipboard.writeText(item.url)
      message.success('邮箱已复制到剪贴板')
      return
    }
    window.open(item.url, '_blank')
  }

  return (
    <div className="flex items-center gap-4">
      {iconItems.map(item => {
        return (
          <Tooltip title={item.key} key={item.key}>
            <div
              className="w-6 h-6 flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded-md"
              onClick={() => clickIconItem(item)}
            >
              {item.icon}
            </div>
          </Tooltip>
        )
      })}

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
    </div>
  )
}

export default UserMenu
