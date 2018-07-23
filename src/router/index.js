import router from './config'
// cookie
import Cookies from 'js-cookie'
import store from '@/store'
import { _init } from 'tools/util'

router.beforeEach((To, From, next) => {
  let historyTargetPath = localStorage.getItem('historyTargetPath') // 每一次跳转都获取该参数
  let specialPaths = ['/member/settings', '/weika'] // 这里可以添加那些需要判断登录才能进入的界面! 只能写path
  let isMatched = false

  function getRedirectUrl () {
    _init()
    localStorage.setItem('historyTargetPath', To.path)
    store.dispatch('HTTP_WxAccredit', window.location.origin + '/aaaaa' + From.path)
      .then(res => { // aaaaa = #
        window.location.href = res.redirect
      })
  }

  if (!To.name) { // 路由不存在时跳转from页
    next(From.path)
    return
  }

  if (historyTargetPath && !localStorage.getItem('userInfo')) { // 如果存在历史跳转地址且没有用户信息时,说明当前为授权状态,处理url
    let local = location.href
    let hisUrl = historyTargetPath

    _init()

    if (
      local.indexOf('access_token') > 0 &&
      local.indexOf('refresh_token') > 0
    ) {
      // 如果url为后台重定向带参形式,则进行用户信息的获取
      // slice
      let list = local.slice(local.indexOf('?') + 1).split('&')
      let hashes = {}
      for (let i = 0; i < list.length; i++) {
        let items = list[i].split('=')
        hashes[items[0]] = items[1]
      }

      localStorage.setItem('client_id', hashes.client_id)

      // cookie
      Cookies.set('accessToken', hashes.access_token, { expires: 1 / 25 })
      Cookies.set('refreshToken', hashes.refresh_token, { expires: 10 }) // 设置10天过期

      store.dispatch('HTTP_UserInfo')
        .then(res => {
          Cookies.set(res.session.name, res.session.value, { expires: 1 / 25 })
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          store.commit('SET_USER_INFO', res.data)
          res.data.mobile_phone ? next({path: hisUrl}) : next({path: '/member/phone_update'})
        })
      return
    }
  }

  if (window.navigator.userAgent.match(/MicroMessenger/i)) {
    if (!localStorage.getItem('userInfo') || !Cookies.get('refreshToken')) {
      // 清空所有数据, 再请求
      getRedirectUrl()
      next(false) // 这里重定向, 要先stop
      return
    }
  } else {
    let Path = To.fullPath

    if (Path !== '/' && Path.substr(-1, 1) === '/') {
      Path = Path.slice(0, Path.length - 1)
    }
    specialPaths.forEach(e => {
      if (e === Path) {
        isMatched = true
      }
    })

    if (isMatched) {
      getRedirectUrl()
      return
    }
  }

  next() // 无阻碍直接跳转
})

router.afterEach(to => {})

export default router
