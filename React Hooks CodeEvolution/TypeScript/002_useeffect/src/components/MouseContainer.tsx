import React, { useState } from 'react';

//Components
import HookMouse from './HookMouse';

function MouseContainer() {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setDisplay((prevValue) => !prevValue)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
