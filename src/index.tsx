import React from 'react';
import ReactDOM from 'react-dom';
import HighScore from './highScore';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/highScore">
            <HighScore />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Routes>    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
