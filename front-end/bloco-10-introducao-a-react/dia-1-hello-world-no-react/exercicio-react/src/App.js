import './App.css';
import { Component } from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends Component {
  render() {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    );
  }
}

export default App;
