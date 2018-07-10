<template>
    <div class="app">
        <x-header :left-options="{backText: ''}" title="店铺二维码">
        </x-header>
        <div class="main2">
            <div class="content">
                <img src="../../assets/images/logo.png" class="qrcode">
                <p class="shopname"> 大岗修庙烧鸡店</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.main2 {
  background: #fff;
}
.content {
  text-align: center;
  padding: 0.2rem;
  .qrcode {
    margin-top: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.2rem;
  }
  .shopname {
    font-size: 0.36rem;
  }
}
</style>
