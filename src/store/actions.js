import HTTP from '@/api' // 配置后的axios
import Cookies from 'js-cookie'

const actions = /* 公用 */{
  HTTP_pay ({commit}, data) { // 支付试验
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/pay-order',
        method: 'post',
        data: {
          price: data.money,
          sid: data.id,
          trade_type: 'WeixinJSBridge'
        },
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_WxAccredit (redirect) { // 微信授权
    let agent = navigator.userAgent
    let client = 'micro' // 默认pc
    if (agent.indexOf('iPhone') > 0) {
      client = 'ios'
    } else if (agent.indexOf('Android') > 0) {
      client = 'android'
    }
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/oauth/wechat',
        params: {
          client: client,
          redirect: redirect
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_UserInfo () { // 用户信息
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/info',
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }
      }).then(res => {
        if (res.result_state === 'success') {
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          resolve(res)
        }
      })
    })
  }
}

export default actions
