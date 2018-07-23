import ajax from '@/api' // 配置后的axios
import Cookies from 'js-cookie'

const normal = {
  HTTP_refreshToken () { // 刷新请求凭证
    return new Promise((resolve, reject) => {
      ajax.post('/api/login/refresh', {
        client_id: localStorage.getItem('client_id')
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_InfoConfig ({commit}, data) {
    return new Promise((resolve, reject) => {
      ajax.post('/api/user/info', data)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_receiverAddress ({commit}) { // 收货地址获取
    return new Promise((resolve, reject) => {
      ajax.get('/api/user/address')
        .then(res => {
          commit('SAVE_RECEIVER_ADDRESS', res.data)
          localStorage.setItem('userAddress', JSON.stringify(res.data))
          resolve(res.data.length !== 0)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_receiverAddressAdd ({commit}, data) { // 收货地址添加
    return new Promise((resolve, reject) => {
      ajax.post('/api/user/address', data)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_receiverAddressEditor ({commit}, data) { // 收货地址修改
    return new Promise((resolve, reject) => {
      ajax.put(`/api/user/address/${data.id}`, data)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_receiverAddressDel ({commit}, id) { // 收货地址修改
    return new Promise((resolve, reject) => {
      ajax.delete(`/api/user/address/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_bindPhone ({commit}, data) { // 绑定新手机
    return new Promise((resolve, reject) => {
      ajax.post(`/api/user/bind-phone`, {
        mobile_phone: data.phone,
        captcha: data.code
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_resetPhone ({commit}, data) { // 重置手机号
    return new Promise((resolve, reject) => {
      ajax.post(`/api/user/rebind-phone`, {
        mobile_phone: data.mobile_phone,
        captcha: data.captcha
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_verification ({commit}, data) { // 绑定新手机 验证码
    return new Promise((resolve, reject) => {
      ajax.post(`/api/sms/send`, {
        mobile_phone: data
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_resetPhonePassIdentity ({commit}) { // 重置第一步  向原手机发送验证码
    return new Promise((resolve, reject) => {
      ajax.post(`/api/sms/send/modify-phone`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_resetPhonePassIdentityDrop ({commit}, captcha) { // 重置手第二步  认证身份
    return new Promise((resolve, reject) => {
      ajax.post(`/api/phone-captcha/validate-modify-phone-captcha`, {
        captcha
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_realNameRegistration ({commit}, data) { // 实名认证
    return new Promise((resolve, reject) => {
      ajax.post(`/api/user/certification`, {
        name: data.name,
        id_card: data.id_card
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_UpReferrer () { // 上级推荐人
    return new Promise((resolve, reject) => {
      ajax.get('/api/user/parent')
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_logout ({commit}) { // 登出
    return new Promise((resolve, reject) => {
      ajax.get('/api/logout')
        .then(res => {
          commit('CLEAR_STATE')
          localStorage.clear()
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
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
        break
    }
    return new Promise((resolve, reject) => {
      ajax.post(defaultUrl, {
        pay_password: data[0],
        pay_password_confirmation: data[1]
      })
        .then(res => {
          commit('CLEAR_STATE')
          localStorage.clear()
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_PayResetPhoneVerificationGet ({commit}) { // 手机重置获取验证码
    return new Promise((resolve, reject) => {
      ajax.post('/api/sms/send/modify-pay-password')
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_PayResetPhoneVerificationPass ({commit}, captcha) { // 手机重置获取验证码
    return new Promise((resolve, reject) => {
      ajax.post('/api/phone-captcha/validate-modify-pay-password-captcha', {
        captcha
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_PayPwdPass ({commit}, data) { // 验证支付密码
    return new Promise((resolve, reject) => {
      ajax.post('/api/auth/pay-password', {
        pay_password: data.pay_password,
        action: data.action
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_collectList ({commit}) {
    return new Promise((resolve, reject) => {
      ajax.get('/api/user/favorite-goods')
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_collectGoods ({commit}, gid) {
    return new Promise((resolve, reject) => {
      ajax.post('/api/user/favorite-goods', {
        gid
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_collectShopList ({commit}, gid) {
    return new Promise((resolve, reject) => {
      let lat = sessionStorage.getItem('lat')
      let lng = sessionStorage.getItem('lng')
      ajax.get(`/api/user/favorite-shop?latitude=${lat}&longitude=${lng}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_Message ({commit}, type) { // 获取消息或公告
    return new Promise((resolve, reject) => {
      ajax.get(`/api/message?type=${type}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_buyList ({commit}, type) { // 全部订单列表: 待付款1, 待发货2, 待收货3, 待评论4
    return new Promise((resolve, reject) => {
      ajax.get(`/api/orders?order_state=${type}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_isCollectShop ({commit}, sid) {
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/shop/favorite`, {
        params: {
          sid
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  }
}

const weika = {
  Wk_Order ({commit}, data) { // 微卡下单
    return new Promise((resolve, reject) => {
      ajax.post(`/api/weika/order`, data)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_Pay ({commit}, data) { // 微卡订单支付
    return new Promise((resolve, reject) => {
      ajax.post(`/api/weika/pay`, data)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_Query ({commit}, data) { // 查询是否已存在微卡订单
    return new Promise((resolve, reject) => {
      ajax.get(`/api/weika/check-order`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_CheckInv ({commit}, data) { // 校验会员推荐码
    return new Promise((resolve, reject) => {
      ajax.post(`/api/user/check-invite`, {
        invite_id: data
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_Quota ({commit}) { // 微卡无邀请码注册名额
    return new Promise((resolve, reject) => {
      ajax.get(`/api/weika/quota`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  // -------------- 办微卡后的接口 ----------
  Wk_Index ({commit}, data) { // 会员首页数据
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/weika`)
        .then(res => {
          commit('UPDATE_VIP_INFO', res.data)
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_WithdrawLog ({commit}, data) { // 提现记录
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/withdraws`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_Record ({commit}, data) { // 我的战绩
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/record`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Wk_GoodList ({commit}) { // 微卡下单商品列表
    return new Promise((resolve, reject) => {
      ajax.get(`/api/weika/goods`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Vip_Commission ({commit}) { // 累计佣金
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/commission`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Vip_CommissionHistory ({commit}, mtype) { // 历史佣金
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/commission-history`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  Vip_Withdraw ({commit}, data) { // 微卡提现
    return new Promise((resolve, reject) => {
      ajax.post(`/api/weika/withdraw`, {
        amount: data.amount,
        remark: data.remark
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  User_CancelOrder ({commit}, data) {
    return new Promise((resolve, reject) => {
      ajax.post(`/api/user/order/cancel`, data)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  }
}

const moduleUser = {
  actions: Object.assign({}, normal, weika)
}

export default moduleUser
