import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState<number>(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h2>Interval Hook Counter</h2>
      {count}
    </div>
  );
}

export default IntervalHookCounter;
