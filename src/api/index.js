import axios from 'axios'

let baseURL = process.env.NODE_ENV === 'production' ? 'http://api.ck.honglaba.com' : '/api_proxy'

// 配置axios对象
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + AccessToken

// 请求拦截器
axios.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, function (error) {
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
