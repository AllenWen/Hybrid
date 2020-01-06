package me.hybrid.demo.ui

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import me.hybrid.demo.R

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-06
 */
class MainActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        open.setOnClickListener {
            val intent = Intent(this, WebViewActivity::class.java)
            intent.putExtra("url", "https://allenwen.github.io/Hybrid/webapp/index.html")
            startActivity(intent)
        }
    }
}