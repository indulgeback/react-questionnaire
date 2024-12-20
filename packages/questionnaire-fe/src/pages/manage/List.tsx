import React, { useEffect, useRef, useState } from 'react'
import { useInViewport, useTitle } from 'ahooks'
import QuestionCard from '@/components/Common/QuestionCard'
import ListSearch from '@/components/Common/ListSearch'
import { Typography, FloatButton, Empty } from 'antd'
import { useDispatch } from 'react-redux'
import { setScreenSpinning } from '@/store/modules/utilsSlice'
import { QuestionListType } from '@/hooks/types'
import useLoadQuestionList from '@/hooks/useLoadQuestionList'

const { Title } = Typography
// 上拉加载步进长度
const stepSize = 20

const List: React.FC = () => {
  useTitle('小木问卷 - 我的问卷')
  const bottomRef = useRef(null)
  const [currentView, setCurrentView] = useState(1)
  const [questionList, setQuestionList] = useState([])
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(10)
  const dispatch = useDispatch()
  const [forceRefresh, setForceRefresh] = useState(false)

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

  // 当数据加载完成时更新 questionList
  useEffect(() => {
    if (res && res?.data?.list) {
      if (currentView === 1) {
        setQuestionList(res.data.list)
      } else {
        setQuestionList(questionList.concat(res.data.list))
      }
      setTotal(res?.data?.count || 0)
    }
  }, [res, forceRefresh])

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

  const questionListRef = useRef(null)

  const targetFn = () => {
    return questionListRef.current as any
  }

  const refresh = () => {
    setCurrentView(1)
    setForceRefresh(prev => !prev)
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
              isStar={item.is_star}
              answerCount={item.answer_count}
              createdAt={item.create_time}
              refresh={refresh}
            />
          ))
        ) : (
          <Empty className="mt-40" description="暂无问卷" />
        )}
        <FloatButton.BackTop target={targetFn} visibilityHeight={120} />
        <div ref={bottomRef} className="h-14 text-sm text-center text-custom-text-100">
          {questionList.length >= total ? '🎉duang! 到底喽!🎉' : ''}
        </div>
      </div>
    </div>
  )
}

export default List
