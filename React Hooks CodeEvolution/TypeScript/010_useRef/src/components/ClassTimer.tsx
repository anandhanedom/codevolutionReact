import React, { Component } from 'react';

interface IState {
  timer: number;
}

class ClassTimer extends Component<any, IState> {
  interval: number | undefined;

  state: IState = {
    timer: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>{this.state.timer}</h2>
        <button onClick={() => clearInterval(this.interval)}>
          Clear Timer
        </button>
      </div>
    );
  }
}

export default ClassTimer;
