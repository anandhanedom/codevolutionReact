import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    //DEFINE FUNCTIONS UNDER USEEFFECT INSIDE IT!!! - tip

    // const doSomething = () => {
    //   console.log(someProp);
    // };

    // doSomething();

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;
