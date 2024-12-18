import React, { useState } from 'react'
import { useTitle } from 'ahooks'
import QuestionCard from '@/components/Common/QuestionCard'
import ListSearch from '@/components/Common/ListSearch'
import { Empty, Typography } from 'antd'
import apis from '@/apis'

const { Title } = Typography

const Star: React.FC = () => {
  useTitle('小木问卷 - 星标问卷')
  const [questionList, setQuestionList] = useState([])

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="p-2">
          <Title level={3}>星标问卷</Title>
        </div>
        <div className="p-2">{/* <ListSearch /> */}</div>
      </div>
      <div className="px-2 overflow-y-scroll">
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty className="mt-40" description="暂无星标问卷" />}

        {/* {questionList.length > 0 &&
          questionList.map(q => {
            // ;<QuestionCard />
          })} */}
      </div>
    </>
  )
}

export default Star
