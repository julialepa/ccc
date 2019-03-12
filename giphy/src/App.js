import React, { Component } from 'react';
import './App.css';
var giphy = require('giphy-api')('dc6zaTOxFJmzC');

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {giphy.random('superman').then(function (res) {
          }) }
      </div>
    );
  }
}

export default App;
