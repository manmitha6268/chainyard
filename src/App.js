import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlockList from './BlockList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BlockList />

    </div>
  );
}

export default App;



