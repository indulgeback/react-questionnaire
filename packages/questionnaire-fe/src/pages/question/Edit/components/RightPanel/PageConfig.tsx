import React, { useEffect } from 'react'
import { Form, Input, ColorPicker, Switch, Upload, Typography, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import type { Color } from 'antd/es/color-picker'
import type { RootState } from '@/store'
import type { UploadFile } from 'antd'
import { updatePageConfig } from '@/store/modules/pageConfigSlice'

const { TextArea } = Input
const { Title } = Typography

const PageConfig: React.FC = () => {
  const dispatch = useDispatch()
  const pageConfig = useSelector((state: RootState) => state.pageConfig)
  const [form] = Form.useForm()
  const [headerImageList, setHeaderImageList] = React.useState<UploadFile[]>([])

  // 表单初始化
  useEffect(() => {
    form.setFieldsValue(pageConfig)
    if (pageConfig.headerImage) {
      setHeaderImageList([
        {
          uid: '-1',
          name: 'header-image',
          status: 'done',
          url: pageConfig.headerImage
        }
      ])
    }
  }, [form, pageConfig])

  const handleFormChange = (changedValues: any) => {
    dispatch(updatePageConfig(changedValues))
  }

  const handleColorChange = (color: Color, field: 'theme' | 'backgroundColor') => {
    const hexColor = color.toHexString()
    dispatch(updatePageConfig({ [field]: hexColor }))
    form.setFieldsValue({ [field]: hexColor })
  }

  const uploadProps = {
    onRemove: () => {
      setHeaderImageList([])
      dispatch(updatePageConfig({ headerImage: '' }))
    },
    beforeUpload: (file: UploadFile) => {
      // 实际项目中，这里应该上传图片到服务器并获取URL
      // 为演示，这里假设本地生成了一个URL
      const reader = new FileReader()
      reader.readAsDataURL(file as any)
      reader.onload = () => {
        const imageUrl = reader.result as string
        setHeaderImageList([
          {
            ...file,
            uid: '-1',
            name: 'header-image',
            status: 'done',
            url: imageUrl
          }
        ])
        dispatch(updatePageConfig({ headerImage: imageUrl }))
      }
      return false
    },
    fileList: headerImageList
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

        <Form.Item label="主题色">
          <ColorPicker
            value={pageConfig.theme}
            onChange={color => handleColorChange(color, 'theme')}
            showText
          />
        </Form.Item>

        <Form.Item label="背景颜色">
          <ColorPicker
            value={pageConfig.backgroundColor}
            onChange={color => handleColorChange(color, 'backgroundColor')}
            showText
          />
        </Form.Item>

        <Form.Item name="showHeader" label="显示问卷头图" valuePropName="checked">
          <Switch />
        </Form.Item>

        {pageConfig.showHeader && (
          <Form.Item label="问卷头图">
            <Upload listType="picture-card" maxCount={1} {...uploadProps}>
              {headerImageList.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>上传</div>
                </div>
              )}
            </Upload>
          </Form.Item>
        )}

        <Form.Item name="footerText" label="问卷页脚文字">
          <Input placeholder="感谢您的参与" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default PageConfig
