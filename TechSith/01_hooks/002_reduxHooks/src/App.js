import './App.css';

import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter : {counter}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <br />
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
