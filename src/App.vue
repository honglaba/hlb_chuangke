<template>
  <div id="app">
    <x-loading v-model="isLoading.status" :text="isLoading.text"></x-loading>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['isLoading'])
  },
  created () {
    // 在微信浏览器手机端, 因为不会真正的跳到授权页面, 生命钩子不会进行两次
    this._statusKeep()
  },
  methods: {
    _statusKeep () {
      // 每次刷新store会清空,所以要在本地储存中重新commit保证状态
      if (localStorage.getItem('userInfo')) this.SET_USER_INFO(JSON.parse(localStorage.getItem('userInfo')))
      if (localStorage.getItem('userAddress')) this.SAVE_RECEIVER_ADDRESS(JSON.parse(localStorage.getItem('userAddress')))
      if (localStorage.getItem('invite_id')) this.SET_WEIKA_INVID(localStorage.getItem('invite_id')) // 邀请码
    },
    ...mapMutations(['UPDATE_LOADING', 'SET_USER_INFO', 'SAVE_RECEIVER_ADDRESS', 'SET_WEIKA_INVID']),
    ...mapActions(['HTTP_UserInfo'])
  }
}
</script>

<style lang="less" scoped>
</style>
