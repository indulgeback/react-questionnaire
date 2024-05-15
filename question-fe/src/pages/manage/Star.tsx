import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import QuestionCard from '../../components/QuestionCard';
import styles from './Common.module.scss';
import ListSearch from '../../components/listSearch';
import { Empty, Typography } from 'antd';

const { Title } = Typography;

const Star: React.FC = () => {
  useTitle('小木问卷 - 星标问卷');
  const [questionList, setQuestionList] = useState([
    {
      _id: 'q1',
      title: '问卷1',
      isPublished: true,
      isStar: false,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      _id: 'q2',
      title: '问卷2',
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      _id: 'q3',
      title: '问卷3',
      isPublished: true,
      isStar: false,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      _id: 'q4',
      title: '问卷4',
      isPublished: false,
      isStar: false,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
    {
      _id: 'q5',
      title: '问卷5',
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createdAt: 'dawdaw',
    },
  ]);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.search}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.list}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="暂无星标问卷" />}

        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q;
            return q.isStar && <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;
