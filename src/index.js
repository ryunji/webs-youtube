import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ./ 은 root를 의미하고 src가 루트 이다.
import './assets/scss/style.scss'

// index.js가 바로 index.html의 root에 넣어주는 역할을 하는 곳.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />             {/* 여기는  App.js의 내용을 불러오는 부분이다. */}
  </React.StrictMode>
);
