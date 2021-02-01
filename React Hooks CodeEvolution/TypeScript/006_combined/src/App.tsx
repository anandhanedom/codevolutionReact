import React, { useReducer, createContext } from 'react';
import './App.css';

//Components
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

const INITIAL_STATE: number = 0;

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

const reducer = (state: typeof INITIAL_STATE, action: string) => {
  switch (action) {
    case ActionTypes.INCREMENT:
      return state + 1;

    case ActionTypes.DECREMENT:
      return state - 1;

    case ActionTypes.RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export const CountContext = createContext<null | IContext>(null);

interface IContext {
  countState: number;
  countDispatch: React.Dispatch<string>;
}

function App() {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className="App">
      <h2>Count : {count}</h2>

      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
