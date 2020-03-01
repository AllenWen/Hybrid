import React from 'react';
import Bridge from './bridge/core.js';
import './App.css';

class Jump extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.excute()}>打开本地页面</button>
          <br></br>
          <button onClick={() => this.props.history.goBack()}>返回</button>
        </header>
      </div>
    )
  }

  excute = () => {
    var msg = {
      name: 'jump',
      params: { url: '/example' }
    }
    Bridge.open(msg, '')
  }

}

export default Jump;