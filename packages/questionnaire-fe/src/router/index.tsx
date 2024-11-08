import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// 主体页面layout
import MainLayout from '@/layouts/MainLayout'
// 管理页面layout
import ManageLayout from '@/layouts/ManageLayout'
// 问卷页面layout
import QuestionLayout from '@/layouts/QuestionLayout'
// 主页
import Home from '@/pages/common/Home'
// 登陆
import Login from '@/pages/common/Login'
// 注册
import Register from '@/pages/common/Register'
// 个人信息
import Profile from '@/components/Common/Profile'
// 404
import NotFound from '@/pages/common/NotFound'
// 问卷列表
import List from '@/pages/manage/List'
// 回收站
import Trash from '@/pages/manage/Trash'
// 星标问卷
import Star from '@/pages/manage/Star'
// 问卷编辑
import Edit from '@/pages/question/Edit'
// 问卷统计
import Stat from '@/pages/question/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'star',
            element: <Star />
          },
          {
            path: 'trash',
            element: <Trash />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat />
      }
    ]
  }
])

export default router

// -------------------- 路由常量 --------------------
export const HOME_PATH = '/'
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const PROFILE_PATH = '/profile'
export const MANAGE_INDEX_PATH = '/manage/list'
