package me.hybrid.demo.core

import android.content.Context
import android.content.Intent
import android.util.Log
import android.webkit.JsPromptResult
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.widget.Toast
import me.hybrid.demo.config.HybridConfig
import me.hybrid.demo.ui.JumpActivity
import org.json.JSONObject

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
        Log.d("wxg", "url:$url\nmessage:$message")
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
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
        val category = request["category"] as String?
        val param = request["param"] as JSONObject?
        if (category.isNullOrEmpty() || param == null) {
            result?.confirm()
            return
        }
        when (category) {
            HybridConfig.JUMP -> {
                val name = param["name"]
                context.startActivity(Intent(context, JumpActivity::class.java))
                result?.confirm("jump")
            }
            HybridConfig.FUNC -> {
                result?.confirm("func")
            }
            HybridConfig.EVENT -> {
                result?.confirm("event")
            }
            else -> result?.confirm()
        }
    }
}