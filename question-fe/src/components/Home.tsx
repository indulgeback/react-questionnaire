import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigite = useNavigate();
  function clickHandler() {
    navigite('/login');
  }
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={clickHandler}>登录</button>
        <Link to="/register">注册</Link>
      </div>
    </div>
  );
};

export default Home;
