import React, { useEffect, useRef, useState } from 'react'
import { useInViewport, useTitle } from 'ahooks'
import QuestionCard from '@/components/Common/QuestionCard'
import ListSearch from '@/components/Common/ListSearch'
import { Typography, FloatButton, Empty } from 'antd'
import { useDispatch } from 'react-redux'
import { setScreenSpinning } from '@/store/modules/utilsSlice'
import { QuestionListType } from '@/hooks/types'
import useLoadQuestionList from '@/hooks/useLoadQuestionList'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import apis from '@/apis'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'
import { Question } from '@/apis/modules/types/question'

const { Title } = Typography
// 上拉加载步进长度
const stepSize = 20

const Market: React.FC = () => {
  useTitle('小木问卷 - 我的问卷')
  const bottomRef = useRef(null)
  const [currentView, setCurrentView] = useState(1)
  const [questionList, setQuestionList] = useState<Question[]>([])
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(10)
  const dispatch = useDispatch()
  const { isRequestSuccess } = useRequestSuccessChecker()

  const searchChange = (search: string) => {
    setSearch(search)
    setCurrentView(1)
  }

  const { loading, res } = useLoadQuestionList({
    currentView,
    stepSize,
    search,
    type: QuestionListType.all
  })

  const { userInfo } = useSelector((state: RootState) => state.profile)

  const editable = (item: any) => item.author_id === userInfo.userId

  // 当数据加载完成时更新 questionList
  useEffect(() => {
    console.log('res', res)
    if (res && res?.data?.list) {
      if (currentView === 1) {
        setQuestionList(res.data.list)
      } else {
        setQuestionList(questionList.concat(res.data.list))
      }
      setTotal(res?.data?.count || 0)
    }
  }, [res])

  useEffect(() => {
    dispatch(setScreenSpinning(loading))
  }, [loading])

  // 监听 isTouchBottom 变化，触发加载更多
  const [isTouchBottom] = useInViewport(bottomRef)
  useEffect(() => {
    if (isTouchBottom && questionList.length && questionList.length < total) {
      setCurrentView(currentView => currentView + 1)
    }
  }, [isTouchBottom])

  const getQuestionItem = async (id: number) => {
    const res = await apis.questionApi.getQuestionById(id)
    if (isRequestSuccess(res)) {
      setQuestionList(
        questionList.map(item => {
          if (item.id === id) {
            return res.data
          }
          return item
        })
      )
    }
  }

  const deleteQuestion = (id: number) => {
    setQuestionList(questionList.filter(item => item.id !== id))
  }

  const questionListRef = useRef(null)

  const targetFn = () => {
    return questionListRef.current as any
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="p-2">
          <Title level={3}>我的问卷</Title>
        </div>
        <div className="p-2">
          <ListSearch searchChange={searchChange} />
        </div>
      </div>
      <div className="px-2 overflow-y-scroll" ref={questionListRef}>
        {/* 问卷列表 */}
        {questionList.length > 0 ? (
          questionList.map((item: any) => (
            <QuestionCard
              key={item.id}
              id={item.id}
              title={item.title}
              isPublished={item.is_published}
              isFavorated={item.is_favorated}
              author={item.author}
              editable={editable(item)}
              answerCount={item.answer_count}
              createdAt={item.create_time}
              updatedAt={item.update_time}
              onRefresh={getQuestionItem}
              onDelete={() => deleteQuestion(item.id)}
            />
          ))
        ) : (
          <Empty className="mt-40" description="暂无问卷" />
        )}
        <FloatButton.BackTop target={targetFn} visibilityHeight={120} />
        <div ref={bottomRef} className="h-14 text-sm text-center text-custom-text-200">
          {questionList.length >= total && total ? '🎉 duang! 到底喽! 🎉' : ''}
        </div>
      </div>
    </div>
  )
}

export default Market
