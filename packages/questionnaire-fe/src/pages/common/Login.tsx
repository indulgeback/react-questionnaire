import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { App, Button, Checkbox, Form, FormRule, Input } from 'antd'
import { REGISTER_PATH } from '@/router'
import apis from '@/apis'
import { rememberUser, deleteUserFromStorage, getUserFromStorage, login } from '@/utils'
import colorfulLogo from '@/assets/img/colorful-logo.webp'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import regexp from '@/utils/regexp'
import { setLoginState, setToken, setUserInfo } from '@/store/modules/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import AuthBg from '@/components/Common/AuthBg'
import gsap from 'gsap'
import { LOGIN_STATE } from '@/constant'
import { RootState } from '@/store'
import SvgIcon from '@/components/Common/SvgIcon'

const Login: React.FC = () => {
  const nav = useNavigate()
  const { isRequestSuccess, successMessage } = useRequestSuccessChecker()
  const userInfo = useSelector((state: RootState) => state.profile.userInfo)
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const { message, notification } = App.useApp()

  useLayoutEffect(() => {
    gsap.fromTo('#login-form', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 })
  }, [])

  const rules: Record<string, FormRule[]> = {
    email: [
      { required: true, message: '请输入邮箱' },
      { pattern: regexp.emailRegExp, message: '邮箱格式错误' }
    ],
    password: [
      { required: true, message: '请输入密码' },
      {
        min: 8,
        max: 16,
        message: '密码长度不能小于8位,大于16位'
      }
    ]
  }

  const getNowTime = () => {
    const now = new Date().getHours()
    return now < 12 ? '上午' : now < 18 ? '下午' : '晚上'
  }

  const openNotification = () => {
    notification.open({
      message: '亲爱的' + userInfo.nickname,
      description: getNowTime() + '好！' + '欢迎回来',
      duration: 3,
      showProgress: true,
      icon: <SvgIcon name="hi" />
    })
  }

  const onFinish = async (values: any) => {
    const { email, password, remember } = values || {}
    const res = await apis.authApi.login({ email, password })
    if (isRequestSuccess(res)) {
      successMessage(res.msg)
      remember ? rememberUser(email, password) : deleteUserFromStorage()
      dispatch(setToken(res.data?.token))
      dispatch(setUserInfo(res.data?.userInfo))
      dispatch(setLoginState(LOGIN_STATE.LOGIN))
      nav(searchParams.get('redirect') || '/')
      openNotification()
    }
  }

  const [form] = Form.useForm()

  const checkAuth = () => {
    if (!searchParams.get('redirect')) return
    dispatch(setLoginState(LOGIN_STATE.LOGOUT))
    message.warning('登录凭证已过期，请重新登录')
  }

  useEffect(() => {
    checkAuth()
    const { email, password } = getUserFromStorage()
    form.setFieldsValue({ email, password })
  }, [])
  return (
    <div className="custom-main flex items-center">
      <AuthBg />
      <div className="w-1/2 flex justify-center">
        <div
          className="bg-white/80  backdrop-blur-sm p-5 rounded-md shadow-white shadow-2xl"
          id="login-form"
        >
          <img className="h-48" src={colorfulLogo} alt="logo" />
          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            form={form}
            onFinish={onFinish}
          >
            <Form.Item label="邮箱" name="email" rules={rules.email}>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={rules.password}>
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <div className="flex justify-center items-center gap-4">
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button type="default" onClick={() => nav(REGISTER_PATH)}>
                去注册
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
