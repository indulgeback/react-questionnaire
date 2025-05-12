import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import { SaveOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateComponentProps } from '@/store/modules/componentsSlice'
import { QuestionMatrixRadioPropsType } from '@/components/QuestionComponents/QuestionMatrixRadio'

interface MatrixRadioConfigProps {
  componentId: string
}

const MatrixRadioConfig: React.FC<MatrixRadioConfigProps> = ({ componentId }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  // 从Redux获取组件数据
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const currentComponent = componentList.find(c => c.fe_id === componentId)

  // 组件数据变化时，重置表单
  useEffect(() => {
    if (currentComponent) {
      form.setFieldsValue({
        title: currentComponent.props.title
      })
    }
  }, [currentComponent, form])

  // 获取行选项
  const getRows = (): string[] => {
    if (!currentComponent) return []
    return (currentComponent.props as QuestionMatrixRadioPropsType).rows || []
  }

  // 获取列选项
  const getColumns = (): string[] => {
    if (!currentComponent) return []
    return (currentComponent.props as QuestionMatrixRadioPropsType).columns || []
  }

  // 添加行选项
  const addRow = () => {
    if (!currentComponent) return

    const currentRows = getRows()
    const newRows = [...currentRows, `行选项${currentRows.length + 1}`]

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      rows: newRows
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionMatrixRadioPropsType
      })
    )
  }

  // 删除行选项
  const deleteRow = (index: number) => {
    if (!currentComponent) return

    const currentRows = getRows()
    // 至少保留一个选项
    if (currentRows.length <= 1) return

    const newRows = currentRows.filter((_, i) => i !== index)

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      rows: newRows
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionMatrixRadioPropsType
      })
    )
  }

  // 修改行选项文本
  const changeRowText = (index: number, text: string) => {
    if (!currentComponent) return

    const currentRows = getRows()
    const newRows = [...currentRows]
    newRows[index] = text

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      rows: newRows
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionMatrixRadioPropsType
      })
    )
  }

  // 添加列选项
  const addColumn = () => {
    if (!currentComponent) return

    const currentColumns = getColumns()
    const newColumns = [...currentColumns, `列选项${currentColumns.length + 1}`]

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      columns: newColumns
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionMatrixRadioPropsType
      })
    )
  }

  // 删除列选项
  const deleteColumn = (index: number) => {
    if (!currentComponent) return

    const currentColumns = getColumns()
    // 至少保留一个选项
    if (currentColumns.length <= 1) return

    const newColumns = currentColumns.filter((_, i) => i !== index)

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      columns: newColumns
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionMatrixRadioPropsType
      })
    )
  }

  // 修改列选项文本
  const changeColumnText = (index: number, text: string) => {
    if (!currentComponent) return

    const currentColumns = getColumns()
    const newColumns = [...currentColumns]
    newColumns[index] = text

    // 获取当前表单值
    const formValues = form.getFieldsValue()

    // 更新组件属性
    const newProps = {
      ...currentComponent.props,
      ...formValues,
      columns: newColumns
    }

    dispatch(
      updateComponentProps({
        fe_id: componentId,
        newProps: newProps as QuestionMatrixRadioPropsType
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
            rows: getRows(),
            columns: getColumns()
          } as QuestionMatrixRadioPropsType
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
  const rows = getRows()
  const columns = getColumns()

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
          title: currentComponent.props.title
        }}
      >
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="行选项" required>
          <div className="space-y-2">
            {rows.map((row: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={row} onChange={e => changeRowText(index, e.target.value)} />
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => deleteRow(index)}
                  disabled={rows.length <= 1}
                />
              </div>
            ))}
            <Button type="dashed" icon={<PlusOutlined />} onClick={addRow} block>
              添加行选项
            </Button>
          </div>
        </Form.Item>
        <Form.Item label="列选项" required>
          <div className="space-y-2">
            {columns.map((column: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={column} onChange={e => changeColumnText(index, e.target.value)} />
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => deleteColumn(index)}
                  disabled={columns.length <= 1}
                />
              </div>
            ))}
            <Button type="dashed" icon={<PlusOutlined />} onClick={addColumn} block>
              添加列选项
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default MatrixRadioConfig
