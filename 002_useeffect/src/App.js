import React from 'react';
import './App.css';

//Components
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounterOne />
      <ClassMouse />
      <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
