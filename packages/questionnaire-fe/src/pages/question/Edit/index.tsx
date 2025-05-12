import { LeftOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Tooltip, message, Modal } from 'antd'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditorButtonGroup from '@/pages/question/Edit/components/EditorButtonGroup'
import { operationType } from '@/pages/question/Edit/components/type'
import GenerateDialog from '@/pages/question/Edit/components/GenerrateDialog'
import useGenerateDialog from '@/pages/question/Edit/hooks/useGenerateDialog'
import EditCanvas from '@/pages/question/Edit/EditCanvas'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import CustomSpin from '@/components/CustomSpin/CustomSpin'
import LeftPanel from '@/pages/question/Edit/components/LeftPanel'
import RightPanel from '@/pages/question/Edit/components/RightPanel'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import apis from '@/apis'
import { MANAGE_MARKET_PATH } from '@/router/index'

const Edit: React.FC = () => {
  const navigate = useNavigate()
  const { id = '' } = useParams()
  const [submitting, setSubmitting] = useState(false)
  const { loading } = useLoadQuestionData()
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const pageConfig = useSelector((state: RootState) => state.pageConfig)

  const { isGenerateDialogOpen, openGenerateDialog, closeGenerateDialog } = useGenerateDialog()

  // 保存问卷
  const saveQuestionnaire = async () => {
    if (componentList.length === 0) {
      message.warning('请先添加问卷组件')
      return false
    }

    try {
      const params = {
        questionnaire_id: parseInt(id) || 0,
        title: pageConfig.title || '未命名问卷',
        description: pageConfig.description || '',
        components: componentList,
        version: 1
      }

      const res = await apis.editorApi.saveQuestionnaireDetail(params)
      if (res.code === 1) {
        message.success('保存成功')
        return true
      } else {
        message.error(res.msg || '保存失败')
        return false
      }
    } catch (error) {
      console.error('保存问卷失败:', error)
      message.error('保存问卷失败，请稍后重试')
      return false
    }
  }

  const operationMap = {
    [operationType.generate]: openGenerateDialog,
    [operationType.copy]: () => {
      // 复制功能
      if (navigator.clipboard) {
        navigator.clipboard.writeText(JSON.stringify({ components: componentList, pageConfig }))
        message.success('复制成功，可粘贴到其他问卷中')
      }
    },
    [operationType.save]: saveQuestionnaire,
    [operationType.back]: () => {
      // TODO: 实现撤销功能
      message.info('撤销功能开发中')
    },
    [operationType.forward]: () => {
      // TODO: 实现前进功能
      message.info('前进功能开发中')
    }
  }

  const operation = (type: operationType) => {
    operationMap[type]()
  }

  // 提交问卷
  const confirmQuestionnaire = async () => {
    if (submitting) return

    // 检查问卷组件
    if (componentList.length === 0) {
      message.warning('请先添加问卷组件')
      return
    }

    // 先保存问卷
    Modal.confirm({
      title: '提交问卷',
      content: '确定要提交该问卷吗？提交后将发布给用户填写。',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        setSubmitting(true)
        try {
          // 先保存问卷
          const saveSuccess = await saveQuestionnaire()
          if (!saveSuccess) {
            setSubmitting(false)
            return
          }

          // TODO: 调用发布问卷接口
          message.success('问卷提交成功')

          // 跳转到问卷管理页面
          navigate(MANAGE_MARKET_PATH)
        } catch (error) {
          console.error('提交问卷失败:', error)
          message.error('提交问卷失败，请稍后重试')
        } finally {
          setSubmitting(false)
        }
      }
    })
  }

  return (
    <div className="w-full h-screen bg-custom-bg-100 flex flex-col">
      <div className="h-16 flex justify-between items-center">
        <div className="size-10 flex justify-center items-center ml-4">
          <Tooltip title="返回">
            <Button shape="circle" icon={<LeftOutlined />} onClick={() => navigate(-1)} />
          </Tooltip>
        </div>
        <div className="flex justify-center items-center h-full gap-4 bg-custom-bg-300 px-16 rounded-b-full mx-auto">
          <EditorButtonGroup operation={operation} />
          <GenerateDialog isOpen={isGenerateDialogOpen} close={closeGenerateDialog} />
        </div>
        <div className="size-10 flex justify-center items-center mr-4">
          <Tooltip title="提交问卷">
            <Button
              shape="circle"
              icon={<SendOutlined />}
              onClick={confirmQuestionnaire}
              loading={submitting}
            />
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
