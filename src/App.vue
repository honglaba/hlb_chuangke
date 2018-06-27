<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <Footerx v-if="hasFooter" :linkOption="linkOption"></Footerx>
  </div>
</template>
<script>
export default {
  watch: {
    $route (val, oldval) {
      this.linkOption = this.$route.fullPath.split('/')[1]
      this.hasFooter = !!val.meta.index
      if (this.hasFooter) {
        this.transitionName =
          val.meta.index > oldval.meta.index ? 'slide-left' : 'slide-right'
      }
    }
  },
  data () {
    return {
      transitionName: 'slide-right',
      hasFooter: true,
      linkOption: null
    }
  },
  created () {
    this.linkOption = this.$route.fullPath.split('/')[1]
    this.hasFooter = !!this.$route.meta.index
    if (!localStorage.getItem('userInfo')) return
    this.$store.commit(
      'SAVE_USER_INFO',
      JSON.parse(localStorage.getItem('userInfo'))
    )
  }
}
</script>

<style lang="less" scoped>
.Router {
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
