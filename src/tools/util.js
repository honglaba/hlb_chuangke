import Cookies from 'js-cookie'

export const wxpay = (callback, arg) => { // 微信支付的兼容调用
  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', callback.call(this, arg), false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', callback.call(this, arg))
      document.attachEvent('onWeixinJSBridgeReady', callback.call(this, arg))
    }
  } else {
    callback(arg)
  }
}

export function _init () {
  /* 初始化 */
  Cookies.remove('refreshToken')
  Cookies.remove('accessToken')
  Cookies.remove(localStorage.getItem('sessionKeyName'))
  localStorage.clear()
}

export function formatDateTime (inputTime) {
  var date = new Date(inputTime)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d
}
