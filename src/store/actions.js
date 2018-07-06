import HTTP from '@/api' // 配置后的axios
import Cookies from 'js-cookie'

const actions = {
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
  HTTP_UpReferrer () { // 上级推荐人
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/parent'
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
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
  HTTP_pay () { // 支付试验
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/pay-order',
        method: 'post',
        data: {
          price: '2',
          sid: '1',
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
  HTTP_logout ({commit}) { // 登出
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/logout'
      }).then(res => {
        if (res.result_state === 'success') {
          commit('CLEAR_STATE')
          localStorage.clear()
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          resolve(res)
        }
      })
    })
  },
  HTTP_refreshToken () { // 刷新请求凭证
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/login/refresh',
        method: 'post',
        data: {
          client_id: localStorage.getItem('client_id')
        }
      }).then(res => {
        if (res.result_state === 'success') {

        }
      })
    })
  },
  HTTP_receiverAddress ({commit}) { // 收货地址获取
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/address'
      }).then(res => {
        if (res.result_state === 'error') {
          resolve(false)
        } else {
          commit('SAVE_RECEIVER_ADDRESS', res.data)
          localStorage.setItem('userAddress', JSON.stringify(res.data))
          resolve(res.data.length !== 0)
        }
      })
    })
  },
  HTTP_receiverAddressAdd ({commit}, data) { // 收货地址添加
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/address',
        method: 'POST',
        data
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_receiverAddressEditor ({commit}, data) { // 收货地址修改
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/user/address/${data.id}`,
        method: 'PUT',
        data
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_receiverAddressDel ({commit}, id) { // 收货地址修改
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/user/address/${id}`,
        method: 'DELETE'
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_bindPhone ({commit}, data) { // 绑定新手机
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/user/bind-phone`,
        method: 'POST',
        data: {
          mobile_phone: data.phone,
          captcha: data.code
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_resetPhone ({commit}, data) { // 重置手机号
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/user/rebind-phone`,
        method: 'POST',
        data: {
          mobile_phone: data.mobile_phone,
          captcha: data.captcha
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_verification ({commit}, data) { // 绑定新手机 验证码
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/sms/send`,
        method: 'POST',
        data: {
          mobile_phone: data
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_resetPhonePassIdentity ({commit}) { // 重置第一步  向原手机发送验证码
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/sms/send/modify-phone`,
        method: 'POST'
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_resetPhonePassIdentityDrop ({commit}, captcha) { // 重置手第二步  认证身份
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/phone-captcha/validate-modify-phone-captcha`,
        method: 'POST',
        data: {
          captcha
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  HTTP_realNameRegistration ({commit}, data) { // 实名认证
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/user/certification`,
        method: 'POST',
        data: {
          name: data.name,
          id_card: data.id_card
        }
      }).then(res => {
        resolve(res)
      })
    })
  }
  // PayPassword
  // HTTP_pay
}

export default actions
