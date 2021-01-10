import React, { PureComponent } from 'react';

//Components
import PureComp from './PureComp ';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Victor',
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ name: 'Victor' });
    }, 2000);
  }

  render() {
    console.log('### Parent Component Render ### ');
    return (
      <div>
        <h1>Parent Component</h1>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
