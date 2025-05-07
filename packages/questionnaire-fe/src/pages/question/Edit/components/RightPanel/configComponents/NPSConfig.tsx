import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Button, message } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import { QuestionNPSPropsType } from '@/components/QuestionComponents/QuestionNPS'

interface NPSConfigProps {
  componentId: string
}

const NPSConfig: React.FC<NPSConfigProps> = ({ componentId }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  // 从Redux获取组件数据
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const currentComponent = componentList.find(c => c.fe_id === componentId)

  // 组件数据变化时，重置表单
  useEffect(() => {
    if (currentComponent) {
      form.setFieldsValue(currentComponent.props)
    }
  }, [currentComponent, form])

  // 应用配置
  const handleSave = async () => {
    if (!currentComponent) return

    try {
      // 验证表单
      const values = await form.validateFields()

      // 派发更新action
      dispatch(
        updateComponentProps({
          fe_id: componentId,
          newProps: values as QuestionNPSPropsType
        })
      )

      message.success('应用成功')
    } catch (error) {
      console.error('表单验证失败:', error)
      message.error('应用失败')
    }
  }

  if (!currentComponent) return null

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">{currentComponent.title} 配置</h3>
        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
          应用
        </Button>
      </div>
      <Form form={form} layout="vertical" initialValues={currentComponent.props}>
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="min" label="最小值">
          <InputNumber min={0} max={9} />
        </Form.Item>
        <Form.Item name="max" label="最大值">
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item name="minLabel" label="最小值标签">
          <Input />
        </Form.Item>
        <Form.Item name="maxLabel" label="最大值标签">
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default NPSConfig
