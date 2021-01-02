import React, { useState } from 'react';

function HookCounterTwo() {
  const initalCount = 0;
  const [count, setCount] = useState(initalCount);

  //Access prevCount and update it
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count : {count}
      <div>
        <button onClick={() => setCount(initalCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
