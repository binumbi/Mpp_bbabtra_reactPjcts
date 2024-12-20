import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Countstore from './Components/CountReducer/CountReducer';
import { Container } from 'react-bootstrap';
import {Provider} from 'react-redux';
import {CountProvider} from './Components/CountProvider/CountProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountProvider>
        <App />
  </CountProvider>
          
  
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
