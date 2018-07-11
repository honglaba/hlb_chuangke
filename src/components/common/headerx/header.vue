<template>
  <div class="hlbheader">
    <div class="h-wrapper">
      <div class="h-back" @click="routeBack"><img src="~static/images/top-return-icon.png"></div>
      <div class="h-title">
        <span>{{ Title || '标题' }}</span>
      </div>
      <div class="h-do">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "x-header",
  props: {
    Title: String
  },
  methods: {
    routeBack() {
      this.$emit("left-action");
    }
  }
};
</script>

<style lang="less" scoped>
.hlbheader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background: #fff;
  &::after {
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
  .h-wrapper {
    position: relative;
    text-align: center;
    font-size: 0.4rem;
    .h-back {
      position: absolute;
      text-align: left;
      top: 0;
      padding: 0 0.3rem;
      img {
        width: 0.2rem;
        height: 0.34rem;
      }
    }
    .h-title {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .h-do {
      position: absolute;
      right: 0.3rem;
      top: 0;
      font-size: 0.3rem;
      color: #666;
      a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
