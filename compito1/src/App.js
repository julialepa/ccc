import React, { Component } from 'react';
import './App.css';
import Iteration from './iteration/iteration';

const myArray = [
  {
    ID: 1,
    Nome: "Mario",
    Cognome: "Rossi",
    PartitoPolitico: "destra",
  },
  {
    ID: 2,
    Nome: "Marco",
    Cognome: "Retti",
    PartitoPolitico: "destra",
  },
  {
    ID: 3,
    Nome: "Mirko",
    Cognome: "Belli",
    PartitoPolitico: "sinistra",
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Iteration
          elettore={myArray}

        />
      </div>
    );
  }
}

export default App;
