import React, { useContext } from 'react';

import { UserContext, ChannelContext } from '../App';

function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h1>Component F</h1>
      <h5>
        User context value <u>{user}</u>, channel context value
        <u> {channel}</u>
      </h5>
    </div>
  );
}

export default ComponentF;
