import React, { useLayoutEffect, useState } from 'react'
import { Space, Button, Form, Input, App, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'
import { Rule } from 'antd/es/form'
import shared from '@questionnaire/shared'
import apis from '@/apis'
import colorfulLogo from '@/assets/img/colorful-logo.png'
import { UserInfo } from '@/apis/modules/types/auth'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import { useRequest } from 'ahooks'
import AuthBg from '@/components/Common/AuthBg'
import gsap from 'gsap'

const Register: React.FC = () => {
  const { message } = App.useApp()
  const nav = useNavigate()
  const { isRequestSuccess } = useRequestSuccessChecker()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    password: ''
  })

  useLayoutEffect(() => {
    gsap.fromTo('#register-form', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 })
  }, [])

  enum formItem {
    password = 'password',
    confirm = 'confirm',
    nickname = 'nickname',
    email = 'email',
    code = 'code'
  }

  const rules: Record<formItem, Rule[]> = {
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
    nickname: [
      { required: true, message: '请输入昵称!' },
      { type: 'string', min: 2, max: 20, message: '昵称长度为2-20位' }
    ],
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

  const { run: sendCode, loading: sendLoading } = useRequest(sendEmailCode, {
    manual: true
  })

  const verifyIdentity = async () => {
    const res = await apis.mailApi.verifyEmailCode({ email, code })
    if (isRequestSuccess(res)) {
      message.info('验证成功，正在注册中，请稍后')
      registerUser({ ...userInfo, email })
    }
  }

  const registerUser = async (data: UserInfo) => {
    const res = await apis.authApi.register(data)
    if (isRequestSuccess(res)) {
      nav(LOGIN_PATH)
    }
  }

  const onFinish = async (values: typeof userInfo) => {
    setIsModalOpen(true)
    setUserInfo({
      ...values
    })
  }

  return (
    <div className="custom-main flex items-center">
      <AuthBg />
      <div className="w-1/2 flex justify-center">
        <div
          className="bg-white/50 backdrop-blur-sm p-10 rounded-md shadow-white shadow-2xl"
          id="register-form"
        >
          <img className="h-48" src={colorfulLogo} />
          <Form name="register" layout="vertical" onFinish={onFinish}>
            <Form.Item label="昵称" name={formItem.nickname} rules={rules.nickname}>
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
              <Button type="primary" loading={sendLoading} onClick={sendCode}>
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
