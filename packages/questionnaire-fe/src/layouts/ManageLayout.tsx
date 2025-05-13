import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useRequest } from 'ahooks'
import apis from '@/apis'
import { Button, Divider, Space } from 'antd'
import { FileAddFilled } from '@ant-design/icons'
import SvgIcon from '@/components/Common/SvgIcon'
import {
  MANAGE_MARKET_PATH,
  MANAGE_PERSONAL_PATH,
  MANAGE_STAR_PATH,
  QUESTION_EDIT_PATH
} from '@/router'
import { getUserInfoFromStorage } from '@/utils'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
const ManageLayout: React.FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const { isRequestSuccess, successMessage } = useRequestSuccessChecker()
  const createQuestion = async () => {
    const userInfo = getUserInfoFromStorage()
    const params = {
      author_id: userInfo.userId,
      author: userInfo.nickname
    }
    const res = await apis.questionApi.createQuestion(params)
    if (isRequestSuccess(res)) {
      successMessage('创建成功')
      nav(`${QUESTION_EDIT_PATH}/${res.data.id}`)
    }
  }
  // 手动触发逻辑
  const {
    loading,
    error,
    run: handleCreateQuestion
  } = useRequest(createQuestion, {
    manual: true
  })

  return (
    <div className="pb-14 px-12 h-screen pt-20 flex bg-custom-bg-100">
      <div className="ml-5 w-40">
        <Space direction="vertical">
          <Button
            loading={loading}
            type="primary"
            size="middle"
            icon={<FileAddFilled />}
            onClick={handleCreateQuestion}
          >
            新建问卷
          </Button>
          <Divider className="my-4" />
          <Button
            type={pathname.startsWith(MANAGE_MARKET_PATH) ? 'dashed' : 'text'}
            size="middle"
            icon={<SvgIcon name="market" />}
            onClick={() => nav(MANAGE_MARKET_PATH)}
          >
            问卷市场
          </Button>
          <Button
            type={pathname.startsWith(MANAGE_PERSONAL_PATH) ? 'dashed' : 'text'}
            size="middle"
            icon={<SvgIcon name="questionnaire" />}
            onClick={() => nav(MANAGE_PERSONAL_PATH)}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith(MANAGE_STAR_PATH) ? 'dashed' : 'text'}
            size="middle"
            icon={<SvgIcon name="star" />}
            onClick={() => nav(MANAGE_STAR_PATH)}
          >
            星标问卷
          </Button>
        </Space>
      </div>
      <div className="flex-1 w-0 ml-5 h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
