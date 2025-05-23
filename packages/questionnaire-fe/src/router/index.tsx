import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// 主体页面layout
import MainLayout from '@/layouts/MainLayout'
import ManageLayout from '@/layouts/ManageLayout'
import QuestionLayout from '@/layouts/QuestionLayout'

// 使用懒加载
const Home = lazy(() => import('@/pages/common/Home'))
const Login = lazy(() => import('@/pages/common/Login'))
const Register = lazy(() => import('@/pages/common/Register'))
const Profile = lazy(() => import('@/pages/common/Profile'))
const Qrcode = lazy(() => import('@/pages/common/Qrcode'))
const NotFound = lazy(() => import('@/pages/common/NotFound'))
const Market = lazy(() => import('@/pages/manage/Market'))
const Personal = lazy(() => import('@/pages/manage/Personal'))
const Star = lazy(() => import('@/pages/manage/Star'))
const Detail = lazy(() => import('@/pages/question/Detail'))
const Edit = lazy(() => import('@/pages/question/Edit'))
const Stat = lazy(() => import('@/pages/question/Stat'))
const AIAnalysis = lazy(() => import('@/pages/question/AIAnalysis'))
// 路由常量
export const HOME_PATH = '/'
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const PROFILE_PATH = '/profile'
export const QRCODE_PATH = '/qrcode'
export const MANAGE_MARKET_PATH = '/manage/market'
export const MANAGE_PERSONAL_PATH = '/manage/personal'
export const MANAGE_STAR_PATH = '/manage/star'
export const QUESTION_DETAIL_PATH = '/question/detail'
export const QUESTION_EDIT_PATH = '/question/edit'
export const QUESTION_STAT_PATH = '/question/stat'
export const QUESTION_AI_ANALYSIS_PATH = '/question/ai-analysis'

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <MainLayout />,
    children: [
      {
        path: HOME_PATH,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        )
      },
      {
        path: LOGIN_PATH,
        element: (
          <Suspense>
            <Login />
          </Suspense>
        )
      },
      {
        path: REGISTER_PATH,
        element: (
          <Suspense>
            <Register />
          </Suspense>
        )
      },
      {
        path: PROFILE_PATH,
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        )
      },
      {
        path: QRCODE_PATH + '/:id',
        element: (
          <Suspense>
            <Qrcode />
          </Suspense>
        )
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: MANAGE_MARKET_PATH,
            element: (
              <Suspense>
                <Market />
              </Suspense>
            )
          },
          {
            path: MANAGE_PERSONAL_PATH,
            element: (
              <Suspense>
                <Personal />
              </Suspense>
            )
          },
          {
            path: MANAGE_STAR_PATH,
            element: (
              <Suspense>
                <Star />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '*',
        element: (
          <Suspense>
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
        path: QUESTION_DETAIL_PATH + '/:id',
        element: (
          <Suspense>
            <Detail />
          </Suspense>
        )
      },
      {
        path: QUESTION_EDIT_PATH + '/:id',
        element: (
          <Suspense>
            <Edit />
          </Suspense>
        )
      },
      {
        path: QUESTION_STAT_PATH + '/:id',
        element: (
          <Suspense>
            <Stat />
          </Suspense>
        )
      },
      {
        path: QUESTION_AI_ANALYSIS_PATH + '/:id',
        element: (
          <Suspense>
            <AIAnalysis />
          </Suspense>
        )
      }
    ]
  }
])

export default router
