<template>
  <footer class="y-flex y-ac vux-1px-t">
    <router-link to="/" class="flex1" v-bind:class="{cur: /home/g.test(evenRoute) || evenRoute === ''}">
      <span class="nav-ico type3"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/shop" class="flex1" v-bind:class="{cur: /shop/g.test(evenRoute)}">
      <span class="nav-ico type2"></span>
      <p>附近</p>
    </router-link>
    <router-link to="/weika" class="flex1" v-bind:class="{cur: /weika/g.test(evenRoute)}">
      <span class="nav-ico type1"></span>
      <p>创客微卡</p>
    </router-link>
    <router-link to="/member" class="flex1" v-bind:class="{cur: /member/g.test(evenRoute)}">
      <span class="nav-ico type4"></span>
      <p>我的</p>
    </router-link>
  </footer>
</template>
<script>
export default {
  props: {
    linkOption: String
  },
  computed: {
    evenRoute () {
      return this.$route.fullPath.split('/')[1]
    }
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
footer {
  width: 7.5rem;
  height: 1rem;
  position: fixed !important;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  background: #fff;
  z-index: 100;
  font-size: 0.24rem;
  color: #9a9795;
  text-align: center;
  .nav-ico {
    display: block;
    width: 0.44rem;
    height: 0.44rem;
    background: url(./images/navico.png) no-repeat;
    background-size: 1.76rem;
    margin: 0 auto;
    margin-bottom: 0.05rem;
  }
  .nav-ico.type1 {
    background-position: 0 -0.44rem;
  }
  .nav-ico.type2 {
    background-position: -0.44rem -0.44rem;
  }
  .nav-ico.type3 {
    background-position: -0.88rem -0.44rem;
  }
  .nav-ico.type4 {
    background-position: -1.32rem -0.44rem;
  }
  a {
    color: #9a9795;
  }
  .cur {
    color: #f60;
    .nav-ico.type1 {
      background-position: 0 0;
    }
    .nav-ico.type2 {
      background-position: -0.44rem 0;
    }
    .nav-ico.type3 {
      background-position: -0.88rem 0;
    }
    .nav-ico.type4 {
      background-position: -1.32rem 0;
    }
  }
}
</style>
