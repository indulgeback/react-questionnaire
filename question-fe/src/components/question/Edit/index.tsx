import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Edit: FC = () => {
  const { id = '' } = useParams();
  return (
    <div>
      <h1>Edit{id}</h1>
    </div>
  );
};

export default Edit;
