import React, { useReducer } from 'react';

const INITIAL_STATE = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return INITIAL_STATE;

    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [countTwo, dispatch2] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <div>
        <h3>Count 1 : {count}</h3>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>

      <div>
        <h3>Count 2 : {countTwo}</h3>
        <button onClick={() => dispatch2('increment')}>Increment</button>
        <button onClick={() => dispatch2('decrement')}>Decrement</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
