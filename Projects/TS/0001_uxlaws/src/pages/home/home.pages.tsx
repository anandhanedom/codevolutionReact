import React from 'react';

// Components
import NavBar from '../../components/navbar/navbar.component';

const Home = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4">Hello world</div>
    </div>
  );
};

export default Home;
