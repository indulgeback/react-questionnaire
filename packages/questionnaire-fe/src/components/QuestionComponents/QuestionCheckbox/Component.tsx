import React from 'react'
import { QuestionCheckboxPropsType, QuestionCheckboxDefaultProps } from './interface'
import { Checkbox } from 'antd'
import clsx from 'clsx'
const QuestionCheckbox: React.FC<QuestionCheckboxPropsType> = (
  customProps: QuestionCheckboxPropsType
) => {
  const { title, props } = { ...QuestionCheckboxDefaultProps, ...customProps }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        <Checkbox.Group
          className={clsx('flex gap-2', props.column ? 'flex-col' : 'flex-row')}
          options={props.options}
        />
      </div>
    </div>
  )
}

export default QuestionCheckbox
