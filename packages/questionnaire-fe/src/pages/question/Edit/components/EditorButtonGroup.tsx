import React from 'react'
import EditorButton from '@/components/Editor/IconButton'
import { operationType } from '@/pages/question/Edit/components/type'

interface EditorButtonGroupProps {
  operation: (type: operationType) => void
}

const EditorButtonGroup = ({ operation }: EditorButtonGroupProps) => {
  return (
    <>
      <EditorButton
        icon="copy"
        activeIcon="copy"
        title="复制"
        activeColor="#00E676"
        onClick={() => operation(operationType.copy)}
      />
      <EditorButton
        icon="save"
        activeIcon="save"
        title="保存"
        activeColor="#2979FF"
        onClick={() => operation(operationType.save)}
      />
      <EditorButton
        icon="back"
        activeIcon="back"
        title="撤销"
        activeColor="#FF3D00"
        onClick={() => operation(operationType.back)}
      />
      <EditorButton
        icon="forward"
        activeIcon="forward"
        title="前进"
        activeColor="#FF3D00"
        onClick={() => operation(operationType.forward)}
      />
      <EditorButton
        icon="QianWen"
        activeIcon="QianWen"
        title="AI生成"
        activeColor="#536DFE"
        onClick={() => operation(operationType.generate)}
      />
    </>
  )
}

export default EditorButtonGroup
