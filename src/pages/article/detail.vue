<template>
  <!-- 文章详情 -->
  <div class="article-content">
    <div class="art-title">
      <h2>{{ Cup.title }}</h2>
    </div>
    <div class="art-content" v-html="Cup.content">
      content
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

<style lang="less" scoped>
.art-title {
  margin-bottom: 0.2rem;
}
.art-content {
  width: 100%;
  word-break: break-all;
  img {
    max-width: 100%;
  }
}
</style>
