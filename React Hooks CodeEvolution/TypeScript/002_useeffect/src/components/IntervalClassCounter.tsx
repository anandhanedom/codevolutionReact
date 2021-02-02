import React, { Component } from 'react';

type MyState = {
  count: number;
};

class IntervalClassCounter extends Component<any, MyState> {
  state = {
    count: 0,
  };

  interval: number | undefined;

  tick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Interval Class Counter</h2>
        {this.state.count}
      </div>
    );
  }
}

export default IntervalClassCounter;
