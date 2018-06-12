import HTTP from './fetch'

const Methods = {
  HTTP_GET_wxident () {
    let agent = navigator.userAgent
    let client = 'micro' // 默认pc
    if (agent.indexOf('iPhone') > 0) {
      client = 'ios'
    } else if (agent.indexOf('Android') > 0) {
      client = 'android'
    }
    return HTTP({
      url: '/api/oauth/wechat',
      params: {
        client: client
      }
    })
  }
}

export default Methods
