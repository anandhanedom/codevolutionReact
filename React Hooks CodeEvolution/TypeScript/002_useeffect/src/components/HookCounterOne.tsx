import React, { useState, useEffect } from 'react';

function HookCounterOne() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  //componentDidMount + componentDidUpdate = useEffect

  //Component didUpdate + didMount equivalent
  useEffect(() => {
    console.log('Updating document title');

    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h2>Hook Counter One</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
