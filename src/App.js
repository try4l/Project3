import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginControls from './LoginControls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Project 3 App </h1>
          <LoginControls></LoginControls>
        </header>
        <p className="App-intro">
          Food Truck Locator project
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
