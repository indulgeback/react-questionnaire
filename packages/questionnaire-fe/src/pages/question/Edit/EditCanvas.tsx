import React from 'react'
import ComponentWapper from '@/pages/question/Edit/components/ComponentWapper'
import ComponentRender from '@/pages/question/Edit/components/ComponentRender'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import useScrollToSelected from '@/pages/question/Edit/hooks/useScrollToSelected'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

const EditCanvas: React.FC = () => {
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const pageConfig = useSelector((state: RootState) => state.pageConfig)
  const { getRef } = useScrollToSelected()

  const canvasStyle = {
    backgroundColor: pageConfig.backgroundColor,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const
  }

  return (
    <div className="h-full overflow-y-scroll custom-no-scrollbar" style={canvasStyle}>
      {/* 问卷头部 */}
      <div className="pt-4 px-4 pb-2">
        <Title
          level={3}
          style={{ color: pageConfig.theme, textAlign: 'center', marginBottom: '8px' }}
        >
          {pageConfig.title}
        </Title>

        <Paragraph style={{ textAlign: 'center', fontSize: '14px', marginBottom: '16px' }}>
          {pageConfig.description}
        </Paragraph>

        {pageConfig.showHeader && pageConfig.headerImage && (
          <div className="text-center flex justify-center mb-4">
            <img
              src={pageConfig.headerImage}
              alt="问卷头图"
              style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
            />
          </div>
        )}
      </div>

      {/* 问卷组件列表 */}
      <div className="flex-1 px-4">
        {componentList.map(component => (
          <div key={component.fe_id} ref={getRef(component.fe_id)}>
            <ComponentWapper fe_id={component.fe_id}>
              <ComponentRender component={component} />
            </ComponentWapper>
          </div>
        ))}
      </div>

      {/* 问卷页脚 */}
      {pageConfig.footerText && (
        <div className="py-3 text-center text-sm text-gray-500">{pageConfig.footerText}</div>
      )}
    </div>
  )
}

export default EditCanvas
