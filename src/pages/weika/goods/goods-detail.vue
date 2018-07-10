<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="商品详情">
    </x-header>
    <div class="main2">
      <div class="content">
        <p> 这里是微卡商品详情页面内容</p>
      </div>
    </div>
    <div class="fixhandle">
      <button class="btn-aoc">立即购买</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.main2 {
  background: #fff;
}
.content {
  text-align: center;
  padding: 0.2rem;
}
.fixhandle {
  position: fixed;
  width: 100%;
  height: 1rem;
  bottom: 0;
  .btn-aoc {
    height: 100%;
    width: 100%;
  }
}
</style>
