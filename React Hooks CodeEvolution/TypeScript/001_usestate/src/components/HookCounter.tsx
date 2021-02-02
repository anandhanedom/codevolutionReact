import React, { useState } from 'react';

//Interface

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Hook Counter</h1>
      <button onClick={incrementCount}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
