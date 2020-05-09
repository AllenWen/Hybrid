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
                    <button onClick={() => this.excute()}>更新标题</button>
                    <br></br>
                    <button onClick={() => this.hide()}>隐藏标题栏</button>
                    <br></br>
                    <button onClick={() => this.h()}>更</button>
                    <br></br>
                    <button onClick={() => this.props.history.goBack()}>返回</button>
                </header>
            </div>
        )
    }

    excute = () => {
        var msg = {
            type: 'event',
            params: {
                name: 'updateHeader',
                //是否隐藏标题栏（默认true）
                visible: true,
                //标题栏背景色
                background: '#162239',
                //标题
                title: '是的',
            }
        }
        Bridge.open(msg, '')
    }

    hide = () => {
        var msg = {
            type: 'event',
            params: {
                name: 'updateHeader',
                //是否隐藏标题栏（默认true）
                visible: false,
            }
        }
        Bridge.open(msg, '')
    }
}

export default Event;