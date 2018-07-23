<template>
  <div id="app">
    <x-loading v-model="isLoading.status" :text="isLoading.text"></x-loading>
    <!-- <keep-alive include="KeepAliveHome,KeepAliveShop"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
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
      if (localStorage.getItem('currOperation')) this.SAVE_RECEIVER_ADDRESS(JSON.parse(localStorage.getItem('currOperation')))
      if (localStorage.getItem('invite_id')) this.SET_WEIKA_INVID(localStorage.getItem('invite_id')) // 邀请码
      if (localStorage.getItem('vip_info')) this.UPDATE_VIP_INFO(JSON.parse(localStorage.getItem('vip_info'))) // vip信息
      if (localStorage.getItem('shoppingCart')) this.SAVE_SHOPPING_CART(JSON.parse(localStorage.getItem('shoppingCart'))) // 购物车
    },
    ...mapMutations(['SET_USER_INFO', 'SAVE_RECEIVER_ADDRESS', 'SET_WEIKA_INVID', 'UPDATE_VIP_INFO', 'SAVE_SHOPPING_CART', 'UPDATE_LOADING'])
  }
}
</script>

<style lang="less" scoped>
</style>
