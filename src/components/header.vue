<template>
  <x-header :left-options="{backText: ''}" :title="xtitle"></x-header>
</template>

<script>
import { XHeader } from 'vux'
export default {
  data () {
    return {
      xtitle: '默认标题'
    }
  },
  components: {
    XHeader
  }
}
</script>

<style lang="less">
.vux-header {
  background: #fff !important;
  padding: 0 !important;
  height: 0.88rem !important;
  position: relative;
}
.vux-header::after {
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  width: 100%;
  height: 1px;
  background: #e6e6e6;
  background-size: contain;
}
.vux-header .vux-header-title > span {
  color: #333;
}
.vux-header-title-area,
.vux-header .vux-header-title {
  height: 0.88rem !important;
  line-height: 0.88rem !important;
  font-size: 0.4rem !important;
}
.vux-header .vux-header-left {
  top: 50% !important;
  margin-top: -0.17rem;
}
.vux-header .vux-header-left .left-arrow {
  width: 0.2rem !important;
  height: 0.34rem !important;
  background: url(../../static/images/top-return-icon.png) no-repeat;
  background-size:100%;
  top: 0 !important;
  left: 0 !important;
}
.vux-header .vux-header-left .left-arrow:before {
  content: none !important;
}
.vux-header .vux-header-left {
  left: 0.3rem;
}
</style>
