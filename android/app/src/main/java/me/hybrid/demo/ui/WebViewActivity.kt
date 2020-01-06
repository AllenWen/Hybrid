package me.hybrid.demo.ui

import android.app.Activity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_web.*
import me.hybrid.demo.R

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-06
 */
class WebViewActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web)
        initView()
    }

    private fun initView() {
        webview
        val settings = webview.settings
    }

}