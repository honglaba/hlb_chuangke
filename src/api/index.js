import axios from 'axios'
import Cookies from 'js-cookie'

// 配置axios对象
let EnvUrl = process.env.NODE_ENV === 'production' ? 'http://api.ck.honglaba.com' : '/api_proxy'
axios.defaults.baseURL = EnvUrl
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// window.isRefreshing = false
/* 被挂起的请求数组 */
let refreshSubscribers = []
// let count = 0
/* 刷新请求（refreshSubscribers数组中的请求得到新的token之后会自执行，用新的token去请求数据） */
function onRrefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
}

// 请求拦截器
axios.interceptors.request.use(config => {
  /* 是否有请求正在刷新token */
  if (localStorage.getItem('userInfo')) { // 如果有用户信息则需要验证
    config.headers.Authorization = 'Bearer ' + Cookies.get('accessToken')
    if (!Cookies.get('refreshToken')) { // 判断refresh_token 是否过期
      alert('刷新token过期,请重新登录!')
      // 清空所有cookie,localStorage
      localStorage.clear()
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      return
    }

    if (!Cookies.get('accessToken')) { // 判断access_token是否过期
      // window.isRefreshing = true
      let xhr = new XMLHttpRequest()
      xhr.open('POST', location.origin + '/api_proxy/api/login/refresh')
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({
        client_id: localStorage.getItem('client_id')
      }))
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(count++)
          window.isRefreshing = false
          let accessToken = JSON.parse(xhr.response).access_token
          config.headers.Authorization = 'Bearer ' + accessToken
          Cookies.set('accessToken', accessToken, {
            expires: 1 / 36
          })
          // Cookies.set('accessToken', accessToken, { expires: new Date(new Date().getTime() + 5 * 1000) })
          onRrefreshed(accessToken)
        }
      }
      let retry = new Promise((resolve, reject) => {
        refreshSubscribers.push(accessToken => {
          config.headers.Authorization = 'Bearer ' + accessToken
          /* 将请求挂起 */
          resolve(config)
        })
      })
      return retry
    }
  }
  // console.log(config)
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  // Do something with response data
  return response.data
}, error => {
  // Do something with response error
  return Promise.reject(error)
})

export default axios
