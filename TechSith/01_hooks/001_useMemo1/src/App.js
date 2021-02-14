import "./App.css";
import { useState, useMemo } from "react";
import Child from "./components/child";

function App() {
  // number state
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  const memoChild = useMemo(() => {
    return <Child />;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Memo</h2>
        <h2>Number: {number}</h2>
        <button onClick={increment}>Increment</button>
        {/* <Child /> */}
        {memoChild}
      </header>
    </div>
  );
}

export default App;
