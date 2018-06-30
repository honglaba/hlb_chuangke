import HTTP from '@/api' // 配置后的axios
// import Cookies from 'js-cookie'

const moduleUser = {
  state: {},
  mutations: {},
  actions: {
    User_PayPwdConf ({commit}, data) { // 首次设置支付密码
      let defaultUrl = ''
      switch (data[2]) { // 不同情况的设置
        case '1': defaultUrl = '/api/user/set-pay-password' // 首次设置
          break
        case '2': defaultUrl = '/api/user/reset-pay-password-via-phone' // 通过手机号重置
          break
        case '4': defaultUrl = '/api/user/reset-pay-password-via-pay-password' // 通过支付密码重置
          break
        default:
          defaultUrl = '/api/user/set-pay-password'
      }
      return new Promise((resolve, reject) => {
        HTTP({
          url: defaultUrl,
          method: 'POST',
          data: {
            pay_password: data[0],
            pay_password_confirmation: data[1]
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    User_PayResetPhoneVerificationGet ({commit}) { // 手机重置获取验证码
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/sms/send/modify-pay-password',
          method: 'POST'
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    User_PayResetPhoneVerificationPass ({commit}, captcha) { // 手机重置获取验证码
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/phone-captcha/validate-modify-pay-password-captcha',
          method: 'POST',
          data: {
            captcha
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    User_PayPwdPass ({commit}, data) { // 验证支付密码
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/auth/pay-password',
          method: 'POST',
          data: {
            pay_password: data.pay_password,
            action: data.action
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    },
    User_collectList ({commit}) {
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/user/favorite-goods',
          method: 'GET'
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(true)
          }
        })
      })
    },
    User_collectGoods ({commit}, gid) {
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/user/favorite-goods',
          method: 'POST',
          data: {
            gid
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(true)
          }
        })
      })
    }
  },
  getters: {}
}

export default moduleUser
