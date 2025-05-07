import React from 'react'
import { QuestionUploadPropsType, QuestionUploadDefaultProps } from './interface'
import { Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const QuestionUpload: React.FC<QuestionUploadPropsType> = (
  customProps: QuestionUploadPropsType
) => {
  const { title, maxCount, multiple, fileTypes, maxSize } = {
    ...QuestionUploadDefaultProps,
    ...customProps
  }

  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        <Upload
          listType="picture"
          maxCount={maxCount}
          multiple={multiple}
          accept={fileTypes.join(',')}
          beforeUpload={file => {
            // 在实际运行环境中校验文件大小
            const isLt = file.size / 1024 / 1024 < maxSize
            return isLt ? true : Upload.LIST_IGNORE
          }}
        >
          <Button icon={<UploadOutlined />}>点击上传文件</Button>
        </Upload>
        <div className="mt-2 text-xs text-gray-500">
          支持的文件类型: {fileTypes.join(', ')}，最大文件大小: {maxSize}MB
        </div>
      </div>
    </div>
  )
}

export default QuestionUpload
