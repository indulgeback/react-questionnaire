import React, { useState } from 'react'
import { Space, Button, Form, Input, App, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'
import { Rule } from 'antd/es/form'
import shared from '@questionnaire/shared'
import apis from '@/apis'
import colorfulLogo from '@/assets/img/colorful-logo.png'
import { UserInfo } from '@/apis/modules/types/auth'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'

const Register: React.FC = () => {
  const { message } = App.useApp()
  const nav = useNavigate()
  const { isRequestSuccess } = useRequestSuccessChecker()
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    nickname = 'nickname',
    email = 'email',
    code = 'code'
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
    nickname: [{ required: true, message: '请输入昵称!' }],
    email: [{ type: 'email', message: '请输入正确的邮箱地址' }],
    code: [{ len: 6, message: '验证码长度为6位' }]
  }

  const afterCloseModal = () => {
    setEmail('')
    setCode('')
  }

  const sendEmailCode = async () => {
    const isValidEmail = shared.RegExp.emailRegExp.test(email)
    if (!isValidEmail) return
    const res = await apis.mailApi.sendEmailCode({ email })
    isRequestSuccess(res)
  }
  const verifyIdentity = async () => {
    const res = await apis.mailApi.verifyEmailCode({ email, code })
    if (isRequestSuccess(res)) {
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
      nav(LOGIN_PATH)
    }
  }

  const onFinish = async (values: UserInfo) => {
    setIsModalOpen(true)
    setUserInfo({
      ...userInfo,
      ...values
    })
  }

  return (
    <div className="custom-main flex flex-col justify-center items-center">
      <div className="bg-white/50 backdrop-blur-sm p-10 rounded-md shadow-white shadow-2xl">
        <img className="h-48" src={colorfulLogo} />
        <Form name="register" layout="vertical" onFinish={onFinish}>
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

          <div className="flex gap-4 justify-center items-center">
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Button type="default" onClick={() => nav(LOGIN_PATH)}>
              已注册，去登录
            </Button>
          </div>
        </Form>
      </div>
      <Modal
        title="邮箱验证"
        open={isModalOpen}
        okText="发送"
        onOk={verifyIdentity}
        cancelText="取消"
        onCancel={() => setIsModalOpen(false)}
        afterClose={afterCloseModal}
      >
        <Form name="emailVerification" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="电子邮箱" name={formItem.email} rules={rules.email}>
            <Space.Compact className="w-full">
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <Button type="primary" onClick={sendEmailCode}>
                发送验证码
              </Button>
            </Space.Compact>
          </Form.Item>
          <Form.Item label="验证码" name={formItem.code} rules={rules.code}>
            <Input value={code} onChange={e => setCode(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Register
