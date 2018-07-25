import axios from 'axios'
import Cookies from 'js-cookie'
import { Domain } from 'tools/env'
import { STATE_OK, STATE_FAIL } from 'tools/ERR'
import { _init } from 'tools/util'
import store from '@/store'

// 配置axios对象
axios.defaults.baseURL = Domain
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// 请求过期时间 8s
axios.defaults.timeout = 8 * 1000

/* 被挂起的请求数组 */
let refreshSubscribers = []

// let count = 0
/* 刷新请求（refreshSubscribers数组中的请求得到新的token之后会自执行，用新的token去请求数据） */
function onRrefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
}

// 请求拦截器
axios.interceptors.request.use(config => {
  store.commit('UPDATE_LOADING', {status: true})
  /* 是否有请求正在刷新token */
  if (localStorage.getItem('userInfo')) { // 如果有用户信息则需要验证
    config.headers.Authorization = 'Bearer ' + Cookies.get('accessToken')

    if (!Cookies.get('refreshToken')) { // 判断refresh_token 是否过期
      _init()
      location.reload()
      return
    }

    if (!Cookies.get('accessToken')) { // 判断access_token是否过期
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
            // Cookies.set('larvel_session', accessToken, {
            //   expires: 1 / 30
            // })
            onRrefreshed(accessToken)
          } else if (responseJSON.result_state === 'error') {
            _init()
            location.reload()
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
  if (response.data.result_state === STATE_OK) {
    store.commit('UPDATE_LOADING', {status: false})
    return response.data
  } else if (response.data.result_state === STATE_FAIL) {
    store.commit('UPDATE_LOADING', {status: false})
    return Promise.reject(response.data.message)
  }

  // return response.data
}, error => {
  // Do something with response error
  return Promise.reject(error)
})

export default axios
