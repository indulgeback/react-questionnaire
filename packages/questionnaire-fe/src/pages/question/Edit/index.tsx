import { LeftOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Tooltip, Modal, App } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import EditorButtonGroup from '@/pages/question/Edit/components/EditorButtonGroup'
import { operationType } from '@/pages/question/Edit/components/type'
import GenerateDialog from '@/pages/question/Edit/components/GenerrateDialog'
import useGenerateDialog from '@/pages/question/Edit/hooks/useGenerateDialog'
import EditCanvas from '@/pages/question/Edit/EditCanvas'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import CustomSpin from '@/components/CustomSpin/CustomSpin'
import LeftPanel from '@/pages/question/Edit/components/LeftPanel'
import RightPanel from '@/pages/question/Edit/components/RightPanel'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import apis from '@/apis'
import { QUESTION_EDIT_PATH, MANAGE_MARKET_PATH } from '@/router/index'
import {
  setVersion,
  addComponent,
  resetComponents,
  undo,
  redo
} from '@/store/modules/componentsSlice'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import { getUserInfoFromStorage } from '@/utils'

const Edit: React.FC = () => {
  const navigate = useNavigate()
  const { id = '' } = useParams()
  const [searchParams] = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const { loading } = useLoadQuestionData()
  const componentList = useSelector((state: RootState) => state.components.componentList)
  const pageConfig = useSelector((state: RootState) => state.pageConfig)
  const version = useSelector((state: RootState) => state.components.version)
  const historyIndex = useSelector((state: RootState) => state.components.historyIndex)
  const historyLength = useSelector((state: RootState) => state.components.history.length)
  const dispatch = useDispatch()
  const { isGenerateDialogOpen, openGenerateDialog, closeGenerateDialog } = useGenerateDialog()
  const { isRequestSuccess } = useRequestSuccessChecker()
  const { message } = App.useApp()

  // 处理复制问卷
  useEffect(() => {
    const copyFrom = searchParams.get('copyFrom')
    if (copyFrom) {
      const copyQuestionnaire = async () => {
        try {
          // 获取原问卷详情
          const detailRes = await apis.editorApi.getQuestionnaireDetail(copyFrom)
          if (!isRequestSuccess(detailRes)) {
            message.error('获取原问卷详情失败')
            return
          }

          const questionnaireDetail = detailRes.data

          // 重置组件状态
          dispatch(
            resetComponents({
              selectedId: questionnaireDetail.selectedId,
              componentList: questionnaireDetail.components,
              version: 1
            })
          )

          // 保存到新问卷
          const userInfo = getUserInfoFromStorage()
          const saveRes = await apis.editorApi.saveQuestionnaireDetail({
            questionnaire_id: parseInt(id) || 0,
            title: `${questionnaireDetail.title} (复制)`,
            description: questionnaireDetail.description,
            footer_text: questionnaireDetail.footer_text || '',
            components: questionnaireDetail.components,
            version: 1,
            creator: userInfo.nickname || '未知'
          })

          if (!isRequestSuccess(saveRes)) {
            message.error('保存问卷详情失败')
            return
          }

          message.success('复制成功')
          // 移除 URL 中的 copyFrom 参数
          navigate(`${QUESTION_EDIT_PATH}/${id}`, { replace: true })
        } catch (error) {
          console.error('复制问卷失败:', error)
          message.error('复制问卷失败，请稍后重试')
        }
      }

      copyQuestionnaire()
    }
  }, [id, searchParams])

  // 保存问卷
  const saveQuestionnaire = async () => {
    if (componentList.length === 0) {
      message.warning('请先添加问卷组件')
      return false
    }

    try {
      const userInfo = getUserInfoFromStorage()
      const creator = userInfo.nickname || '未知'
      const params = {
        questionnaire_id: parseInt(id) || 0,
        title: pageConfig.title || '未命名问卷',
        description: pageConfig.description || '',
        footer_text: pageConfig.footerText || '',
        components: componentList,
        version,
        creator
      }

      const res = await apis.editorApi.saveQuestionnaireDetail(params)
      if (isRequestSuccess(res)) {
        message.success('保存成功')
        dispatch(setVersion(version + 1))
        await apis.questionApi.updateQuestion(parseInt(id) || 0, {
          title: pageConfig.title || '未命名问卷',
          description: pageConfig.description || ''
        })
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
    [operationType.save]: saveQuestionnaire,
    [operationType.back]: () => {
      if (historyIndex > 0) {
        dispatch(undo())
        message.success('撤销成功')
      } else {
        message.info('没有可撤销的操作')
      }
    },
    [operationType.forward]: () => {
      if (historyIndex < historyLength - 1) {
        dispatch(redo())
        message.success('前进成功')
      } else {
        message.info('没有可前进的操作')
      }
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

          const publicSucess = await apis.questionApi.publishQuestion(parseInt(id))

          if (!publicSucess) {
            setSubmitting(false)
            return
          }

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

  // 处理添加生成的题目
  const handleAddQuestions = (questions: any[]) => {
    questions.forEach(question => {
      dispatch(
        addComponent({
          type: question.type,
          title: question.title,
          props: {
            ...question.props,
            title: question.title
          }
        })
      )
    })
    message.success('添加题目成功')
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
          <GenerateDialog
            isOpen={isGenerateDialogOpen}
            close={closeGenerateDialog}
            addQuestions={handleAddQuestions}
          />
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
