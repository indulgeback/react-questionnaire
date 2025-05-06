import React from 'react'

const ComponentMarket: React.FC = () => {
  const componentList = [
    {
      id: 1,
      name: '简答题',
      icon: 'text',
      type: 'questionShortAnswer'
    },
    {
      id: 2,
      name: '段落题',
      icon: 'paragraph',
      type: 'questionParagraph'
    },
    {
      id: 3,
      name: '单选题',
      icon: 'radio',
      type: 'questionRadio'
    },
    {
      id: 4,
      name: '多选题',
      icon: 'checkbox',
      type: 'questionCheckbox'
    },
    {
      id: 5,
      name: '下拉选择题',
      icon: 'dropdown',
      type: 'questionDropdown'
    },
    {
      id: 6,
      name: '评分题',
      icon: 'star',
      type: 'questionRating'
    },
    {
      id: 7,
      name: 'NPS评分题',
      icon: 'nps',
      type: 'questionNPS'
    },
    {
      id: 8,
      name: '矩阵单选题',
      icon: 'matrix',
      type: 'questionMatrixRadio'
    },
    {
      id: 9,
      name: '矩阵多选题',
      icon: 'matrixMulti',
      type: 'questionMatrixCheckbox'
    },
    {
      id: 10,
      name: '滑块题',
      icon: 'slider',
      type: 'questionSlider'
    },
    {
      id: 11,
      name: '日期选择题',
      icon: 'date',
      type: 'questionDate'
    },
    {
      id: 12,
      name: '文件上传题',
      icon: 'upload',
      type: 'questionUpload'
    },
    {
      id: 13,
      name: '图片选择题',
      icon: 'image',
      type: 'questionImageChoice'
    },
    {
      id: 14,
      name: '排序题',
      icon: 'sort',
      type: 'questionRank'
    },
    {
      id: 15,
      name: '分段标题',
      icon: 'title',
      type: 'questionTitle'
    }
  ]

  return (
    <div className="flex flex-col space-y-3 py-2">
      {componentList.map(component => (
        <div
          key={component.id}
          className="border-custom-bg-200 border-dashed border-2 rounded-lg p-3 transition-all duration-200 hover:border-custom-bg-400 hover:shadow-md cursor-pointer"
        >
          <div className="flex items-center space-x-3 p-2">
            <div className="w-10 h-10 flex items-center justify-center bg-custom-bg-400 rounded-md text-white">
              {component.icon.slice(0, 1).toUpperCase()}
            </div>
            <div className="font-medium">{component.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ComponentMarket
