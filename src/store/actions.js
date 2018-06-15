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
  HTTP_WxAccredit (redirect) {
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
  HTTP_UpReferrer () {
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/user/parent'
      }).then(res => {
        if (res.result_state === 'success') {
          console.log('UpReferrer success!!!!!!!', new Date(new Date().getTime() * 1000))
          resolve(res)
        }
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
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }
      }).then(res => {
        if (res.result_state === 'success') {
          resolve(res)
        }
      })
    })
  },
  HTTP_logout () {
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/logout'
      }).then(res => {
        if (res.result_state === 'success') {
          localStorage.clear()
          Cookies.remove('access_token')
          Cookies.remove('refresh_token')
          this.$route.push('/')
        }
      })
    })
  },
  HTTP_refreshToken () {
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
  }
}

export default actions
