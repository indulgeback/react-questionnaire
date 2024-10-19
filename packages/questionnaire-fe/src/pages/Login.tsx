import React, { useEffect } from 'react'
import styles from './Login.module.scss'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Space, Typography, App } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { REGISTER_PATH } from '@/router'
import apis from '@/apis'
import { rememberUser, deleteUserFormStorage, getUserFormStorage } from '@/utils'

const { Title } = Typography

const Login: React.FC = () => {
  const nav = useNavigate()
  const { message } = App.useApp()

  const onFinish = async (values: any) => {
    const { username, password, remember } = values || {}
    if (remember) {
      const res = await apis.login({ username, password })
      message.success(res.msg)
      rememberUser(username, password)
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
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          form={form}
          onFinish={onFinish}
        >
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
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATH}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
