# codevolutionReact

React series by Codevolution

### Lifecycle methods

![creation](/img/creation-cycle.png)
![updation](/img/updation-cycle.png)

### Rules of Hooks

1. Don't call hooks inside loops,conditions, or nested function.
2. Only call them from within React functional components.

### useState

1. Lets you add state to functional components.
2. State doesn't have to be an object.
3. Returns an array with 2 elements : state and setter function.
4. Pass a function to the setter function for acccessing PREV state.
5. Use spread operator for arrays and objects.

### useEffect

1. Lets you perform side effects in functional components.
2. Close replacement for componentDidMount,componentDidUpdate,and componentWillUnmount.

### Context

1. Provides a way to pass data through the component tree without having to pass props down manually at every level.

### useReducer

1. A hook that is used for state management.
2. Alternative to useState.
3. useState is built using useReducer.
4. useReducer(reducer,initialState), reducer(currentState,action)

### useReducer with Context

1. useReducer - local state management.
2. Share state between components - Global state management.
3. useReducer + useContext

### useCallback

1. A hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

2. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

### HOOKS

1. useState - state
2. useEffect - side effects
3. useContext - context API
4. useReducer - reducers

### useState vs useReducer

![when](/img/when.png)
