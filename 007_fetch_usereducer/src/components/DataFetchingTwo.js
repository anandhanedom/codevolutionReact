import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const ActionTypes = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAIL: 'FETCH_FAIL',
};

const INITIAL_STATE = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        post: action.payload,
      };

    case ActionTypes.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong!',
        post: {},
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchPost = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      const data = res.data;

      dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: ActionTypes.FETCH_FAIL });
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {state.loading ? <h2>{state.loading}</h2> : <h2>{state.post.title}</h2>}
      {state.error ? <h2>{state.error}</h2> : null}
    </div>
  );
}

export default DataFetchingTwo;
