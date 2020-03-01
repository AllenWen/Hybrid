import React from 'react';
import Bridge from './bridge/core.js';
import './App.css';

class Func extends React.Component {

    constructor(props) {
        super(props);
        this.state = { countText: '' };
    }

    componentDidMount() {
        window.onListenEvent('back', (data) => {
            console.log(data)
            console.log('点击了返回键')
            return 'H5接受到了主动调用'
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <text>{this.state.countText}</text>
                    <br></br>
                    <button onClick={() => this.excute()}>获取本地计数</button>
                    <br></br>
                    <button onClick={() => this.props.history.goBack()}>返回</button>
                </header>
            </div>
        )
    }

    showCount = (result) => {
        this.setState({
            countText: result.data
        })
    }

    excute = () => {
        var msg = {
            name: 'func',
            params: { name: 'getCount' }
        }
        console.log('哈哈')
        Bridge.open(msg, this.showCount)
        // 或者 
        // Bridge.open(msg, (result)=>{
        //     this.setState({
        //         countText: result.data
        //     })
        // })
    }

}

export default Func;