import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Zoology Trivia </h1>
        <a className="startBtn" href="PlayPage" target="_blank">
          Start
        </a>
        <a className="highScrBtn" href="highScore" target="_blank">
          High Score
          </a>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
