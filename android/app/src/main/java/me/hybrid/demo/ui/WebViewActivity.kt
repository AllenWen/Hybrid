package me.hybrid.demo.ui

import android.annotation.SuppressLint
import android.app.Activity
import android.os.Build
import android.os.Bundle
import android.view.View
import android.webkit.CookieManager
import android.webkit.WebSettings
import android.webkit.WebView
import kotlinx.android.synthetic.main.activity_web.*
import me.hybrid.demo.BuildConfig
import me.hybrid.demo.R
import me.hybrid.demo.core.WebClient

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-06
 */
class WebViewActivity : Activity() {
    private val url by lazy { intent?.getStringExtra("url") }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web)
        initView()
        webview.loadUrl(url)
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun initView() {
        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG)
        webview.webViewClient = WebClient()
        val settings = webview.settings
        settings.javaScriptEnabled = true
        settings.databaseEnabled = true
        settings.setAppCacheEnabled(true)
        settings.domStorageEnabled = true
        settings.loadWithOverviewMode = false
        settings.useWideViewPort = false
        when {
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP -> {
                //设置5.0以上不允许跨域设置cookie配置
                CookieManager.getInstance().setAcceptThirdPartyCookies(webview, true)
                //适配5.0不允许http和https混合使用情况
                settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
                webview.setLayerType(View.LAYER_TYPE_HARDWARE, null)
            }
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT -> webview.setLayerType(
                View.LAYER_TYPE_HARDWARE,
                null
            )
            else -> webview.setLayerType(View.LAYER_TYPE_SOFTWARE, null)
        }
    }

}