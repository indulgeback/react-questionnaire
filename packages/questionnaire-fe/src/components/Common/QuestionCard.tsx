import React from 'react'
import styles from './QuestionCard.module.scss'
import { Button, Divider, Popconfirm, Space, Tag, message } from 'antd'
import {
  CheckCircleOutlined,
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
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: React.FC<PropsType> = (props: PropsType) => {
  const [messageApi, contextHolder] = message.useMessage()
  const nav = useNavigate()
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props
  const duplicate = () => {
    messageApi.success('复制成功')
  }
  const del = () => {
    messageApi.success('删除成功')
  }
  return (
    <div className={styles.container}>
      {contextHolder}
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              <span className={styles.star}>
                {isStar && <StarOutlined style={{ color: '#fadb14' }} />}
              </span>
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="cyan" icon={<CheckCircleOutlined />}>
                已发布
              </Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷:{answerCount}</span>
            <span>创建于:{dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => {
                nav(`/question/edit/${_id}`)
              }}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              size="small"
              icon={<LineChartOutlined />}
              onClick={() => {
                nav(`/question/stat/${_id}`)
              }}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
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
              cancelText="取消"
              onConfirm={del}
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
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
