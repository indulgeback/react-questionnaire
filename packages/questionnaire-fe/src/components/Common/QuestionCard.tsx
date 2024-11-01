import React from 'react'
import styles from './QuestionCard.module.scss'
import { App, Button, Divider, Popconfirm, Space, Tag, message } from 'antd'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  QuestionCircleOutlined,
  StarOutlined
} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

// ts 自定义类型
type PropsType = {
  id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: React.FC<PropsType> = (props: PropsType) => {
  const { message } = App.useApp()
  const nav = useNavigate()
  const { id, title, isStar, isPublished, answerCount, createdAt } = props
  const duplicate = () => {
    message.success('复制成功' + id)
  }
  const del = () => {
    message.success('删除成功' + id)
  }
  return (
    <div className="my-3 p-3 rounded-md bg-white duration-300 hover:shadow-md">
      <div className="flex">
        <div className="flex-1">
          <Link to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}>
            <Space>
              <span className="inline-block w-4">
                {isStar && <StarOutlined className="text-custom-yellow" />}
              </span>
              {title}
            </Space>
          </Link>
        </div>
        <div className="flex-1 text-right text-xs">
          <Space>
            {isPublished ? (
              <Tag color="cyan" icon={<CheckCircleOutlined />}>
                已发布
              </Tag>
            ) : (
              <Tag icon={<ClockCircleOutlined />}>未发布</Tag>
            )}
            <span>答卷:{answerCount}</span>
            <span>创建于:{dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
          </Space>
        </div>
      </div>
      <Divider className="my-3" />
      <div className="flex">
        <div className="flex-1">
          <Space>
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => {
                nav(`/question/edit/${id}`)
              }}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              size="small"
              icon={<LineChartOutlined />}
              onClick={() => {
                nav(`/question/stat/${id}`)
              }}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className="flex-1 text-right">
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />}>
              {isStar ? '取消星标' : '星标问卷'}
            </Button>
            <Popconfirm
              title="确定复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>
            <Popconfirm
              title="确定删除该问卷？"
              okText="确定"
              okType="danger"
              cancelText="取消"
              onConfirm={del}
              icon={<QuestionCircleOutlined className="text-custom-red" />}
            >
              <Button type="text" size="small" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
