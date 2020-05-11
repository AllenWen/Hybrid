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
                    <button onClick={() => this.hideLeft()}>隐藏左边</button>
                    <br></br>
                    <button onClick={() => this.showRight()}>显示右边</button>
                    <br></br>
                    <button onClick={() => this.updateIcon()}>更新图标</button>
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
                title: '更新',
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


    hideLeft = () => {
        var msg = {
            type: 'event',
            params: {
                name: 'updateHeader',
                title: '隐藏左边',
                leftVisible: false,
            }
        }
        Bridge.open(msg, '')
    }

    showRight = () => {
        var msg = {
            type: 'event',
            params: {
                name: 'updateHeader',
                title: '显示右边',
                rightVisible: true,
            }
        }
        Bridge.open(msg, '')
    }


    updateIcon = () => {
        this.getUrlBase64('htt./h5/back.png', 'png', function (base64) {
            var msg = {
                type: 'event',
                params: {
                    name: 'updateHeader',
                    title: '新图标',
                    leftIcon: base64,
                    rightIcon: base64,
                    rightVisible: true
                }
            }
            Bridge.open(msg, '')
        })
    }

    getUrlBase64(url, ext, callback) {
        var img = new Image();
        img.crossOrigin = '*';
        img.src = url;
        var canvas = document.createElement("canvas");   //创建canvas DOM元素
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, img.width, img.height); //参数可自定义
            var dataURL = canvas.toDataURL("image/" + ext);
            callback && callback.call(this, dataURL); //回掉函数获取Base64编码
        };
    }

}

export default Event;