import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// 主体页面layout
import MainLayout from '@/layouts/MainLayout'
import ManageLayout from '@/layouts/ManageLayout'
import QuestionLayout from '@/layouts/QuestionLayout'

// 自定义组件
import CustomSpin from '@/components/CustomSpin/CustomSpin'

// 使用懒加载
const Home = lazy(() => import('@/pages/common/Home'))
const Login = lazy(() => import('@/pages/common/Login'))
const Register = lazy(() => import('@/pages/common/Register'))
const Profile = lazy(() => import('@/pages/common/Profile'))
const NotFound = lazy(() => import('@/pages/common/NotFound'))
const List = lazy(() => import('@/pages/manage/List'))
const Star = lazy(() => import('@/pages/manage/Star'))
const Edit = lazy(() => import('@/pages/question/Edit'))
const Stat = lazy(() => import('@/pages/question/Stat'))
const MarkdownView = lazy(() => import('@/pages/markdown-view'))

// 路由常量
export const HOME_PATH = '/'
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const PROFILE_PATH = '/profile'
export const MANAGE_INDEX_PATH = '/manage/list'
export const MANAGE_STAR_PATH = '/manage/star'
export const QUESTION_EDIT_PATH = '/question/edit/:id'
export const QUESTION_STAT_PATH = '/question/stat/:id'
export const MARKDOWN_VIEW_PATH = '/markdown-view'

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <MainLayout />,
    children: [
      {
        path: HOME_PATH,
        element: (
          <Suspense fallback={<CustomSpin />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: LOGIN_PATH,
        element: (
          <Suspense fallback={<CustomSpin />}>
            <Login />
          </Suspense>
        )
      },
      {
        path: REGISTER_PATH,
        element: (
          <Suspense fallback={<CustomSpin />}>
            <Register />
          </Suspense>
        )
      },
      {
        path: PROFILE_PATH,
        element: (
          <Suspense fallback={<CustomSpin />}>
            <Profile />
          </Suspense>
        )
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: MANAGE_INDEX_PATH,
            element: (
              <Suspense fallback={<CustomSpin />}>
                <List />
              </Suspense>
            )
          },
          {
            path: MANAGE_STAR_PATH,
            element: (
              <Suspense fallback={<CustomSpin />}>
                <Star />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<CustomSpin />}>
            <NotFound />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: QUESTION_EDIT_PATH,
        element: (
          <Suspense fallback={<CustomSpin />}>
            <Edit />
          </Suspense>
        )
      },
      {
        path: QUESTION_STAT_PATH,
        element: (
          <Suspense fallback={<CustomSpin />}>
            <Stat />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/markdown-view',
    element: (
      <Suspense fallback={<CustomSpin />}>
        <MarkdownView />
      </Suspense>
    )
  }
])

export default router
