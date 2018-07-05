<template>
  <div>
    <!-- 首页 -->
    <x-header :left-options="{backText: ''}" :title="routeTitle"></x-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
  },
  computed: {
    ...mapGetters(['userInfoGetter']),
    routeTitle () {
      return this.$route.meta.title
    }
  }
}
</script>

<style scoped>

</style>
