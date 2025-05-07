import React from 'react'
import { useDispatch } from 'react-redux'
import {
  FormOutlined,
  FileTextOutlined,
  CheckOutlined,
  CheckSquareOutlined,
  DownOutlined,
  StarOutlined,
  NumberOutlined,
  TableOutlined,
  AppstoreOutlined,
  SlidersOutlined,
  CalendarOutlined,
  UploadOutlined,
  PictureOutlined,
  OrderedListOutlined,
  FontSizeOutlined
} from '@ant-design/icons'
import { addComponent } from '@/store/modules/componentsSlice'
import { getComponentDefaultProps } from '@/utils/getComponentDefaultProps'
import { message } from 'antd'

const ComponentMarket: React.FC = () => {
  const dispatch = useDispatch()

  // 处理组件点击，添加到编辑区域
  const handleComponentClick = (type: string) => {
    const componentInfo = getComponentDefaultProps(type)
    if (componentInfo) {
      dispatch(
        addComponent({
          type,
          title: componentInfo.title,
          props: componentInfo.props
        })
      )
      message.success('添加组件成功')
    }
  }

  const componentList = [
    {
      id: 1,
      name: '简答题',
      icon: <FormOutlined />,
      type: 'questionShortAnswer'
    },
    {
      id: 2,
      name: '段落题',
      icon: <FileTextOutlined />,
      type: 'questionParagraph'
    },
    {
      id: 3,
      name: '单选题',
      icon: <CheckOutlined />,
      type: 'questionRadio'
    },
    {
      id: 4,
      name: '多选题',
      icon: <CheckSquareOutlined />,
      type: 'questionCheckbox'
    },
    {
      id: 5,
      name: '下拉选择题',
      icon: <DownOutlined />,
      type: 'questionDropdown'
    },
    {
      id: 6,
      name: '评分题',
      icon: <StarOutlined />,
      type: 'questionRating'
    },
    {
      id: 7,
      name: 'NPS评分题',
      icon: <NumberOutlined />,
      type: 'questionNPS'
    },
    {
      id: 8,
      name: '矩阵单选题',
      icon: <TableOutlined />,
      type: 'questionMatrixRadio'
    },
    {
      id: 9,
      name: '矩阵多选题',
      icon: <AppstoreOutlined />,
      type: 'questionMatrixCheckbox'
    },
    {
      id: 10,
      name: '滑块题',
      icon: <SlidersOutlined />,
      type: 'questionSlider'
    },
    {
      id: 11,
      name: '日期选择题',
      icon: <CalendarOutlined />,
      type: 'questionDate'
    },
    {
      id: 12,
      name: '文件上传题',
      icon: <UploadOutlined />,
      type: 'questionUpload'
    },
    {
      id: 13,
      name: '图片选择题',
      icon: <PictureOutlined />,
      type: 'questionImageChoice'
    },
    {
      id: 14,
      name: '排序题',
      icon: <OrderedListOutlined />,
      type: 'questionRank'
    },
    {
      id: 15,
      name: '分段标题',
      icon: <FontSizeOutlined />,
      type: 'questionTitle'
    }
  ]

  return (
    <div className="flex flex-col space-y-3 py-2">
      {componentList.map(component => (
        <div
          key={component.id}
          className="border-custom-bg-200 border-dashed border-2 rounded-lg p-3 transition-all duration-200 hover:border-custom-bg-400 hover:shadow-md cursor-pointer"
          onClick={() => handleComponentClick(component.type)}
        >
          <div className="flex items-center space-x-3 p-2">
            <div className="w-10 h-10 text-xl flex items-center justify-center bg-custom-bg-400 rounded-md text-white">
              {component.icon}
            </div>
            <div className="font-medium">{component.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ComponentMarket
