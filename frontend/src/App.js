import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Payment</h2>
        </div>
        <p className="App-intro">
          <Checkout
            name={'Pay amount'}
            description={'Subscription amount'}
            amount={200}
          />
        </p>
      </div>
    );
  }
}

export default App;
