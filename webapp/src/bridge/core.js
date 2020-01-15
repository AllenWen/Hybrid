var callbackMap = {};

var Bridge = {
    //核心方法
    open: function (msg, callback) {
        if (callback && typeof (callback) === 'function') {
            var callbackid = this.getNextCallbackID();
            callbackMap[callbackid] = callback
            msg.callback = 'window.callbackDispatcher'
            msg.callbackId = callbackid
        }
        if (this.isIOS()) {
            try {
                //注：不支持同步返回，可能考虑iOS也使用弹窗拦截方式
                window.webkit.messageHandlers.xxx.postMessage(msg)
            } catch (error) {
                console.log('error native message')
            }
        } else if (this.isAndroid()) {
            try {
                var result = prompt(JSON.stringify(msg))
                return result
            } catch (error) {
                console.log('error native message')
            }
        }
    },

    //生成随机callbackId
    getNextCallbackID: function () {
        let timestamp = new Date().getTime();
        let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let maxPos = $chars.length;
        let randomStr = '';
        for (let i = 0; i < 32; i++) {
            randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return randomStr + timestamp;
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

};

//回调处理器
window.callbackDispatcher = function (callbackId, resultjson) {
    var callback = callbackMap[callbackId];
    if (callback && typeof (callback) === 'function') {
        console.log(resultjson);
        var resultObj = resultjson ? JSON.parse(resultjson) : {};
        callback(resultObj);
    }
}

export default Bridge