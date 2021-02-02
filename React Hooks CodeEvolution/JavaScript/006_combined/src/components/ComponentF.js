import React, { useContext } from 'react';

import { CountContext, ActionTypes } from '../App';

function ComponentF() {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component F : {countContext.countState}
      <div>
        <button
          onClick={() => countContext.countDispatch(ActionTypes.INCREMENT)}
        >
          Increment
        </button>
        <button
          onClick={() => countContext.countDispatch(ActionTypes.DECREMENT)}
        >
          Decrement
        </button>
        <button onClick={() => countContext.countDispatch(ActionTypes.RESET)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ComponentF;
