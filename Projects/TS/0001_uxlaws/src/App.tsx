import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { ReactComponent as Logo } from './img/notfound.svg';

// Pages
import HomePage from './pages/home/home.pages';
import ArticlePage from './pages/article/article.pages';

// Components
import ScrollToTop from './components/scrollToTop/scrollToTop.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect from="/articles/0" to="/articles/1" />
        <Route path="/articles/:id" exact component={ArticlePage} />
        <Route
          path="/"
          render={() => (
            <div className="flex justify-center items-center h-screen w-screen text-center bg-black text-white">
              <h1 className="text-7xl">Error 404!</h1>
              <Logo />
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
