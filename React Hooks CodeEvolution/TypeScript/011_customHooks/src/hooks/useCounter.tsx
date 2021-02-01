import { useState } from 'react';

type Return = [
  count: number,
  increment: () => void,
  decrement: () => void,
  reset: () => void
];

function useCounter(initialCount = 0, value: number): Return {
  const [count, setCount] = useState(initialCount);

  const increment: () => void = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement: () => void = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset: () => void = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
