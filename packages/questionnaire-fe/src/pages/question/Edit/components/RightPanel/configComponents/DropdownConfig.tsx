import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import { SaveOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import { QuestionDropdownPropsType } from '@/components/QuestionComponents/QuestionDropdown'

interface DropdownConfigProps {
  componentId: string
}

const DropdownConfig: React.FC<DropdownConfigProps> = ({ componentId }) => {
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
        placeholder: (currentComponent.props as QuestionDropdownPropsType).placeholder
      })
    }
  }, [currentComponent, form])

  // 获取当前选项列表
  const getOptions = (): string[] => {
    if (!currentComponent) return []
    return (currentComponent.props as QuestionDropdownPropsType).options || []
  }

  // 添加选项
  const addOption = () => {
    if (!currentComponent) return

    const currentOptions = getOptions()
    const newOptions = [...currentOptions, `新选项${currentOptions.length + 1}`]

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
        newProps: newProps as QuestionDropdownPropsType
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
        newProps: newProps as QuestionDropdownPropsType
      })
    )
  }

  // 修改选项文本
  const changeOptionText = (index: number, text: string) => {
    if (!currentComponent) return

    const currentOptions = getOptions()
    const newOptions = [...currentOptions]
    newOptions[index] = text

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
        newProps: newProps as QuestionDropdownPropsType
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
          } as QuestionDropdownPropsType
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
        <h3 className="font-bold"> 配置</h3>
        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
          应用
        </Button>
      </div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: currentComponent.props.title,
          placeholder: (currentComponent.props as QuestionDropdownPropsType).placeholder
        }}
      >
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="placeholder" label="提示文本">
          <Input />
        </Form.Item>
        <Form.Item label="选项" required>
          <div className="space-y-2">
            {options.map((option: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={option} onChange={e => changeOptionText(index, e.target.value)} />
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => deleteOption(index)}
                  disabled={options.length <= 1}
                />
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

export default DropdownConfig
