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
  border-bottom: #e6e6e6 solid 1px !important;
  background: #fff !important;
  padding: 0 !important;
  height: .88rem !important;
}
.vux-header .vux-header-title > span {
  color: #333;
}
.vux-header-title-area, .vux-header .vux-header-title{
  height: .88rem !important;
  line-height: .88rem !important;
  font-size:.4rem !important;
}
.vux-header .vux-header-left{
  top: 50% !important;
  margin-top: -.17rem;
}
.vux-header .vux-header-left .left-arrow{
  width: .2rem !important;
  height: .34rem !important;
  background: url(../../static/images/top-return-icon.png) no-repeat;
  background-size:100%;
  top: 0 !important;
  left: 0 !important;
}
.vux-header .vux-header-left .left-arrow:before{
  content: none !important;
}
.vux-header .vux-header-left{
  left: .3rem;
}
</style>
