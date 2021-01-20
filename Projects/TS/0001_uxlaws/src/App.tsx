import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/home/home.pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/about" exact component={About} />
        <Route path="/posts/:id" exact component={Post} /> */}
        <Route
          path="/"
          render={() => (
            <div className="flex justify-center items-center h-screen w-screen text-center bg-black text-white	">
              <h1 className="text-7xl">Error 404!</h1>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
