import React, { lazy, Suspense } from 'react';
import './App.css';

// Components
// import MyComp from './components/myComp';
const MyComp = lazy(() => import('./components/myComp'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Another component</div>
        <Suspense fallback={<div>Loading...</div>}>
          <MyComp />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
