<template>
        <x-header :left-options="{backText: ''}">{{headerTitle}}</x-header>
</template>
<script>
import { XHeader } from "vux";
export default {
  data() {
    return {
      headerTitle: "登录"
    };
  },
  components: {
    XHeader
  }
};
</script>
<style lang="less" scoped>
.vux-header{
  border-bottom: #e6e6e6 solid 1px;
  background: #fff;
  .vux-header-title{
    color: #333;
  }
}
</style>
