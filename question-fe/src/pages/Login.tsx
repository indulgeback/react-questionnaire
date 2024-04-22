import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => nav(-1)}>返回</button>
    </div>
  );
};

export default Login;
