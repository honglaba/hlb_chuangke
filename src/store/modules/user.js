import HTTP from '@/api' // 配置后的axios
// import Cookies from 'js-cookie'

const moduleUser = {
  actions: {
    User_PayPwdConf ({
      commit
    }, data) { // 首次设置支付密码
      let defaultUrl = ''
      switch (data[2]) { // 不同情况的设置
        case '1':
          defaultUrl = '/api/user/set-pay-password' // 首次设置
          break
        case '2':
          defaultUrl = '/api/user/reset-pay-password-via-phone' // 通过手机号重置
          break
        case '4':
          defaultUrl = '/api/user/reset-pay-password-via-pay-password' // 通过支付密码重置
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
    User_PayResetPhoneVerificationGet ({
      commit
    }) { // 手机重置获取验证码
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
    User_PayResetPhoneVerificationPass ({
      commit
    }, captcha) { // 手机重置获取验证码
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
    User_PayPwdPass ({
      commit
    }, data) { // 验证支付密码
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
    User_collectList ({
      commit
    }) {
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
    User_collectGoods ({
      commit
    }, gid) {
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
    },
    User_Message ({
      commit
    }, type) { // 获取消息或公告
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/message?type=${type}`
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_CheckInv ({commit}, data) { // 校验会员推荐码
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/user/check-invite`,
          method: 'POST',
          data: {
            invite_id: data
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_Buy ({commit}, data) { // 微卡下单
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/weika/order`,
          method: 'POST',
          data: {
            goods_id: data.goods_id,
            is_invite: data.is_invite,
            invite_id: data.invite_id,
            trade_type: data.trade_type
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_Index ({commit}, data) { // 会员首页数据
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/user/weika`
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_Withdraw ({commit}, data) { // 微卡提现
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/weika/withdraw`,
          method: 'POST',
          data: {
            amount: data.amount,
            remark: data.remark
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_WithdrawLog ({commit}, data) { // 提现记录
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/user/withdraws`
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_Record ({commit}, data) { // 我的战绩
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/user/record`
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    Wk_GoodList ({commit}, data) { // 微卡下单商品列表
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/weika/goods`
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    }
  }
}

export default moduleUser
