<template>
  <!-- 文章详情 -->
  <div class="art-wrap">
    <div class="art-title">
      <h2>{{ Cup.title }}</h2>
    </div>
    <div class="art-content" v-html="Cup.content">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Cup: {
      type: Object
    }
  },
  created() {
    this.$printf(this.Cup);
  }
};
</script>

<style lang="less">
.art-wrap {
  .art-title {
    margin-bottom: 0.2rem;
  }
  .art-content {
    width: 100%;
    word-break: break-all;
    img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }
}
</style>
