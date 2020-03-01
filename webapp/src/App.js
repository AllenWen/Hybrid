import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.props.history.push('jump')}>跳转类（Jump）</button>
          <br></br>
          <button onClick={() => this.props.history.push('func')}>功能类（Func）</button>
          <br></br>
          <button onClick={() => this.props.history.push('event')}>事件类（Event）</button>
          <br></br>
          <button onClick={() => this.props.history.push('offline')}>离线资源</button>
        </header>
      </div>
    )
  }

}

export default App;