import React, { useEffect, useState, useRef } from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  // TIP : define interval inside useEffect
  // No renders even if the data it stores changes.
  // Also remembers the stored data even after the component re - renders.

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h3>Hook timer : {timer}</h3>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default HookTimer;
