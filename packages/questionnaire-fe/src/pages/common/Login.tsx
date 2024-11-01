import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { REGISTER_PATH } from '@/router'
import apis from '@/apis'
import { rememberUser, deleteUserFormStorage, getUserFormStorage } from '@/utils'
import colorfulLogo from '@/assets/img/colorful-logo.png'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import shared from '@questionnaire/shared'

const Login: React.FC = () => {
  const nav = useNavigate()
  const { isRequestSuccess } = useRequestSuccessChecker()

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
    isRequestSuccess(res) && remember ? rememberUser(email, password) : deleteUserFormStorage()
  }

  const [form] = Form.useForm()

  useEffect(() => {
    const { email, password } = getUserFormStorage()
    form.setFieldsValue({ email, password })
  }, [])
  return (
    <div className="custom-main flex justify-center items-center">
      <div className="bg-white/50 backdrop-blur-sm p-5 rounded-md shadow-white shadow-2xl">
        <img className="h-48" src={colorfulLogo} />
        <Form layout="vertical" initialValues={{ remember: true }} form={form} onFinish={onFinish}>
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
  )
}

export default Login
