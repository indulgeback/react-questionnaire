import { useAvatar } from '@/hooks/useAvatar'
import { HOME_PATH } from '@/router'
import { LeftOutlined } from '@ant-design/icons'
import { Avatar, FloatButton, Progress, Button, Modal, Form, Input } from 'antd'
import { Rule } from 'antd/es/form'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const { avatar } = useAvatar()
  const nav = useNavigate()

  enum formItem {
    oldPassword = 'oldPassword',
    newPassword = 'newPassword',
    confirmPassword = 'confirmPassword'
  }

  const rules: Record<formItem, Rule[]> = {
    [formItem.oldPassword]: [
      { required: true, message: '请输入旧密码!' },
      {
        min: 8,
        max: 16,
        message: '密码长度不能小于8位,大于16位'
      }
    ],
    [formItem.newPassword]: [
      { required: true, message: '请输入新密码!' },
      {
        min: 8,
        max: 16,
        message: '密码长度不能小于8位,大于16位'
      }
    ],
    [formItem.confirmPassword]: [
      { required: true, message: '请输入确认新密码!' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue(formItem.newPassword) === value) {
            return Promise.resolve()
          } else {
            return Promise.reject(new Error('两次密码不一致'))
          }
        }
      })
    ]
  }

  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const changePassword = () => {
    resetForm()
    setIsModalOpen(true)
  }

  const handleOk = () => {
    form.submit()
  }

  const handleCancel = () => {
    resetForm()
    setIsModalOpen(false)
  }

  const resetForm = () => {
    form.resetFields()
  }

  const onFinish = (values: any) => {
    console.log(values)
    form.resetFields()
    setIsModalOpen(false)
  }

  const deleteAccount = () => {
    console.log('deleteAccount')
  }

  return (
    <div className="h-screen bg-custom-bg-200 p-4 pt-20 pb-16">
      <div className="bg-white h-full flex rounded-lg shadow-lg relative">
        <FloatButton
          type="primary"
          className="absolute left-5 top-5"
          icon={<LeftOutlined />}
          tooltip={<div>返回首页</div>}
          onClick={() => nav(HOME_PATH)}
        />

        {/* 左侧个人信息栏 */}
        <div className="w-1/3 p-8 border-r border-gray-200">
          <div className="flex flex-col items-center mb-8">
            <Avatar
              size={128}
              src={<img src={avatar} alt="avatar" className="rounded-full" />}
              className="ring-4 ring-gray-200 mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">UserNickname</h1>
            <span className="text-gray-600 text-sm">注册时间：2023年1月</span>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">个人简介</h2>
            <p className="text-gray-600 text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, temporibus eaque.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">联系信息</h2>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span className="mr-2">📧</span>
              <span>liuwenyu1937@outlook.com</span>
            </div>
            <div className="flex gap-4 text-sm">
              <Button variant="dashed" color="primary" size="small" onClick={changePassword}>
                修改密码
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">统计信息</h2>
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-600">使用天数</span>
              <span className="font-medium">127 天</span>
            </div>
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-600">创建问卷</span>
              <span className="font-medium">42 份</span>
            </div>
            <Progress percent={70} showInfo={false} className="mb-4" />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <Button variant="text" color="danger" onClick={deleteAccount}>
              账号注销
            </Button>
          </div>
        </div>

        <Modal title="修改密码" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form form={form} onFinish={onFinish} labelCol={{ span: 4 }}>
            <Form.Item required label="旧密码" name="oldPassword" rules={rules.oldPassword}>
              <Input.Password placeholder="请输入旧密码" />
            </Form.Item>
            <Form.Item required label="新密码" name="newPassword" rules={rules.newPassword}>
              <Input.Password placeholder="请输入新密码" />
            </Form.Item>
            <Form.Item
              required
              label="确认密码"
              name="confirmPassword"
              rules={rules.confirmPassword}
            >
              <Input.Password placeholder="请确认新密码" />
            </Form.Item>
          </Form>
        </Modal>

        {/* 右侧内容区域 */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">我的精选问卷</h2>

          {/* 问卷列表 */}
          <div className="grid gap-4">
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">用户满意度调查 #{item}</h3>
                    <p className="text-sm text-gray-600">创建于 2023年9月{item}日</p>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>📊 收集 1{item}2 份</span>
                    <span className="text-green-600">● 进行中</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
