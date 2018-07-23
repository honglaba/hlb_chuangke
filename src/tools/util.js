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
  Cookies.remove('laravel_session')
  localStorage.clear()
}

export function formatDateTime (inputTime) {
  let date = new Date(inputTime)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}

export function ConsoleFun (arg, tip) {
  console.log('---' + (tip || '-') + '---')
  console.log('%c' + Object.prototype.toString.call(arg), 'color:deeppink;font-size:8px;')
  console.log(arg)
  console.log('------')
}
