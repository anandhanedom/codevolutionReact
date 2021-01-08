import React from 'react';

const Title: React.FC = () => {
  console.log('Rendering Title');
  return <h2>useCallback Hook</h2>;
};

export default React.memo(Title);
