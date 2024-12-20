import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useRequest } from 'ahooks'
import apis from '@/apis'
import { Button, Divider, Space } from 'antd'
import { DeleteFilled, FileAddFilled, StarFilled, StepForwardFilled } from '@ant-design/icons'
const ManageLayout: React.FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  // 手动触发逻辑
  const {
    loading,
    error,
    run: handleCreateQuestion
  } = useRequest(apis.questionApi.createQuestion, {
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
            type={pathname.startsWith('/manage/list') ? 'dashed' : 'text'}
            size="middle"
            icon={<StepForwardFilled />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'dashed' : 'text'}
            size="middle"
            icon={<StarFilled />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'dashed' : 'text'}
            size="middle"
            icon={<DeleteFilled />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
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
