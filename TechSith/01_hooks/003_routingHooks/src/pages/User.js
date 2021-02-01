import React from 'react';
import { useParams } from 'react-router';

const User = () => {
  const { firstName, lastName } = useParams();

  return (
    <div>
      User : {firstName} {lastName}
    </div>
  );
};

export default User;
