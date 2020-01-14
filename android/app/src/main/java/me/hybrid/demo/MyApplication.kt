package me.hybrid.demo

import android.app.Application

/**
 * @author <a href="allen@kucoin.com">allen</a>
 * @version 3.7
 * @description
 * @changeNote
 * @date 2020-01-06
 */
class MyApplication : Application() {

    companion object {
        fun getApp() = this
    }

    override fun onCreate() {
        super.onCreate()
    }
}