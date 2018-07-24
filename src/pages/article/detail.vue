<template>
  <!-- 文章详情 -->
  <div class="article-detail">
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
  created () {
    this.$printf(this.Cup)
  }
}
</script>

<style lang="less" scoped>
// @import "~style/theme.less";
.article-detail {
  position: relative;
}

.art-content {
  width: 100%;
  word-break: break-all;
}
</style>
