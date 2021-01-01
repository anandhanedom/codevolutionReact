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
