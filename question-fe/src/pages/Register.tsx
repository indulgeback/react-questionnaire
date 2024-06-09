import React from 'react';
import { Typography, Space, Button, Form, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../router';

const { Title } = Typography;

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.dir(values);
  };

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
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirm"
            rules={[{ required: true, message: '请输入确认密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: '请输入昵称!' }]}
          >
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
    </div>
  );
};

export default Register;
