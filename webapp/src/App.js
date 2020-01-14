import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hybrid from './hybrid/core.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <text>这是react渲染的网页</text>
      <button onClick={() => Hybrid.openapp("wen","s")}>
        Test
      </button>
      </header>
    </div>
  );
}

export default App;