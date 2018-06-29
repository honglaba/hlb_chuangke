<template>
  <div id="app">
    <router-view class="Router"></router-view>
  </div>
</template>
<script>
export default {
  created () {
    if (!localStorage.getItem('userInfo')) return
    this.$store.commit(
      'SAVE_USER_INFO',
      JSON.parse(localStorage.getItem('userInfo'))
    )
  }
}
</script>

<style lang="less" scoped>
</style>
