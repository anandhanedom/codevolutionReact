import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = ({ history, location, match }) => {
  console.log(location, match);

  return (
    <div style={{ padding: '10px' }}>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <br />
      <button
        onClick={() => {
          // API call
          // Change to the about page

          history.push('/about');
        }}
      >
        Click to go to about
      </button>
    </div>
  );
};

export default Home;
