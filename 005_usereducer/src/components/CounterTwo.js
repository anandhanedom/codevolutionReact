import React, { useReducer } from 'react';

const INITIAL_STATE = { firstCounter: 0 };

const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, firstCounter: state.firstCounter + 1 };

    case ActionTypes.DECREMENT:
      return { ...state, firstCounter: state.firstCounter - 1 };

    case ActionTypes.RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <h3>Count - {count.firstCounter}</h3>
      <div>
        <button onClick={() => dispatch({ type: ActionTypes.INCREMENT })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: ActionTypes.DECREMENT })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: ActionTypes.RESET })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
