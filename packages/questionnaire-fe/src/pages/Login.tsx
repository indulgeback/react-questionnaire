import React, { useEffect } from 'react'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Space, App } from 'antd'
import { REGISTER_PATH } from '@/router'
import apis from '@/apis'
import { rememberUser, deleteUserFormStorage, getUserFormStorage } from '@/utils'
import colorfulLogo from '@/assets/img/colorful-logo.png'
import SvgIcon from '@/components/Common/SvgIcon'
import { useSnackbar } from 'notistack'

const Login: React.FC = () => {
  const nav = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const onFinish = async (values: any) => {
    const { username, password, remember } = values || {}
    if (remember) {
      const res = await apis.authApi.login({ username, password })
      enqueueSnackbar(res.msg, { variant: 'success' })
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
    <div className={styles.wrapper}>
      <SvgIcon name="bg-auth" />
      <div className={styles.container}>
        <img className={styles.logo} src={colorfulLogo} />
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
          <Form.Item className={styles.btnContainer}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button type="default" onClick={() => nav(REGISTER_PATH)}>
                去注册
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
