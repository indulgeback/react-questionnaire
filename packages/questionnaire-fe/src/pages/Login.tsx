import React, { useEffect } from 'react'
import styles from './Login.module.scss'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Space, Typography } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { REGISTER_PATH } from '@/router'

const { Title } = Typography

const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'password'

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

function deleteUserFormStorage() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

function getUserFormStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}

const Login: React.FC = () => {
  const nav = useNavigate()

  const onFinish = (values: any) => {
    const { username, password, remember } = values || {}
    if (remember) {
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
