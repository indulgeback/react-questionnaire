import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Switch, Button, message, Select } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import { QuestionRatingPropsType } from '@/components/QuestionComponents/QuestionRating'

interface RatingConfigProps {
  componentId: string
}

const RatingConfig: React.FC<RatingConfigProps> = ({ componentId }) => {
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
          newProps: values as QuestionRatingPropsType
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
        <h3 className="font-bold">配置</h3>
        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
          应用
        </Button>
      </div>
      <Form form={form} layout="vertical" initialValues={currentComponent.props}>
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="count" label="评分数量">
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item name="allowHalf" label="允许半星" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="character" label="评分图标">
          <Select>
            <Select.Option value="star">星星</Select.Option>
            <Select.Option value="heart">心形</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RatingConfig
