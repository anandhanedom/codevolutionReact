import React from 'react';

import { useLocation, useHistory } from 'react-router';

const About = () => {
  const location = useLocation();
  const history = useHistory();

  console.log(location);

  function goBackHandler() {
    history.goBack();
  }

  return (
    <>
      <div>About</div>
      <div>Location = {location.pathname}</div>
      <div>From = {location.state.from}</div>
      <button onClick={goBackHandler}>Go back</button>
    </>
  );
};

export default About;
