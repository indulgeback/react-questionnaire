import { LeftOutlined } from '@ant-design/icons'
import { Avatar, FloatButton } from 'antd'
import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className="h-full bg-custom-bg-200 p-2">
      <div className="bg-custom-bg-300 h-full flex rounded-md p-20 relative">
        <FloatButton
          type="primary"
          className="absolute left-5 top-5"
          icon={<LeftOutlined />}
          tooltip={<div>返回上一级</div>}
          onClick={() => history.back()}
        />
        <div className="w-5/12">
          <div className="flex flex-col items-center w-24">
            <Avatar size="large" src={<img src="" alt="" />} />
            <span>UserNickname</span>
          </div>
          <div>
            个人简介： Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, temporibus
            eaque. Corrupti, nulla. Error, alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magnam, temporibus eaque. Corrupti, nulla. Error, alias.
          </div>
          <div>已绑定邮箱liuwenyu1937@outlook.com</div>
          <div>更换绑定</div>
          <div>修改密码</div>
          <div>使用小木问卷已经xxx天</div>
          <div>已创建问卷统计图</div>
          <div>账号注销</div>
        </div>
        <div className="flex-1 text-6xl">我的精选问卷</div>
      </div>
    </div>
  )
}

export default Profile
