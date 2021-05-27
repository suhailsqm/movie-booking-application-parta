import React from 'react';
import ReactDOM from 'react-dom';
import Header from './common/header/header';
import './index.css';
import Home from "./screens/home/home";



ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


