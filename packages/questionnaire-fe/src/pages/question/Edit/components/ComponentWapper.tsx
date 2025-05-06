import React from 'react'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { setSelectedId } from '@/store/modules/componentsSlice'

const ComponentWapper: React.FC<{ children: React.ReactNode; fe_id: string }> = ({
  children,
  fe_id
}) => {
  const selectedId = useSelector((state: RootState) => state.components.selectedId)
  const dispatch = useDispatch()

  return (
    <div
      className={clsx(
        'p-4 bg-custom-bg-300 rounded-lg mb-2 border-2 border-transparent transition-all duration-200 hover:border-custom-bg-200 cursor-move',
        selectedId === fe_id && '!border-custom-bg-400'
      )}
      onClick={() => dispatch(setSelectedId(fe_id))}
    >
      {children}
    </div>
  )
}

export default ComponentWapper
