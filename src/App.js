import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

/*
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ testStr, setTestStr ] = useState('');

  // 변수 초기화
  function callback(str) {    
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  
  useEffect(
      () => {
        axios({
            url: '/user',
            method: 'GET'
        }).then((res) => {
            callback(res.data);
        })
      }, []
  );

  return (
    <div className="App">
      <header className="App-header">
          {testStr}
      </header>
  </div>
  );
}

export default App;
*/