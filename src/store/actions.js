import HTTP from '@/api' // 配置后的axios
import Cookies from 'js-cookie'

const actions = /* 公用 */{
  HTTP_Comment ({commit}, data) { // 评论
    return new Promise((resolve, reject) => {
      HTTP({
        url:'/api/shop/comments',
        method:'post',
        data:{
          sid:data.sid,
          content:data.content,
          score:data.score
        },
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }
      }).then(res=>{
        resolve(res)
      })
    })
  },
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
  },
  HTTP_Children () { // 用户推荐人列表
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/children?page=1'
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
      })
    })
  }
}

export default actions
