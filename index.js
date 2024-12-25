import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ParticlesBg from 'particles-bg'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Hello name={this.state.name} />
        <p>
          Awesome particle background animation :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
