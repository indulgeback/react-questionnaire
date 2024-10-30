import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { message } from 'antd'
import { useRequest } from 'ahooks'
import apis from '@/apis'
import { Button, Divider, Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Add, Store, Star, Delete } from '@mui/icons-material'
import { useSnackbar } from 'notistack'
const ManageLayout: React.FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const { enqueueSnackbar } = useSnackbar()
  // 手动触发逻辑
  const {
    loading,
    error,
    run: handleCreateQuestion
  } = useRequest(apis.questionApi.createQuestion, {
    manual: true,
    onSuccess(result) {
      nav(`/question/edit/${result.data.id}`)
      enqueueSnackbar('问卷创建成功', { variant: 'success' })
    }
  })

  return (
    <div className="py-4 px-12 h-full flex bg-gray-100">
      <div className="ml-5 w-40">
        <Stack spacing={2}>
          <LoadingButton
            loading={loading}
            variant="contained"
            size="large"
            startIcon={<Add />}
            onClick={handleCreateQuestion}
          >
            新建问卷
          </LoadingButton>
          <Divider />
          <Button
            variant={pathname.startsWith('/manage/list') ? 'outlined' : 'text'}
            size="large"
            startIcon={<Store />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            variant={pathname.startsWith('/manage/star') ? 'outlined' : 'text'}
            size="large"
            startIcon={<Star />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            variant={pathname.startsWith('/manage/trash') ? 'outlined' : 'text'}
            size="large"
            startIcon={<Delete />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Stack>
      </div>
      <div className="flex-1 w-0 ml-5 h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
