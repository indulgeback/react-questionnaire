import React, { useState } from 'react'
import { Typography, Space, Button, Form, Input, App, Modal } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'
import { Rule } from 'antd/es/form'
import apis from '@/apis'
import { UserInfo } from '@/apis/modules/types/auth'
import { isRequestSuccess } from '@/utils'

const { Title } = Typography

const Register: React.FC = () => {
  const { message } = App.useApp()
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: '',
    password: '',
    nickname: '',
    email: ''
  })

  enum formItem {
    username = 'username',
    password = 'password',
    confirm = 'confirm',
    nickname = 'nickname'
  }

  const rules: Record<formItem, Rule[]> = {
    username: [
      { required: true, message: '请输入用户名!' },
      { type: 'string', min: 5, max: 20, message: '字符长度在 5-20 之间' },
      { pattern: /^\w+$/, message: '只能是数字字母下划线' }
    ],
    password: [{ required: true, message: '请输入密码!' }],
    confirm: [
      { required: true, message: '请输入确认密码!' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve()
          } else {
            return Promise.reject(new Error('两次密码不一致'))
          }
        }
      })
    ],
    nickname: [{ required: true, message: '请输入昵称!' }]
  }

  const sendEmailCode = async () => {
    const res = await apis.mailApi.sendEmailCode({ email })
    if (isRequestSuccess(res)) {
      message.success(res.msg)
    }
  }
  const verifyIdentity = async () => {
    const res = await apis.mailApi.verifyEmailCode({ email, code })
    if (isRequestSuccess(res)) {
      message.success(res.msg)
      setUserInfo({
        ...userInfo,
        email
      })
      message.info('验证成功，正在注册中，请稍后')
      registerUser()
    }
  }

  const registerUser = async () => {
    const res = await apis.authApi.register(userInfo)
    if (isRequestSuccess(res)) {
      message.success(res.msg)
      nav(LOGIN_PATH)
    }
  }

  const onFinish = async (values: UserInfo) => {
    setOpen(true)
    setUserInfo({
      ...userInfo,
      ...values
    })
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form name="register" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
          <Form.Item label="用户名" name={formItem.username} rules={rules.username}>
            <Input />
          </Form.Item>

          <Form.Item label="密码" name={formItem.password} rules={rules.password}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name={formItem.confirm}
            dependencies={['password']}
            rules={rules.confirm}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label="昵称" name={formItem.nickname} rules={rules.nickname}>
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Link to={LOGIN_PATH}>已有用户，登录</Link>
          </Form.Item>
        </Form>
      </div>
      <Modal title="邮箱验证" open={open} onOk={verifyIdentity}>
        <Form name="emailVerification" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="电子邮箱" name={'email'}>
            <Space.Compact style={{ width: '100%' }}>
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <Button type="primary" onClick={sendEmailCode}>
                发送验证码
              </Button>
            </Space.Compact>
          </Form.Item>
          <Form.Item label="验证码" name={'code'}>
            <Input value={code} onChange={e => setCode(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Register
