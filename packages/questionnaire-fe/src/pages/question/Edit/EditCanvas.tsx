import React from 'react'
import ComponentWapper from '@/pages/question/Edit/components/ComponentWapper'
import ComponentRender from '@/pages/question/Edit/components/ComponentRender'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
const EditCanvas: React.FC = () => {
  const componentList = useSelector((state: RootState) => state.components.componentList)
  return (
    <div className="h-full overflow-y-scroll custom-no-scrollbar">
      {componentList.map(component => (
        <ComponentWapper key={component.fe_id} fe_id={component.fe_id}>
          <ComponentRender component={component} />
        </ComponentWapper>
      ))}
    </div>
  )
}

export default EditCanvas
