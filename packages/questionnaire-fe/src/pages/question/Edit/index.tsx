import { LeftOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import EditorButtonGroup from '@/pages/question/Edit/components/EditorButtonGroup'
import { operationType } from '@/pages/question/Edit/components/type'
import GenerateDialog from '@/pages/question/Edit/components/GenerrateDialog'
import useGenerateDialog from '@/pages/question/Edit/hooks/useGenerateDialog'
import EditCanvas from '@/pages/question/Edit/EditCanvas'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import CustomSpin from '@/components/CustomSpin/CustomSpin'
import LeftPanel from '@/pages/question/Edit/components/LeftPanel'
import RightPanel from '@/pages/question/Edit/components/RightPanel'

const Edit: React.FC = () => {
  const navigate = useNavigate()
  const { loading } = useLoadQuestionData()

  const { isGenerateDialogOpen, openGenerateDialog, closeGenerateDialog } = useGenerateDialog()

  const operationMap = {
    [operationType.generate]: openGenerateDialog,
    [operationType.copy]: () => {
      return
    },
    [operationType.save]: () => {
      return
    },
    [operationType.back]: () => {
      return
    },
    [operationType.forward]: () => {
      return
    }
  }

  const operation = (type: operationType) => {
    operationMap[type]()
  }

  return (
    <div className="w-full h-screen bg-custom-bg-100 flex flex-col">
      <div className="h-16 flex justify-between items-center">
        <div className="size-10 flex justify-center items-center ml-4">
          <Tooltip title="返回">
            <Button shape="circle" icon={<LeftOutlined />} onClick={() => navigate(-1)} />
          </Tooltip>
        </div>
        <div className="flex justify-center items-center gap-4 mx-auto">
          <EditorButtonGroup operation={operation} />
          <GenerateDialog isOpen={isGenerateDialogOpen} close={closeGenerateDialog} />
        </div>
        <div className="size-10 flex justify-center items-center mr-4">
          <Tooltip title="提交问卷">
            <Button shape="circle" icon={<SendOutlined />} />
          </Tooltip>
        </div>
      </div>
      <div className="flex-1 flex justify-between p-2 h-0">
        <div className="w-[350px] bg-custom-bg-300 rounded-r-lg shadow-2xl p-2">
          <LeftPanel />
        </div>
        <div className="flex justify-center items-center flex-1 w-0">
          {loading ? (
            <div className="min-w-[324px] min-h-[663px] w-[50%] h-[80%] rounded-t-[30px] rounded-b-[40px] p-[10px] shadow-2xl bg-custom-bg-100 border-custom-bg-300 border-8 flex justify-center items-center">
              <CustomSpin />
            </div>
          ) : (
            <div className="min-w-[324px] min-h-[663px] w-[50%] h-[80%] rounded-t-[30px] rounded-b-[40px] p-[10px] shadow-2xl bg-custom-bg-100 border-custom-bg-300 border-8">
              <EditCanvas />
            </div>
          )}
        </div>
        <div className="w-[350px] bg-custom-bg-300 rounded-l-lg shadow-2xl p-2">
          <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default Edit
