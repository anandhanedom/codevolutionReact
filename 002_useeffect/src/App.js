import React from 'react';
import './App.css';

//Components
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
