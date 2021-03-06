import React, { useContext } from 'react';

import { CountContext, ActionTypes } from '../App';

function ComponentD() {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component D : {countContext.countState}
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

export default ComponentD;
