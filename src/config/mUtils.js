const Utils = {
  isRefreshTokenExpired () { // 判断刷新token请求的refresh_token是否过期
    let goTime = new Date().getTime() - localStorage.getItem('refresh_token_expires')
    if (goTime > 864000000) {
      return false
    } else {
      return true
    }
  },
  isTokenExpired () { /* 判断token是否将要过期 */
    let goTime = new Date().getTime() - localStorage.getItem('access_token_expires')
    if (goTime > 3600000) {
      return false
    } else {
      return true
    }
  }
}

export default Utils
