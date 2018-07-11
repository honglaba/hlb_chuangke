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
  props: {
    Title: {
      type: String
    }
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 0.4rem;
    .h-back {
      width: 0.88rem;
      text-align: center;
      img {
        width: 0.2rem;
        height: 0.34rem;
      }
    }
    .h-title {
      overflow: hidden;
    }
    .h-do {
      width: 0.88rem;
      margin-right: 0.2rem;
      text-align: center;
      font-size: 0.4rem;
    }
  }
}
</style>
