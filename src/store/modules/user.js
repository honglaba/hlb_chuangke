import HTTP from '@/api' // 配置后的axios
import Cookies from 'js-cookie'

const normal = {
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
  User_PayPwdConf ({commit}, data) { // 首次设置支付密码
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
  },
  User_Message ({commit}, type) { // 获取消息或公告
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/message?type=${type}`
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
      })
    })
  }
}

const weika = {
  Wk_Order ({commit}, data) { // 微卡下单
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/weika/order`,
        method: 'POST',
        data
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
      })
    })
  },
  Wk_Pay ({commit}, data) { // 微卡订单支付
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/weika/pay`,
        method: 'POST',
        data
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
      })
    })
  },
  Wk_Query ({commit}, data) { // 查询是否已存在微卡订单
    return new Promise((resolve, reject) => {
      HTTP({
        url: `/api/weika/check-order`
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
      })
    })
  },
  // -------------- 办微卡后的接口 ----------
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
  Wk_GoodList ({commit}) { // 微卡下单商品列表
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

const actions = Object.assign({}, normal, weika)

const moduleUser = {
  actions
}

export default moduleUser
