import React from 'react';
import './App.css';
import Bridge from './bridge/core.js.js';

type Props = {
  user: String,
};

class App extends React.PureComponent<Props, *> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <text>这是react渲染的网页<br />{this.props.user}</text>
          <button onClick={() => test()}>
            Test
      </button>
        </header>
      </div>
    )
  }
}

function test() {
  var params = {}
  params.name = '某页面'
  var msg = {}
  msg.category = 'jump'
  msg.params = params
  Bridge.open(msg, callback)
}

function callback(result) {

}

export default App;