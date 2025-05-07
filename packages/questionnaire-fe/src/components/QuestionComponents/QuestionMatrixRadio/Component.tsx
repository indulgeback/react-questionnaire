import React from 'react'
import { QuestionMatrixRadioPropsType, QuestionMatrixRadioDefaultProps } from './interface'
import { Radio, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  rowName: string
  [key: string]: string | React.ReactNode
}

const QuestionMatrixRadio: React.FC<QuestionMatrixRadioPropsType> = (
  customProps: QuestionMatrixRadioPropsType
) => {
  const { title, rows, columns } = { ...QuestionMatrixRadioDefaultProps, ...customProps }

  // 构建表格列
  const tableColumns: ColumnsType<DataType> = [
    {
      title: '',
      dataIndex: 'rowName',
      key: 'rowName',
      width: 150
    }
  ]

  // 添加列标题
  columns.forEach((col, index) => {
    tableColumns.push({
      title: col,
      dataIndex: `col${index}`,
      key: `col${index}`,
      align: 'center',
      render: () => <Radio />
    })
  })

  // 构建数据源
  const dataSource: DataType[] = rows.map((row, index) => {
    const rowData: DataType = {
      key: `row${index}`,
      rowName: row
    }

    // 为每行添加单选按钮
    columns.forEach((_, colIndex) => {
      rowData[`col${colIndex}`] = ''
    })

    return rowData
  })

  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        <Table
          columns={tableColumns}
          dataSource={dataSource}
          pagination={false}
          size="small"
          bordered
        />
      </div>
    </div>
  )
}

export default QuestionMatrixRadio
