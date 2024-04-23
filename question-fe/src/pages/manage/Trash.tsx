import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import styles from './Common.module.scss';
import { Empty, Typography, Table, Tag, Space, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const rowData = [
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
];

const tableColumns = [
  {
    title: '问卷标题',
    dataIndex: 'title',
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    render: (isPublished: boolean) => {
      return isPublished ? (
        <Tag color="cyan" icon={<CheckCircleOutlined />}>
          已发布
        </Tag>
      ) : (
        <Tag>未发布</Tag>
      );
    },
  },
  {
    title: '答卷数量',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
];

const Trash: React.FC = () => {
  useTitle('小木问卷 - 星标问卷');
  const [questionList, setQuestionList] = useState(rowData);
  // 记录选中的id
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const TableElm = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button>恢复</Button>
          <Button>删除</Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => setSelectedIds(selectedRowKeys as string[]),
        }}
      />
    </>
  );

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.search}>（搜索）</div>
      </div>
      <div className={styles.list}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="回收站空空如也" />}
        {questionList.length > 0 && TableElm}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Trash;
