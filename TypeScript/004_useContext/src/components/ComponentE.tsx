import React, { useContext } from 'react';

//Contexts
import { UserContext, ChannelContext } from '../App';

//Components
import ComponentF from './ComponentF';

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <div>
        <h1>Component E</h1>
        {user} - {channel}
      </div>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
