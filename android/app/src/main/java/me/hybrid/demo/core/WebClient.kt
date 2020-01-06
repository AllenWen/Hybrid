package me.hybrid.demo.core

import android.net.Uri
import android.util.Log
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-06
 */
class WebClient : WebViewClient() {

    override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
        val uri = Uri.parse(url)
        if (uri.scheme == "kucoin") {
            val type = uri.path
            val param = uri.getQueryParameter("param")
            val callback = uri.getQueryParameter("callback")
            Log.d("wxg", "type $type param $param callback $callback")
            return false
        }
        view.loadUrl(url)
        return false
    }

    override fun shouldInterceptRequest(view: WebView, url: String): WebResourceResponse? {
        return super.shouldInterceptRequest(view, url)
    }

}