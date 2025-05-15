import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Button, Tooltip } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import { RootState } from '@/store'
import ComponentRender from '@/pages/question/Edit/components/ComponentRender'
import { ComponentInfoType } from '@/store/modules/componentsSlice'
import CustomSpin from '@/components/CustomSpin/CustomSpin'

const { Title, Paragraph } = Typography

const Detail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { loading } = useLoadQuestionData()
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const pageConfig = useSelector((state: RootState) => state.pageConfig)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CustomSpin />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-custom-bg-100">
      {/* 头部区域 - 返回按钮 */}
      <div className="h-16 flex items-center">
        <div className="size-10 flex justify-center items-center ml-4">
          <Tooltip title="返回">
            <Button shape="circle" icon={<LeftOutlined />} onClick={() => navigate(-1)} />
          </Tooltip>
        </div>
      </div>

      {/* 问卷内容区域 */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        {/* 问卷头部 */}
        <div className="pt-8 px-8 pb-4 border-b border-gray-200">
          <Title
            level={3}
            style={{
              color: 'rgb(38, 166, 154)',
              textAlign: 'center',
              marginBottom: '8px'
            }}
          >
            {pageConfig.title || '未命名问卷'}
          </Title>

          <Paragraph
            style={{
              color: '#666',
              textAlign: 'center',
              fontSize: '14px'
            }}
          >
            {pageConfig.description || ''}
          </Paragraph>
        </div>

        {/* 问卷内容 */}
        <div className="px-8 py-6">
          {componentList.length === 0 ? (
            <div className="text-center py-8 text-gray-500">该问卷暂无内容</div>
          ) : (
            <div className="space-y-6">
              {componentList.map((component: ComponentInfoType) => (
                <div
                  key={component.fe_id}
                  className="p-4 border border-gray-100 rounded-md hover:border-gray-200 transition-colors"
                >
                  <ComponentRender component={component} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 问卷底部 */}
        {pageConfig.footerText && (
          <div className="px-8 pb-8 pt-2 text-center text-gray-500 text-sm">
            {pageConfig.footerText}
          </div>
        )}
      </div>
    </div>
  )
}

export default Detail
