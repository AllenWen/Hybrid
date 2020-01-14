package me.hybrid.demo.core

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
class HybridWebClient : WebViewClient() {

    override fun shouldInterceptRequest(view: WebView, url: String): WebResourceResponse? {
        return super.shouldInterceptRequest(view, url)
    }

}