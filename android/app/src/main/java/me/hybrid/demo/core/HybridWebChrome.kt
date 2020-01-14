package me.hybrid.demo.core

import android.content.Context
import android.util.Log
import android.webkit.JsPromptResult
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.widget.Toast

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-14
 */
class HybridWebChrome(private val context: Context) : WebChromeClient() {

    override fun onJsPrompt(
        view: WebView?,
        url: String?,
        message: String?,
        defaultValue: String?,
        result: JsPromptResult?
    ): Boolean {
        Log.d(
            "wxg",
            "url:$url\nmessage:$message\ndefault:$defaultValue\nresult:${result.toString()}"
        )
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
        result?.confirm("haha")
        return true
    }
}