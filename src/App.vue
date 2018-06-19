<template>
  <router-view></router-view>
</template>
<script>
export default {
  created () {
    if (!localStorage.getItem('userInfo')) return
    this.$store.commit('SAVE_USER_INFO', JSON.parse(localStorage.getItem('userInfo')))
  }
}
</script>
