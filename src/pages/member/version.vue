<template>
  <div class="app">
    <my-header @left-action="routeBack" :Title="'关于我们'">
    </my-header>
    <div class="main2">
      <div class="content">
        <div class="version">
          <img src="../../assets/images/logo.png">
          <p> 版本号：v1.0.1 </p>
        </div>
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
  methods: {
    routeBack() {
      this.$router.push({ path: "/member/settings" });
    }
  }
};
</script>
<style lang="less" scoped>
.main2 {
  background: #fff;
}
.version {
  img {
    margin-top: 1.9rem;
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: 0.1rem;
  }
  text-align: center;
  padding: 0.2rem;
}
</style>
