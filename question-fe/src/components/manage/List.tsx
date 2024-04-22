import React, { FC } from 'react';
import { useTitle } from 'ahooks';
const List: FC = () => {
  useTitle('小木问卷 - 我的问卷');

  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default List;
