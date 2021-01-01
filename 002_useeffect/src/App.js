import React from 'react';
import './App.css';

//Components
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounterOne />
      <ClassMouse /> */}

      <MouseContainer />
    </div>
  );
}

export default App;
