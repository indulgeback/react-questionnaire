import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#24bab0',
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};

export default App;
