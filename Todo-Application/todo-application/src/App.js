//importing the essential packages.
import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/";
import TaskBar from "./components/taskbar/";
import TaskList from "./components/tasklist/";

class App extends Component {
  render() {
    return (
      <center>
      <div className="App">
        <div className="todo-app">
          <Header />
          <TaskBar />
          <TaskList />
        </div>
      </div>
      </center>
    );
  }
}

export default App;
