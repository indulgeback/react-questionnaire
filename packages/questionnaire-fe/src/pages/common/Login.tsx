import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { REGISTER_PATH } from '@/router'
import apis from '@/apis'
import { rememberUser, deleteUserFormStorage, getUserFormStorage } from '@/utils'
import colorfulLogo from '@/assets/img/colorful-logo.png'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'

const Login: React.FC = () => {
  const nav = useNavigate()
  const { isRequestSuccess } = useRequestSuccessChecker()
  const onFinish = async (values: any) => {
    const { username, password, remember } = values || {}
    if (remember) {
      const res = await apis.authApi.login({ username, password })
      if (isRequestSuccess(res)) {
        rememberUser(username, password)
      }
    } else {
      deleteUserFormStorage()
    }
  }

  const [form] = Form.useForm()

  useEffect(() => {
    const { username, password } = getUserFormStorage()
    form.setFieldsValue({ username, password })
  }, [])
  return (
    <div className="custom-main flex justify-center items-center">
      <div className="bg-white/50 backdrop-blur-sm p-5 rounded-md shadow-white shadow-2xl">
        <img className="h-48" src={colorfulLogo} />
        <Form layout="vertical" initialValues={{ remember: true }} form={form} onFinish={onFinish}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名!' },
              { type: 'string', min: 5, max: 20, message: '字符长度在 5-20 之间' },
              { pattern: /^\w+$/, message: '只能是数字字母下划线' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
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
