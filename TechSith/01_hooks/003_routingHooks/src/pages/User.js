import React from 'react';
import { useParams } from 'react-router';

const User = () => {
  const { name } = useParams();

  return <div>User : {name}</div>;
};

export default User;
