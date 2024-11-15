import React, { useState } from 'react'
import { useTitle } from 'ahooks'
import styles from './Common.module.scss'
import { Empty, Typography, Table, Tag, Space, Button, Modal } from 'antd'
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import ListSearch from '@/components/common/listSearch'

const { Title } = Typography
const { confirm } = Modal

const tableColumns = [
  {
    title: '问卷标题',
    dataIndex: 'title'
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    render: (isPublished: boolean) => {
      return isPublished ? (
        <Tag color="cyan" icon={<CheckCircleOutlined />}>
          已发布
        </Tag>
      ) : (
        <Tag>未发布</Tag>
      )
    }
  },
  {
    title: '答卷数量',
    dataIndex: 'answerCount'
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt'
  }
]

const Trash: React.FC = () => {
  useTitle('小木问卷 - 星标问卷')
  const [questionList, setQuestionList] = useState([])
  // 记录选中的id
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  function del() {
    confirm({
      title: '确认彻底删除该问卷吗？',
      icon: <ExclamationCircleOutlined />,
      content: '删除以后不可以找回',
      onOk: () => alert('删除' + JSON.stringify(selectedIds))
    })
  }

  const TableElm = (
    <>
      <div className="mb-4">
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => setSelectedIds(selectedRowKeys as string[])
        }}
      />
    </>
  )

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="p-2">
          <Title level={3}>星标问卷</Title>
        </div>
        <div className="p-2">{/* <ListSearch /> */}</div>
      </div>
      <div className="px-2 overflow-y-scroll">
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="回收站空空如也" />}
        {questionList.length > 0 && TableElm}
      </div>
    </>
  )
}

export default Trash
