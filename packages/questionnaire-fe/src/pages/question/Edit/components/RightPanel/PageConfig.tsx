import React, { useEffect } from 'react'
import { Form, Input, Typography, Divider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/store'
import { updatePageConfig } from '@/store/modules/pageConfigSlice'

const { TextArea } = Input
const { Title } = Typography

const PageConfig: React.FC = () => {
  const dispatch = useDispatch()
  const pageConfig = useSelector((state: RootState) => state.pageConfig)
  const [form] = Form.useForm()

  // 表单初始化
  useEffect(() => {
    form.setFieldsValue(pageConfig)
  }, [form, pageConfig])

  const handleFormChange = (changedValues: any) => {
    dispatch(updatePageConfig(changedValues))
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <Title level={4}>页面设置</Title>
      <Divider />

      <Form
        form={form}
        layout="vertical"
        initialValues={pageConfig}
        onValuesChange={handleFormChange}
      >
        <Form.Item name="title" label="问卷标题">
          <Input placeholder="请输入问卷标题" />
        </Form.Item>

        <Form.Item name="description" label="问卷描述">
          <TextArea placeholder="请输入问卷描述" rows={3} />
        </Form.Item>

        <Form.Item name="footerText" label="问卷页脚文字">
          <Input placeholder="感谢您的参与" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default PageConfig
