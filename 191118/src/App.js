import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/MyHeader';

class App extends Component {

  render() {

    return (
      <div className="App">
        <MyHeader 
        title={'Questo è un componente react'}
        subtitle={'Che belllooo'}
        classHomeTitle={'main-title'}
        boolean={false}
        bgColor= {'grey'}
        />
      </div>
    );

  };

};

export default App;
