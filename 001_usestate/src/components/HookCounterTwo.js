import React, { useState } from 'react';

function HookCounterTwo() {
  const initalCount = 0;
  const [count, setCount] = useState(initalCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      Count : {count}
      <div>
        <button onClick={() => setCount(initalCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count - 1)}>Increment 5</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
