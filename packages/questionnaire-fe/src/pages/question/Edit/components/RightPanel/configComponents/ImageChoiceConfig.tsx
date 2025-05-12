import React, { useEffect } from 'react'
import { Form, Input, Button, message, Switch } from 'antd'
import { SaveOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import {
  QuestionImageChoicePropsType,
  ImageOption
} from '@/components/QuestionComponents/QuestionImageChoice'

interface ImageChoiceConfigProps {
  componentId: string
}

const ImageChoiceConfig: React.FC<ImageChoiceConfigProps> = ({ componentId }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  // 从Redux获取组件数据
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const currentComponent = componentList.find(c => c.fe_id === componentId)

  // 组件数据变化时，重置表单
  useEffect(() => {
    if (currentComponent) {
      form.setFieldsValue({
        title: currentComponent.props.title,
        isMultiple: (currentComponent.props as QuestionImageChoicePropsType).isMultiple
      })
    }
  }, [currentComponent, form])

  // 获取选项列表
  const getOptions = (): ImageOption[] => {
    if (!currentComponent) return []
    return (currentComponent.props as QuestionImageChoicePropsType).options || []
  }

  // 添加选项
  const addOption = () => {
    if (!currentComponent) return

    const currentOptions = getOptions()
    const newOption: ImageOption = {
      value: `${currentOptions.length + 1}`,
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      text: `选项${currentOptions.length + 1}`
    }
    const newOptions = [...currentOptions, newOption]

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      options: newOptions
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionImageChoicePropsType
      })
    )
  }

  // 删除选项
  const deleteOption = (index: number) => {
    if (!currentComponent) return

    const currentOptions = getOptions()
    // 至少保留一个选项
    if (currentOptions.length <= 1) return

    const newOptions = currentOptions.filter((_, i) => i !== index)

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      options: newOptions
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionImageChoicePropsType
      })
    )
  }

  // 修改选项
  const changeOptionText = (index: number, key: keyof ImageOption, value: string) => {
    if (!currentComponent) return

    const currentOptions = getOptions()
    const newOptions = [...currentOptions]
    newOptions[index] = { ...newOptions[index], [key]: value }

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      options: newOptions
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionImageChoicePropsType
      })
    )
  }

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
          newProps: {
            ...currentComponent.props,
            ...values,
            options: getOptions()
          } as QuestionImageChoicePropsType
        })
      )

      message.success('应用成功')
    } catch (error) {
      console.error('表单验证失败:', error)
      message.error('应用失败')
    }
  }

  if (!currentComponent) return null

  // 获取选项列表
  const options = getOptions()

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">配置</h3>
        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
          应用
        </Button>
      </div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: currentComponent.props.title,
          isMultiple: (currentComponent.props as QuestionImageChoicePropsType).isMultiple
        }}
      >
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="isMultiple" label="允许多选" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="图片选项" required>
          <div className="space-y-4">
            {options.map((option: ImageOption, index: number) => (
              <div key={index} className="border p-4 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span>选项 {index + 1}</span>
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => deleteOption(index)}
                    disabled={options.length <= 1}
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="block mb-1">选项文本</label>
                    <Input
                      value={option.text}
                      onChange={e => changeOptionText(index, 'text', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block mb-1">图片URL</label>
                    <Input
                      value={option.url}
                      onChange={e => changeOptionText(index, 'url', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block mb-1">选项值</label>
                    <Input
                      value={option.value}
                      onChange={e => changeOptionText(index, 'value', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button type="dashed" icon={<PlusOutlined />} onClick={addOption} block>
              添加选项
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ImageChoiceConfig
