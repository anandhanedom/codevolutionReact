import React from 'react';
import './App.css';

// Pages
import HomePage from './pages/home/home.pages';

function App(): JSX.Element {
  return (
    <div className="App font-body">
      <HomePage />
    </div>
  );
}

export default App;
