import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [
        {
          id: 0,
          task: 'contenuto task',
          done: true
        }
      ]
    }
    this.addTask = this.addTask.bind(this);
  }


  addTask(){
    const toDoList = this.state.toDoList;

    toDoList.push({
      id: 0,
      task: ';*',
      done: false
    })
    this.setState({
      toDoList : toDoList
    })
  }

  render() {
    const toDoList = this.state.toDoList;

    return (
      <div className="App">
        <h1>To Do List</h1>
        <div className="to-do-list">
          <span>Numero: {toDoList[0].id} </span>
          <span>Task: {toDoList[0].task} </span>
          <span>Fatto: {toDoList[0].done ? 'done' : 'not done'} </span>
          <br />
          <input type="text"></input>
          <button onClick ={this.addTask}>Add</button>
          <ul>
           {toDoList.map((i) => {
             return (<li>{i.id} {i.task} {i.done ? 'done' : 'not done'}</li>)
           })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
