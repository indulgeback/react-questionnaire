import React from 'react'
import { QuestionSliderPropsType, QuestionSliderDefaultProps } from './interface'
import { Slider } from 'antd'

const QuestionSlider: React.FC<QuestionSliderPropsType> = (
  customProps: QuestionSliderPropsType
) => {
  const { title, min, max, step, showMarks, defaultValue } = {
    ...QuestionSliderDefaultProps,
    ...customProps
  }

  // 生成刻度标记
  const marks = showMarks
    ? {
        [min]: min,
        [Math.floor((max - min) / 4) + min]: Math.floor((max - min) / 4) + min,
        [Math.floor((max - min) / 2) + min]: Math.floor((max - min) / 2) + min,
        [Math.floor(((max - min) / 4) * 3) + min]: Math.floor(((max - min) / 4) * 3) + min,
        [max]: max
      }
    : {}

  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div className="px-4">
        <Slider min={min} max={max} step={step} marks={marks} defaultValue={defaultValue} />
      </div>
    </div>
  )
}

export default QuestionSlider
