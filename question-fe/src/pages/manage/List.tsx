import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import QuestionCard from '../../components/QuestionCard';
const List: React.FC = () => {
  useTitle('小木问卷 - 我的问卷');
  const [questionList, setQuestionList] = useState([
    {
      id: 'q1',
      title: '问卷1',
      isPublished: true,
      isStar: false,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      id: 'q2',
      title: '问卷2',
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: true,
      isStar: false,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      id: 'q4',
      title: '问卷4',
      isPublished: false,
      isStar: false,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      id: 'q5',
      title: '问卷5',
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
  ]);
  return (
    <>
      <div>
        <div>
          <h3>我的问卷</h3>
        </div>
        <div>（搜索）</div>
      </div>
      <div>
        {/* 问卷列表 */}
        {questionList.map(item => (
          <QuestionCard
            key={item.id}
            _id={item.id}
            title={item.title}
            isPublished={item.isPublished}
            isStar={item.isStar}
            answerCount={item.answerCount}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default List;
