import HTTP from '@/api' // 配置后的axios
import Cookies from 'js-cookie'

let agent = navigator.userAgent
let client = 'micro' // 默认pc
if (agent.indexOf('iPhone') > 0) {
  client = 'ios'
} else if (agent.indexOf('Android') > 0) {
  client = 'android'
}

const actions = {
  HTTP_WxAccredit ({
    commit
  }) {
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/oauth/wechat',
        params: {
          client: client
        }
      }).then(res => {
        resolve(res.redirect)
      })
    })
  },
  HTTP_UserInfo ({
    commit
  }) {
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/info',
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
      }).then(res => {
        if (res.result_state === 'success') {
          console.log(res)
          resolve(res)
        } else {
        }
      })
    })
  },
  HTTP_refreshToken () {
    HTTP({
      url: '/api/login/refresh',
      method: 'post'
    }).then(res => {
      console.log(res)
    })
  }
}

export default actions
