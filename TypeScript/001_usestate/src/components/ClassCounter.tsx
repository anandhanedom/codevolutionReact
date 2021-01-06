import React, { Component } from 'react';

interface ICounterState {
  count: number;
}

class ClassCounter extends Component<any, ICounterState> {
  state: ICounterState = { count: 0 };

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <button onClick={this.increment}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
