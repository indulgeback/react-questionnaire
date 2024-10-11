import React from 'react'
import { useRequest, useTitle } from 'ahooks'
import QuestionCard from '@/components/Common/QuestionCard'
import styles from './Common.module.scss'
import { Typography, Spin } from 'antd'
import ListSearch from '@/components/Common/listSearch'
import apis from '@/apis'

const { Title } = Typography

const List: React.FC = () => {
  useTitle('小木问卷 - 我的问卷')
  const { loading, data = {} } = useRequest(apis.getQuestionList)
  const { list: questionList = [] } = data
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
      <div className={styles.list}>
        {loading && (
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Spin />
          </div>
        )}
        {/* 问卷列表 */}
        {!loading &&
          questionList.length > 0 &&
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
      </div>
    </>
  )
}

export default List
