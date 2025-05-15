import React from 'react'
import { useSelector } from 'react-redux'
import { Empty } from 'antd'
import { ComponentType } from '@/components/QuestionComponents'
import { RootState } from '@/store'
import { ComponentInfoType } from '@/store/modules/componentsSlice'

// 导入各配置组件
import TitleConfig from './configComponents/TitleConfig'
import ParagraphConfig from './configComponents/ParagraphConfig'
import ShortAnswerConfig from './configComponents/ShortAnswerConfig'
import RadioConfig from './configComponents/RadioConfig'
import CheckboxConfig from './configComponents/CheckboxConfig'
import NPSConfig from './configComponents/NPSConfig'
import RatingConfig from './configComponents/RatingConfig'
import DateConfig from './configComponents/DateConfig'
import DropdownConfig from './configComponents/DropdownConfig'
import MatrixRadioConfig from './configComponents/MatrixRadioConfig'
import MatrixCheckboxConfig from './configComponents/MatrixCheckboxConfig'
import SliderConfig from './configComponents/SliderConfig'

// 定义组件配置组件
const ComponentConfig: React.FC = () => {
  // 从Redux获取选中的组件ID和组件列表
  const selectedId = useSelector((state: RootState) => state.components.selectedId)
  const componentList = useSelector((state: RootState) => state.components.componentList)

  // 获取当前选中的组件
  const selectedComponent = componentList.find(c => c.fe_id === selectedId)

  // 如果没有选中组件，显示空状态
  if (!selectedComponent) {
    return (
      <div className="h-96 flex justify-center items-center">
        <Empty description="请先选择一个组件" />
      </div>
    )
  }

  // 根据组件类型渲染不同的配置组件
  const renderConfigByType = (component: ComponentInfoType) => {
    const { type, fe_id } = component

    switch (type) {
      case ComponentType.QuestionTitle:
        return <TitleConfig componentId={fe_id} />

      case ComponentType.QuestionParagraph:
        return <ParagraphConfig componentId={fe_id} />

      case ComponentType.QuestionShortAnswer:
        return <ShortAnswerConfig componentId={fe_id} />

      case ComponentType.QuestionRadio:
        return <RadioConfig componentId={fe_id} />

      case ComponentType.QuestionCheckbox:
        return <CheckboxConfig componentId={fe_id} />

      case ComponentType.QuestionNPS:
        return <NPSConfig componentId={fe_id} />

      case ComponentType.QuestionRating:
        return <RatingConfig componentId={fe_id} />

      case ComponentType.QuestionDate:
        return <DateConfig componentId={fe_id} />

      case ComponentType.QuestionDropdown:
        return <DropdownConfig componentId={fe_id} />

      case ComponentType.QuestionMatrixRadio:
        return <MatrixRadioConfig componentId={fe_id} />

      case ComponentType.QuestionMatrixCheckbox:
        return <MatrixCheckboxConfig componentId={fe_id} />

      case ComponentType.QuestionSlider:
        return <SliderConfig componentId={fe_id} />

      // 其他组件类型的配置界面
      default:
        return (
          <div className="p-4">
            <p>当前组件类型：{type}</p>
            <p>暂未实现此类型的配置界面</p>
          </div>
        )
    }
  }

  return <div className="p-2 h-full overflow-y-auto">{renderConfigByType(selectedComponent)}</div>
}

export default ComponentConfig
