import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React Calculator</h1>
        <Calculator></Calculator>
        <h3>Developed by Amit Patel</h3>
      </div>
    );
  }
}

export default App;
