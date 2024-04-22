import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../router';

const NotFound: React.FC = () => {
  const nav = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="糟糕，找不到页面啦！"
      extra={
        <Button type="primary" onClick={() => nav(HOME_PATH)}>
          返回首页
        </Button>
      }
    />
  );
};

export default NotFound;
