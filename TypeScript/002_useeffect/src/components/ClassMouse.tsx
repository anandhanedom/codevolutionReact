import React, { Component } from 'react';

type MouseState = {
  x: number;
  y: number;
};

class ClassMouse extends Component<any, MouseState> {
  state = {
    x: 0,
    y: 0,
  };

  logMousePosition = (e: MouseEvent) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition);
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
