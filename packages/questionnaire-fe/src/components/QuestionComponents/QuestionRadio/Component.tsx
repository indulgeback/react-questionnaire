import React from 'react'
import { QuestionRadioPropsType, QuestionRadioDefaultProps } from './interface'
import { Radio } from 'antd'
import clsx from 'clsx'

const QuestionRadio: React.FC<QuestionRadioPropsType> = (customProps: QuestionRadioPropsType) => {
  const { title, options, column } = { ...QuestionRadioDefaultProps, ...customProps }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        <Radio.Group
          className={clsx('flex gap-2', column ? 'flex-col' : 'flex-row')}
          options={options}
        />
      </div>
    </div>
  )
}

export default QuestionRadio
