import React from 'react';
import './App.css';

//Components
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext<string | null>(null);
export const ChannelContext = React.createContext<string | null>(null);

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Victor">
        <ChannelContext.Provider value="Codevolution">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
