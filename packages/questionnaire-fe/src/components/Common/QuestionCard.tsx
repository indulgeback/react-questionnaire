import React, { useMemo } from 'react'
import { Button, Divider, Popconfirm, Space, Tag } from 'antd'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  QuestionCircleOutlined,
  StarOutlined,
  FieldTimeOutlined
} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import apis from '@/apis'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import { QUESTION_DETAIL_PATH, QUESTION_EDIT_PATH, QUESTION_STAT_PATH } from '@/router'

// ts 自定义类型
type PropsType = {
  id: number
  title: string
  isFavorated: boolean
  isPublished: boolean
  author: string
  answerCount: number
  createdAt: string
  updatedAt: string
  editable: boolean
  onRefresh: (id: number) => Promise<void>
  onDelete: () => void
}

const QuestionCard: React.FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { isRequestSuccess, successMessage } = useRequestSuccessChecker()
  const {
    id,
    title,
    isFavorated,
    isPublished,
    author,
    answerCount,
    createdAt,
    updatedAt,
    editable,
    onRefresh,
    onDelete
  } = props

  // 收藏或取消收藏
  const handleFavorate = async () => {
    const res = !isFavorated
      ? await apis.questionApi.favorateQuestion(id)
      : await apis.questionApi.unFavorateQuestion(id)
    if (isRequestSuccess(res)) {
      onRefresh(id)
      successMessage(res.msg)
    }
  }

  // 复制问卷
  const duplicate = () => {
    successMessage('复制成功' + id)
  }

  // 删除问卷
  const del = async () => {
    const res = await apis.questionApi.deleteQuestion(id)
    if (isRequestSuccess(res)) {
      onDelete()
      successMessage(res.msg)
    }
  }
  return (
    <div className="my-3 p-3 rounded-md bg-white duration-300 hover:shadow-md">
      <div className="flex">
        <div className="flex-1">
          <Link to={`${QUESTION_DETAIL_PATH}/${id}`}>
            <Space>
              <span className="inline-block w-4">
                {isFavorated && <StarOutlined className="text-custom-yellow" />}
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
            <Tag color="gold">作者: {author}</Tag>
            <Tag color="gold">答卷: {answerCount}</Tag>
            <Tag bordered={false} icon={<FieldTimeOutlined />} color="lime">
              创建于: {dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}
            </Tag>
            <Tag bordered={false} icon={<FieldTimeOutlined />} color="lime">
              更新于: {dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss')}
            </Tag>
          </Space>
        </div>
      </div>
      <Divider className="my-3" />
      <div className="flex">
        <div className="flex-1">
          {editable && (
            <Space>
              <Button
                type="text"
                size="small"
                icon={<EditOutlined />}
                onClick={() => {
                  nav(`${QUESTION_EDIT_PATH}/${id}`)
                }}
                disabled={!editable}
              >
                编辑问卷
              </Button>
              <Button
                type="text"
                size="small"
                icon={<LineChartOutlined />}
                onClick={() => {
                  nav(`${QUESTION_STAT_PATH}/${id}`)
                }}
                disabled={!isPublished || !editable}
              >
                问卷统计
              </Button>
            </Space>
          )}
        </div>
        <div className="flex-1 text-right">
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />} onClick={handleFavorate}>
              {isFavorated ? '取消星标' : '星标问卷'}
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
            {editable && (
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
            )}
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
