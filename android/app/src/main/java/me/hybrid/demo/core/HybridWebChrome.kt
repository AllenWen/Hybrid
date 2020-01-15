package me.hybrid.demo.core

import android.content.Context
import android.util.Log
import android.webkit.JsPromptResult
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.widget.Toast
import me.hybrid.demo.config.HybridConfig
import org.json.JSONObject

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-14
 */
class HybridWebChrome(private val webView: WebView, private val context: Context) :
    WebChromeClient() {

    var count = 1

    override fun onJsPrompt(
        view: WebView?,
        url: String?,
        message: String?,
        defaultValue: String?,
        result: JsPromptResult?
    ): Boolean {
        Log.d("wxg", "url:$url\nmessage:$message")
        Toast.makeText(context, message, Toast.LENGTH_LONG).show()
        if (message.isNullOrEmpty()) {
            result?.confirm()
        } else {
            val request = JSONObject(message)
            dispatchMessage(request, result)
        }
        return true
    }

    private fun dispatchMessage(
        request: JSONObject,
        result: JsPromptResult?
    ) {
        try {
            val name = request["name"] as String?
            if (name.isNullOrEmpty()) {
                result?.confirm()
                return
            }
            when (name) {
                HybridConfig.NAME_JUMP -> {
                    val params = request["params"] as JSONObject?
                    val url = params?.getString("url")
                    Log.d("wxg", "jump_url:$url")
//                    context.startActivity(Intent(context, JumpActivity::class.java))
                    val cb = request.getString("callback")
                    val cbId = request.getString("callbackId")
                    if (!cb.isNullOrEmpty() && !cbId.isNullOrEmpty()) {
                        val resultJson = JSONObject()
                        resultJson.put("data", "回调处理:${count++}")
                        resultJson.put("code", 0)
                        resultJson.put("msg", "success")
                        webView.evaluateJavascript("$cb('$cbId','$resultJson')", null)
                    }
                    result?.confirm()
                }
                HybridConfig.NAME_FUNC -> {
                    result?.confirm("func")
                }
                HybridConfig.NAME_EVENT -> {
                    result?.confirm("event")
                }
                else -> result?.confirm()
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }

    }
}