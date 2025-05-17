import React from 'react';
import logo from './alx_logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="ALX logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form className="App-login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit">OK</button>
        </form>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;


