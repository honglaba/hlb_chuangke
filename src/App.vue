<template>
  <router-view></router-view>
</template>
<script>
import Cookies from 'js-cookie'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['HTTP_UserInfo'])
  },
  created () {
    let local = window.location.href
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
      localStorage.setItem('auth', JSON.stringify(hashes))
      localStorage.setItem('client_id', hashes.client_id)

      // cookie
      // Cookies.set('accessToken', hashes.access_token, { expires: 1 / 24 }) // 设置一小时过期
      Cookies.set('accessToken', hashes.access_token, { expires: new Date(new Date().getTime() + 6 * 1000) })
      Cookies.set('refreshToken', hashes.refresh_token, { expires: 10 }) // 设置10天过期

      this.HTTP_UserInfo().then(res => {
        localStorage.setItem('userInfo', JSON.stringify(res.data))
      })
    }
  }
}
</script>
