import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Red from './omponents/Red/Red';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const st= createStore(Red);
root.render(
  <Provider store={st}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
