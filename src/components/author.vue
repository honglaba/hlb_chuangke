<template>
  <div>
    <h1> LOGIN </h1>
    <button @click="loginWX()">点击登录微信</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      a: 1
    }
  },
  methods: {
    ...mapActions(['HTTP_WxAccredit', 'HTTP_WxAccreditSuccess']),
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
      // save
      window.localStorage.setItem('access_token', hashes.access_token)
      window.localStorage.setItem('refresh_token', hashes.refresh_token)
      // commit
      this.$store.commit('SET_ACCESS_TOKEN', hashes.access_token)
      this.$store.commit('SET_ACCESS_TOKEN', hashes.refresh_token)
    }
  }
}
</script>

<style scoped>
</style>
