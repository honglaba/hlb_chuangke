import HTTP from '@/api' // 配置后的axios

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
  HTTP_WxAccreditSuccess () {
    return new Promise((resolve, reject) => {
      HTTP({
        url: '/api/oauth/callback',
        params: {
          client: client
        }
      }).then(res => {
        resolve(res)
      })
    })
  }
}

export default actions
