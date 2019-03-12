import React, { Component } from 'react';
import './iteration.css'


class Iteration extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

  render() {
    return (
      <div className="App">
        {this.props.myArray}
      </div>
    
    );
  }
}

export default  Iteration ;