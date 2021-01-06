import React, { useReducer } from 'react';

type State = number;
type Action = string;

const INITIAL_STATE: State = 0;

const reducer = (state: typeof INITIAL_STATE, action: Action) => {
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

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <h3>Count : {count}</h3>
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
