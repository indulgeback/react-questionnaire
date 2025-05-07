import React from 'react'
import { QuestionImageChoicePropsType, QuestionImageChoiceDefaultProps } from './interface'
import { Radio, Checkbox, Image, Space } from 'antd'

const QuestionImageChoice: React.FC<QuestionImageChoicePropsType> = (
  customProps: QuestionImageChoicePropsType
) => {
  const { title, options, isMultiple } = {
    ...QuestionImageChoiceDefaultProps,
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
      <div className="grid grid-cols-3 gap-4">
        {options.map(option => (
          <div key={option.value} className="flex flex-col items-center border rounded-md p-2">
            <Image
              src={option.url}
              alt={option.text}
              width={150}
              height={150}
              className="object-cover mb-2"
              preview={false}
            />
            <div className="mt-2 w-full flex items-center">
              {isMultiple ? (
                <Checkbox value={option.value}>{option.text}</Checkbox>
              ) : (
                <Radio value={option.value}>{option.text}</Radio>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionImageChoice
