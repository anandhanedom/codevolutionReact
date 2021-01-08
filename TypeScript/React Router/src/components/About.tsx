import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h1>About</h1>

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Home;
