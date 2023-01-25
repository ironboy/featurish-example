import './css/style.css';
import './utilities/auto-key-lists';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StartComponent from './StartComponent';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StartComponent />
  </React.StrictMode>
);
