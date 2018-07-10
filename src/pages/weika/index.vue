<template>
  <div>
    <!-- 首页 -->
    <x-header :left-options="{ backText: '', preventGoBack: true}" :title="routeTitle" @on-click-back="routeBack">
      <span slot="right" @click="_rightAction">{{ $route.meta.rtext || '' }}</span>
    </x-header>
    <keep-alive include="vip">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  created () {
    this.updateStep(1)
  },
  methods: {
    _rightAction () {
      let rtext = this.$route.meta.rtext
      if (rtext === '提现记录') {
        this.$router.push({path: '/weika/withdraw_log'})
      }
    },
    routeBack () {
      if (this.WkLoop > 1) this.updateStep(this.WkLoop - 1)
      this.$router.go(-1)
    },
    ...mapMutations({ updateStep: 'UPDATE_WEIKA_LOOP' })
  },
  computed: {
    routeTitle () {
      return this.$route.meta.title
    },
    ...mapGetters(['userInfoGetter', 'WkLoop'])
  }
}
</script>

<style scoped>
</style>
