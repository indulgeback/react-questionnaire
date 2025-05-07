import React from 'react'
import { QuestionNPSPropsType, QuestionNPSDefaultProps } from './interface'
import { Radio, Space } from 'antd'

const QuestionNPS: React.FC<QuestionNPSPropsType> = (customProps: QuestionNPSPropsType) => {
  const { title, min, max, minLabel, maxLabel } = { ...QuestionNPSDefaultProps, ...customProps }

  // 生成NPS评分选项
  const options = []
  for (let i = min; i <= max; i++) {
    options.push({ label: i.toString(), value: i })
  }

  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div className="flex flex-col">
        <Radio.Group>
          <div className="grid grid-cols-11 gap-1">
            {options.map(option => (
              <div key={option.value} className="flex flex-col items-center justify-center">
                <div className="flex justify-center w-full">
                  <Radio value={option.value} />
                </div>
                <span className="text-xs mt-1 text-center mr-2">{option.label}</span>
              </div>
            ))}
          </div>
        </Radio.Group>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionNPS
