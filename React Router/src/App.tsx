import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';

// SETUP
// CREATE ROUTES
// CHANGE ROUTES
// ROUTE PARAMS

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/posts/:id" exact component={Post} />
        <Route path="/" render={() => <h1>Error 404!</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
