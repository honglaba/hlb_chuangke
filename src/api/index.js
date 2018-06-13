import axios from 'axios'
import Cookies from 'js-cookie'
import Utils from '@/config/mUtils'
import apiList from '@/store/actions'

// 配置axios对象
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://api.ck.honglaba.com' : '/api_proxy'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截器
axios.interceptors.request.use(config => {
  /* 是否有请求正在刷新token */
  window.isRefreshing = false
  // apiList.HTTP_refreshToken()
  if (localStorage.getItem('userInfo')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token')

    if (Utils.isRefreshTokenExpired()) { // 判断refresh_token 是否过期
      alert('刷新token过期,请重新登录!')
      // 清空所有cookie,localStorage
      localStorage.clear()
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')
      window.location.href = '#/author' // 重新登录
      return
    }

    if (Utils.isTokenExpired()) { // 判断access_token是否过期
      window.isRefreshing = true
      // Cookies.set('refresh_token', localStorage.getItem('refresh_token'))
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
