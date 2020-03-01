import React from 'react';
import Bridge from './bridge/core.js';
import './App.css';

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = { btnText: '' };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={() => this.excute()}>更改标题</button>
                    <br></br>
                    <button onClick={() => this.props.history.goBack()}>返回</button>
                </header>
            </div>
        )
    }

    excute = () => {
        var msg = {
            name: 'event',
            params: { title: '新标题' }
        }
        Bridge.open(msg, '')
    }

}

export default Event;