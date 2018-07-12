import axios from 'axios'
import Cookies from 'js-cookie'
import { Domain } from 'tools/env'

// 配置axios对象
axios.defaults.baseURL = Domain
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// 请求过期时间 8s
axios.defaults.timeout = 8000

/* 被挂起的请求数组 */
let refreshSubscribers = []

// let count = 0
/* 刷新请求（refreshSubscribers数组中的请求得到新的token之后会自执行，用新的token去请求数据） */
function onRrefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
}

function _init () { // 初始化
  Cookies.remove('refreshToken')
  Cookies.remove('accessToken')
  localStorage.clear()
  location.reload()
}

// 请求拦截器
axios.interceptors.request.use(config => {
  /* 是否有请求正在刷新token */
  if (localStorage.getItem('userInfo')) { // 如果有用户信息则需要验证
    config.headers.Authorization = 'Bearer ' + Cookies.get('accessToken')
    if (!Cookies.get('refreshToken')) { // 判断refresh_token 是否过期
      _init()
      return
    }

    if (!Cookies.get('accessToken')) { // 判断access_token是否过期
      alert()
      let xhr = new XMLHttpRequest()
      let retry = new Promise((resolve, reject) => {
        refreshSubscribers.push(accessToken => {
          config.headers.Authorization = 'Bearer ' + accessToken
          /* 将请求挂起 */
          resolve(config)
        })
      })
      xhr.open('POST', Domain + '/api/login/refresh')
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({
        client_id: localStorage.getItem('client_id')
      }))
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let responseJSON = JSON.parse(xhr.response)
          if (responseJSON.result_state === 'success') { // 请求成功code值
            let accessToken = responseJSON.data.access_token
            config.headers.Authorization = 'Bearer ' + accessToken
            Cookies.set('accessToken', accessToken, {
              expires: 1 / 30
            })
            onRrefreshed(accessToken)
          } else if (responseJSON.result_state === 'error') {
            _init()
          }
        }
      }
      return retry
    }
  }
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
