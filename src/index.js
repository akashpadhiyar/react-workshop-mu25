import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sum from './Sum';
import Counter from './Counter';
import Hookdemo from './Hookdemo';
import CounterHooks from './CounterHooks';
import Sumhooks from './Sumhooks';
import EffDemo from './EffDemo';
import Todo from './Todo';
import Product from './Product';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Product/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
