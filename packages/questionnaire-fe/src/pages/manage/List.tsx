import React, { useEffect, useRef, useState } from 'react'
import { useInViewport, useRequest, useTitle } from 'ahooks'
import QuestionCard from '@/components/Common/QuestionCard'
import styles from './Common.module.scss'
import { Typography, Spin, FloatButton } from 'antd'
import ListSearch from '@/components/Common/listSearch'
import apis from '@/apis'

const { Title } = Typography
// 上拉加载步进长度
const stepSize = 20

const List: React.FC = () => {
  useTitle('小木问卷 - 我的问卷')
  const bottomRef = useRef(null)
  const [currentView, setCurrentView] = useState(1)
  const [questionList, setQuestionList] = useState([])

  // 使用 useRequest 获取数据
  const {
    loading,
    data: res,
    run: getList
  } = useRequest(() => apis.questionApi.getQuestionList(currentView, stepSize), {
    manual: true
  })

  // 当数据加载完成时更新 questionList
  useEffect(() => {
    if (res && res.data.list) {
      setQuestionList(questionList.concat(res.data.list))
    }
  }, [res])

  // 监听 isTouchBottom 变化，触发加载更多
  const [isTouchBottom] = useInViewport(bottomRef)
  useEffect(() => {
    if (isTouchBottom) {
      getList()
      setCurrentView(currentView => currentView + 1)
    }
  }, [isTouchBottom])

  const questionListRef = useRef(null)

  const targetFn = () => {
    return questionListRef.current as any
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.search}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.list} ref={questionListRef}>
        {/* 问卷列表 */}
        {questionList.length > 0 &&
          questionList.map((item: any) => (
            <QuestionCard
              key={item.id}
              _id={item.id}
              title={item.title}
              isPublished={item.is_published}
              isStar={item.is_star}
              answerCount={item.answer_count}
              createdAt={item.create_time}
            />
          ))}
        <FloatButton.BackTop target={targetFn} visibilityHeight={120} />
        <div ref={bottomRef}>
          {loading ? (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Spin fullscreen tip="加载中..." />
            </div>
          ) : (
            <div style={{ height: '60px' }}></div>
          )}
        </div>
      </div>
    </>
  )
}

export default List
