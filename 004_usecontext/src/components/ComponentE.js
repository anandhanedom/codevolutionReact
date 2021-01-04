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
      {user} - {channel}
    </div>
  );
}

export default ComponentE;
