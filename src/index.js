import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import IndexRouter from './App/Routes/Index-Router';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>,
  document.getElementById('root')
);