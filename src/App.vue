<template>
  <div id="app">
    <x-loading v-model="isLoading.status" :text="isLoading.text"></x-loading>
    <router-view></router-view>
    <!-- <button @click="">清缓存</button> -->
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
/* eslint-disable */
import VConsole from 'vconsole' // 调试

export default {
  computed: {
    ...mapState(['isLoading'])
  },
  created () {
    this._statusKeep()
  },
  methods: {
    _statusKeep () {
      // 每次刷新store会清空,所以要在本地储存中重新commit保证状态
      if (localStorage.getItem('userInfo')) this.SET_USER_INFO(JSON.parse(localStorage.getItem('userInfo')))
      if (localStorage.getItem('userAddress')) this.SAVE_RECEIVER_ADDRESS(JSON.parse(localStorage.getItem('userAddress')))
      if (localStorage.getItem('invite_id')) this.SET_WEIKA_INVID(localStorage.getItem('invite_id')) // 邀请码
      if (localStorage.getItem('vip_info')) this.UPDATE_VIP_INFO(JSON.parse(localStorage.getItem('vip_info'))) // vip信息
    },
    ...mapMutations(['SET_USER_INFO', 'SAVE_RECEIVER_ADDRESS', 'SET_WEIKA_INVID', 'UPDATE_VIP_INFO']),
    ...mapActions(['HTTP_UserInfo'])
  }
}
</script>

<style lang="less" scoped>
</style>
