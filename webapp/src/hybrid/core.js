var Hybrid = {
    openapp: function (data, callback) {
        if (callback && typeof (callback) === 'function') {
            // var callbackid = this.getNextCallbackID();
            // this.msgCallbackMap[callbackid] = callback;
            // params.callbackId = callbackid;
            // params.callbackFunction = 'window.callbackDispatcher';
        }

        // if (this.isIOS) {
        //     try {
        //         window.webkit.messageHandlers.WKJSBridge.postMessage(data);
        //     }
        //     catch (error) {
        //         console.log('error native message');
        //     }
        // }


            try {
                prompt(JSON.stringify(data));
            }
            catch (error) {
                console.log('error native message');
            }

    }
    
};
export default Hybrid;