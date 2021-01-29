import React, { useEffect } from 'react';

let renderCount = 0;

const Child = () => {
  console.log('Child rendering');
  useEffect(() => {
    renderCount++;
  }, []);

  return <div>Render count : {renderCount}</div>;
};

export default Child;
