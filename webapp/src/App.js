import React from 'react';
import './App.css';
import Hybrid from './hybrid/core.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <text>这是react渲染的网页<br/>请点击按钮</text>
      <button onClick={() => Hybrid.open('wen','s')}>
        Test
      </button>
      </header>
    </div>
  );
}

export default App;