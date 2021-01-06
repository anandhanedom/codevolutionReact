import React, { Component } from 'react';

interface ICounter {
  count: number;
  name: string;
}

class ClassCounterOne extends Component<any, ICounter> {
  // optional second annotation for better type inference

  state: ICounter = {
    count: 0,
    name: '',
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps: any, prevState: ICounter) {
    if (prevState.count !== this.state.count) {
      console.log('Updating document title');
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <h2>Class Counter One</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
