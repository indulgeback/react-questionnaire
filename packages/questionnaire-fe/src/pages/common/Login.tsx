import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { App, Button, Checkbox, Form, Input } from 'antd'
import { REGISTER_PATH } from '@/router'
import apis from '@/apis'
import { rememberUser, deleteUserFromStorage, getUserFromStorage, login } from '@/utils'
import colorfulLogo from '@/assets/img/colorful-logo.png'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import shared from '@questionnaire/shared'
import { setLoginState, setToken, setUserInfo } from '@/store/modules/profileSlice'
import { useDispatch } from 'react-redux'
import AuthBg from '@/components/Common/AuthBg'
import gsap from 'gsap'
import { LOGIN_STATE } from '@/constant'

const Login: React.FC = () => {
  const nav = useNavigate()
  const { isRequestSuccess } = useRequestSuccessChecker()
  const dispatch = useDispatch()
  const { message } = App.useApp()
  const [searchParams] = useSearchParams()

  useLayoutEffect(() => {
    gsap.fromTo('#login-form', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 })
  }, [])

  const rules = {
    email: [
      { required: true, message: '请输入邮箱' },
      { pattern: shared.RegExp.emailRegExp, message: '邮箱格式错误' }
    ],
    password: [{ required: true, message: '请输入密码' }]
  }

  const onFinish = async (values: any) => {
    const { email, password, remember } = values || {}
    const res = await apis.authApi.login({ email, password })
    if (isRequestSuccess(res)) {
      remember ? rememberUser(email, password) : deleteUserFromStorage()
      dispatch(setToken(res.data?.token))
      dispatch(setUserInfo(res.data?.userInfo))
      dispatch(setLoginState(LOGIN_STATE.LOGIN))
      nav(searchParams.get('redirect') || '/')
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
          className="bg-white/50  backdrop-blur-sm p-5 rounded-md shadow-white shadow-2xl"
          id="login-form"
        >
          <img className="h-48" src={colorfulLogo} />
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
