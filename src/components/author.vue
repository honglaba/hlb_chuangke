<template>
  <div class="author">
    <div class="content">
      <h1>请选择登录方式</h1>
      <grid>
        <grid-item>
          <img slot="icon" src="~static/images/WeChat.png" alt="" @click="loginWX()">
        </grid-item>
        <grid-item>
          <img slot="icon" src="~static/images/alipay.png" alt="" @click="loginWX()">
        </grid-item>
        <grid-item>
          <img slot="icon" src="~static/images/创客LOGO.png" alt="" @click="loginWX()">
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Grid, GridItem } from 'vux'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      a: 1
    }
  },
  methods: {
    ...mapActions(['HTTP_WxAccredit', 'HTTP_UserInfo']),
    loginWX () {
      this.HTTP_WxAccredit().then(res => {
        window.location.href = res
      })
    }
  },
  created () {
    let local = window.location.href
    if (local.indexOf('?') < 0) {
    } else {
      // slice
      let list = local.slice(local.indexOf('?') + 1).split('&')
      let hashes = {}
      for (let i = 0; i < list.length; i++) {
        let items = list[i].split('=')
        hashes[items[0]] = items[1]
      }
      // cookie
      Cookies.set('access_token', hashes.access_token, { expires: 1 / 24 }) // 设置一小时过期
      Cookies.set('refresh_token', hashes.refresh_token, { expires: 10 }) // 设置一小时过期
      // localStorage
      localStorage.setItem('access_token', hashes.access_token)
      localStorage.setItem('refresh_token', hashes.refresh_token)
      localStorage.setItem('access_token_expires', new Date().getTime())
      localStorage.setItem('refresh_token_expires', new Date().getTime())
      // vuex commit
      this.$store.commit('SET_ACCESS_TOKEN', hashes.access_token)
      this.$store.commit('SET_ACCESS_TOKEN', hashes.refresh_token)
      // get userinfo
      this.HTTP_UserInfo().then(res => {
        console.log(res)
      })
    }
  },
  components: {
    Grid,
    GridItem
  }
}
</script>

<style scoped>
.author {
  width: 100%;
  height: 100%;
  position: fixed;
}
.content {
  margin: 100px auto;
}
</style>
