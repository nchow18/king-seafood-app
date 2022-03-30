import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets//fonts/louis_george_caf/Louis George Cafe.ttf';
import './assets/fonts/Florence-Regular.ttf';
import './assets/fonts/lemon_milk/LEMONMILK-Light.otf'
import './assets/fonts/Raleway/static/Raleway-Regular.ttf';
import './assets/fonts/Geomanist/Desktop/Geomanist-Regular.otf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
