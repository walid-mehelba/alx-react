import React from 'react';
import logo from './alx_logo.png';
import './App.css';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="ALX logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - ALX</p>
      </div>
    </>
  );
}

export default App;
