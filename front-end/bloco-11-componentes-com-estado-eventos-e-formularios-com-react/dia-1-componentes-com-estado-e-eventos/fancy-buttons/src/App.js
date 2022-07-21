import './App.css';
import React from 'react';

const log = () => {
  console.log('Oi');
}

const log2 = () => {
  console.log('oii');
}

const log3 = () => {
  console.log('OIEEEE');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={log}>Clique Aqui!</button>
        <button onClick={log2}>E Aqui!</button>
        <button onClick={log3}>Aqui também!</button>
      </div>
    );
  }
}

export default App;
