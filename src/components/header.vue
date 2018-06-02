<template>
  <x-header :left-options="{backText: ''}" :title="xtitle"></x-header>
</template>
<script>
import { XHeader } from "vux";
export default {
  data() {
    return {
      xtitle: "默认标题"
    };
  },
  components: {
    XHeader
  }
};
</script>
<style>
.vux-header {
  border-bottom: #e6e6e6 solid 1px !important;
  background: #fff !important;
}
.vux-header .vux-header-title > span {
  color: #333;
}
</style>
