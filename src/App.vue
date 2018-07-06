<template>
  <div id="app">
    <x-loading v-model="isLoading.status" :text="isLoading.text"></x-loading>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isLoading'])
  },
  created () {
    // 每次刷新store会清空,所以要在本地储存中重新commit保证状态
    if (localStorage.getItem('userInfo')) {
      this.$store.commit(
        'SET_USER_INFO',
        JSON.parse(localStorage.getItem('userInfo'))
      )
    }

    if (localStorage.getItem('userAddress')) {
      this.$store.commit(
        'SAVE_RECEIVER_ADDRESS',
        JSON.parse(localStorage.getItem('userAddress'))
      )
    }

    if (localStorage.getItem('invite_id')) { // 邀请码
      this.$store.commit(
        'SET_WEIKA_INVID',
        localStorage.getItem('invite_id')
      )
    }
  }
}
</script>

<style lang="less" scoped>
</style>
