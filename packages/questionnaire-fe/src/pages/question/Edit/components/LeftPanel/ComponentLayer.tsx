import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { DeleteOutlined } from '@ant-design/icons'
import { App, Button, Typography, Empty, Popconfirm } from 'antd'
import { deleteComponent, setSelectedId } from '@/store/modules/componentsSlice'

const { Text } = Typography

const ComponentLayer: React.FC = () => {
  const { message } = App.useApp()

  const { componentList, selectedId } = useSelector((state: RootState) => state.components)
  const dispatch = useDispatch()

  // 处理删除组件
  const handleDeleteComponent = (fe_id: string) => {
    dispatch(deleteComponent(fe_id))
    message.success('删除组件成功')
  }

  // 处理选中组件
  const handleSelectComponent = (fe_id: string) => {
    dispatch(setSelectedId(fe_id))
  }

  if (componentList.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <Empty description="暂无组件，请先添加组件" />
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-sm text-gray-500 mb-2">已添加 {componentList.length} 个组件</div>
      {componentList.map(comp => {
        const { fe_id, title, type } = comp
        const isSelected = selectedId === fe_id

        return (
          <div
            key={fe_id}
            className={`p-3 rounded-md  flex justify-between items-center cursor-pointer border-2 ${
              isSelected
                ? 'border-custom-accent-100'
                : 'border-gray-200 hover:border-custom-accent-100'
            }`}
            onClick={() => handleSelectComponent(fe_id)}
          >
            <div className="flex flex-col">
              <Text strong>{title}</Text>
              <Text type="secondary" className="text-xs">
                ID: {fe_id}
              </Text>
            </div>
            <Popconfirm
              title="确定要删除该组件吗？"
              onConfirm={e => {
                e?.stopPropagation()
                handleDeleteComponent(fe_id)
              }}
              okText="确定"
              cancelText="取消"
              placement="left"
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={e => e.stopPropagation()}
              />
            </Popconfirm>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentLayer
