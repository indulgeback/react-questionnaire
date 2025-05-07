import React from 'react'
import ComponentWapper from '@/pages/question/Edit/components/ComponentWapper'
import ComponentRender from '@/pages/question/Edit/components/ComponentRender'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import useScrollToSelected from '@/pages/question/Edit/hooks/useScrollToSelected'

const EditCanvas: React.FC = () => {
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const { getRef } = useScrollToSelected()

  return (
    <div className="h-full overflow-y-scroll custom-no-scrollbar">
      {componentList.map(component => (
        <div key={component.fe_id} ref={getRef(component.fe_id)}>
          <ComponentWapper fe_id={component.fe_id}>
            <ComponentRender component={component} />
          </ComponentWapper>
        </div>
      ))}
    </div>
  )
}

export default EditCanvas
