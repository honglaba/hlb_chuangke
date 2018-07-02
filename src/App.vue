<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created () {
    // 每次刷新store会清空,所以要在本地储存中重新commit保证状态
    if (localStorage.getItem('userInfo')) {
      this.$store.commit(
        'SAVE_USER_INFO',
        JSON.parse(localStorage.getItem('userInfo'))
      )
    }

    if (localStorage.getItem('userAddress')) {
      this.$store.commit(
        'SAVE_RECEIVER_ADDRESS',
        JSON.parse(localStorage.getItem('userAddress'))
      )
    }
  }
}
</script>

<style lang="less" scoped>
</style>
