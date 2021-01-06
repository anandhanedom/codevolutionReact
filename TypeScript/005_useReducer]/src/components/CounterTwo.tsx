import React, { useReducer } from 'react';

const INITIAL_STATE: { firstCounter: number; secondCounter: number } = {
  firstCounter: 0,
  secondCounter: 0,
};

type IAction = {
  type: string;
  payload: number;
};

const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',

  INCREMENT2: 'INCREMENT2',
  DECREMENT2: 'DECREMENT2',

  RESET: 'RESET',
};

const reducer = (state: typeof INITIAL_STATE, action: IAction | any) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, firstCounter: state.firstCounter + action.payload };

    case ActionTypes.DECREMENT:
      return { ...state, firstCounter: state.firstCounter - action.payload };

    case ActionTypes.INCREMENT2:
      return { ...state, secondCounter: state.secondCounter + action.payload };

    case ActionTypes.DECREMENT2:
      return { ...state, secondCounter: state.secondCounter - action.payload };

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
      <h3>Count One : {count.firstCounter}</h3>
      <h3>Count Two : {count.secondCounter}</h3>

      <div>
        <button
          onClick={() => dispatch({ type: ActionTypes.INCREMENT, payload: 1 })}
        >
          Increment 1
        </button>
        <button
          onClick={() => dispatch({ type: ActionTypes.DECREMENT, payload: 1 })}
        >
          Decrement 1
        </button>
        <button
          onClick={() => dispatch({ type: ActionTypes.INCREMENT, payload: 5 })}
        >
          Increment 5
        </button>
        <button
          onClick={() => dispatch({ type: ActionTypes.DECREMENT, payload: 5 })}
        >
          Decrement 5
        </button>
        <button onClick={() => dispatch({ type: ActionTypes.RESET })}>
          Reset
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: ActionTypes.INCREMENT2, payload: 1 })}
        >
          IncrementTwo 1
        </button>
        <button
          onClick={() => dispatch({ type: ActionTypes.DECREMENT2, payload: 1 })}
        >
          DecrementTwo 1
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
