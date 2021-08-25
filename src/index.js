import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

Amplify.configure(config);