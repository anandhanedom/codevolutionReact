import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h1>About</h1>

      <Link to="/posts/1">Go to Post 1</Link>
      <br />
      <Link to="/posts/2">Go to Post 2</Link>
      <br />
      <Link to="/posts/3">Go to Post 3</Link>
      <br />

      <br />

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Home;
