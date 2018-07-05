<template>
  <!-- 创客微卡首页 -->
  <div class="ck-weika">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    routeTitle () {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="less" scoped>

</style>
