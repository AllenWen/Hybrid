var Hybrid = {
    open: function (data, callback) {
        if (callback && typeof (callback) === 'function') {
            // var callbackid = this.getNextCallbackID();
            // this.msgCallbackMap[callbackid] = callback;
            // params.callbackId = callbackid;
            // params.callbackFunction = 'window.callbackDispatcher';
        }
        if (this.isIOS()) {
            try {
                window.webkit.messageHandlers.WKJSBridge.postMessage(data)
            } catch (error) {
                console.log('error native message')
            }
        } else if (this.isAndroid()) {
            try {
                var result = prompt(JSON.stringify(this.assmbleMsg()))
                console.log(result)
            } catch (error) {
                console.log('error native message')
            }
        }
    },

    //判断Android
    isAndroid: function () {
        let u = navigator.userAgent
        return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    },

    //判断iOS
    isIOS: function () {
        let u = navigator.userAgent
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },

    //组装协议
    assmbleMsg: function () {
        var param = {}
        param.name = 'b'
        var cb = function(){alert('callback')}
        var msg = {}
        msg.category = 'jump'
        msg.param = param
        msg.callback = cb
        return msg
    }

};

export default Hybrid