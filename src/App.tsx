import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstan from './api/axiosInstan';
import userApi from './api/userApi';

function App() {

  useEffect(() => {
    (async () => {
      const res = await userApi.updateUserInfo(1,
        {email: "adjj",
        telephone:  "adjj",
        website:    "adjj",}
        )
      console.log(res);
    })()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
