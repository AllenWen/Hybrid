var Hybrid = {
    openapp: function (data, callback) {
        if (callback && typeof (callback) === 'function') {
            // var callbackid = this.getNextCallbackID();
            // this.msgCallbackMap[callbackid] = callback;
            // params.callbackId = callbackid;
            // params.callbackFunction = 'window.callbackDispatcher';
        }

        if (this.isIOS()) {
            try {
                window.webkit.messageHandlers.WKJSBridge.postMessage(data);
            } catch (error) {
                console.log('error native message');
            }
        } else if (this.isAndroid()) {
            try {
                prompt(JSON.stringify(data));
            } catch (error) {
                console.log('error native message');
            }
        }
    },

    isAndroid: function () {
        let u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    },

    isIOS: function () {
        let u = navigator.userAgent;
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }

};

export default Hybrid;