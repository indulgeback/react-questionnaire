import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Switch, Button, message, Select } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import { QuestionUploadPropsType } from '@/components/QuestionComponents/QuestionUpload'

interface UploadConfigProps {
  componentId: string
}

const UploadConfig: React.FC<UploadConfigProps> = ({ componentId }) => {
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
          newProps: values as QuestionUploadPropsType
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
        <Form.Item name="maxCount" label="最大上传数量">
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item name="multiple" label="允许多文件上传" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="maxSize" label="单个文件大小限制(MB)">
          <InputNumber min={1} max={20} />
        </Form.Item>
        <Form.Item name="fileTypes" label="允许的文件类型">
          <Select mode="tags" style={{ width: '100%' }} placeholder="请输入允许的文件类型">
            <Select.Option value="image/jpeg">JPEG图片</Select.Option>
            <Select.Option value="image/png">PNG图片</Select.Option>
            <Select.Option value="image/gif">GIF图片</Select.Option>
            <Select.Option value="application/pdf">PDF文档</Select.Option>
            <Select.Option value="application/msword">Word文档</Select.Option>
            <Select.Option value="application/vnd.ms-excel">Excel文档</Select.Option>
            <Select.Option value="text/plain">文本文件</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UploadConfig
