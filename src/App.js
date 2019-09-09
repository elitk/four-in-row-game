import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Baord2/Board';

function App() {
  return (
    <div className="App">
      {/* <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Griderator</h2>
    </div> */}
      <div className="Game">
        
        <Board/>
      </div>
    </div>
  );
}

export default App;
