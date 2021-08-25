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
    <h2>Heojun & Yerim</h2> 
    <header className="App-header">
        {testStr}
    </header>
</div>
  );
}

export default App;
