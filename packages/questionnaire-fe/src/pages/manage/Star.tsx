import React, { useState, useEffect } from 'react'
import { useTitle } from 'ahooks'
import ListSearch from '@/components/Common/ListSearch'
import { Empty, Typography, Table, Space, Button, Tag, Tooltip } from 'antd'
import { TablePaginationConfig } from 'antd/es/table'
import useLoadQuestionList from '@/hooks/useLoadQuestionList'
import { QuestionListType } from '@/hooks/types'
import dayjs from 'dayjs'
import { ColumnsType } from 'antd/es/table'
import { EditOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title } = Typography
const Star: React.FC = () => {
  useTitle('小木问卷 - 星标问卷')
  const [questionList, setQuestionList] = useState([])

  const [pagination, setPagination] = useState<TablePaginationConfig>({
    position: ['bottomCenter'],
    current: 1,
    pageSize: 20,
    total: 0,
    showTotal: (total: number) => `共 ${total} 条`,
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: ['20', '50', '100']
  })

  const [search, setSearch] = useState('')

  const { loading, res, refresh } = useLoadQuestionList({
    currentView: pagination.current || 1,
    stepSize: pagination.pageSize || 10,
    search: search,
    type: QuestionListType.FAVORATE
  })

  useEffect(() => {
    if (res && res?.data?.list) {
      setQuestionList(res.data.list)
      setPagination({
        ...pagination,
        total: res.data.count
      })
    }
  }, [res])

  const columns: ColumnsType<any> = [
    {
      title: '问卷标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'createTime',
      render: (createTime: string) => {
        return dayjs(createTime).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
      key: 'updateTime',
      render: (updateTime: string) => {
        return dayjs(updateTime).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    {
      title: '答卷数量',
      dataIndex: 'answer_count',
      key: 'answerCount'
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author'
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '状态',
      dataIndex: 'is_published',
      key: 'is_published',
      render: (isPublished: number, record) => (
        <Tag color={isPublished ? 'cyan' : 'default'} key={`status-${record.id}`}>
          {isPublished ? '已发布' : '未发布'}
        </Tag>
      )
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: '200px',
      render: (text, record) => (
        <Space key={`action-${record.id}`}>
          <Tooltip title="编辑" key={`edit-${record.id}`}>
            <Button size="small" shape="circle" icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="复制" key={`copy-${record.id}`}>
            <Button size="small" shape="circle" icon={<CopyOutlined />} />
          </Tooltip>
          <Tooltip title="删除" key={`delete-${record.id}`}>
            <Button size="small" shape="circle" danger icon={<DeleteOutlined />} />
          </Tooltip>
        </Space>
      )
    }
  ]

  const handleTableChange = (pagination: any) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize
    })
  }

  const searchChange = (search: string) => {
    setSearch(search)
    setPagination({
      ...pagination,
      current: 1
    })
  }

  // 记录选中的id
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="p-2">
          <Title level={3}>星标问卷</Title>
        </div>
        <div className="p-2">
          <ListSearch searchChange={searchChange} />
        </div>
      </div>
      <div className="px-2 flex-1 flex flex-col">
        {/* 问卷列表 */}
        {questionList.length === 0 ? (
          <Empty className="mt-40" description="暂无星标问卷" />
        ) : (
          <Table
            bordered
            dataSource={questionList}
            columns={columns}
            loading={loading}
            rowKey={record => record.id}
            pagination={pagination}
            onChange={handleTableChange}
            scroll={{ y: 'calc(100vh - 307px)' }}
            rowSelection={{
              type: 'checkbox',
              onChange: selectedRowKeys => {
                setSelectedIds(selectedRowKeys as string[])
              }
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Star
