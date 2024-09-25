import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button, Space, Divider, message } from 'antd'
import { useRequest } from 'ahooks'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import apis from '@/apis'
const ManageLayout: React.FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  // const [loading, setLoading] = useState(false)
  // const handleCreateQuestion = async () => {
  //   setLoading(true)
  //   const data = await apis.createQuestion()
  //   if (data.id) {
  //     nav(`/question/edit/${data.id}`)
  //     message.success('创建成功')
  //   }
  //   setLoading(false)
  // }

  // 手动触发逻辑
  const {
    loading,
    error,
    run: handleCreateQuestion
  } = useRequest(apis.createQuestion, {
    manual: true,
    onSuccess(result) {
      nav(`/question/edit/${result.id}`)
      message.success('创建成功')
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            loading={loading}
            icon={<PlusOutlined />}
            onClick={handleCreateQuestion}
          >
            新建问卷
          </Button>
          <Divider style={{ borderTop: 'transparent' }} />
          <Button
            type={pathname.startsWith('/manage/list') ? 'dashed' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'dashed' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'dashed' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
