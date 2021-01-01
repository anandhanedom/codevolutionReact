import React, { useState, useEffect } from 'react';

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //componentDidMount + componentDidUpdate = useEffect

  useEffect(() => {
    console.log('Updating document title');

    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
