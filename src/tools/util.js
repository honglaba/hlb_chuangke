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
