import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Switch, Button, message } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import { QuestionTitlePropsType } from '@/components/QuestionComponents/QuestionTitle'

interface TitleConfigProps {
  componentId: string
}

const TitleConfig: React.FC<TitleConfigProps> = ({ componentId }) => {
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

  // 保存配置
  const handleSave = async () => {
    if (!currentComponent) return

    try {
      // 验证表单
      const values = await form.validateFields()

      // 派发更新action
      dispatch(
        updateComponentProps({
          fe_id: componentId,
          newProps: values as QuestionTitlePropsType
        })
      )

      message.success('保存成功')
    } catch (error) {
      console.error('表单验证失败:', error)
      message.error('保存失败')
    }
  }

  if (!currentComponent) return null

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">{currentComponent.title} 配置</h3>
        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
          保存
        </Button>
      </div>
      <Form form={form} layout="vertical" initialValues={currentComponent.props}>
        <Form.Item
          name="title"
          label="标题文本"
          rules={[{ required: true, message: '请输入标题文本' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="level" label="标题级别">
          <InputNumber min={1} max={5} />
        </Form.Item>
        <Form.Item name="isCenter" label="是否居中" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="fontSize" label="字体大小">
          <InputNumber min={12} max={36} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default TitleConfig
