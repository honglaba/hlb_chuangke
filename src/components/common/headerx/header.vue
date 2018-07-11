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
  name: 'x-header',
  props: {
    Title: String
  },
  methods: {
    routeBack () {
      this.$emit('left-action')
    }
  }
}
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 0.4rem;
    .h-back {
      padding-left: 0.3rem;
      width: 0.58rem;
      margin-right: 0.62rem;
      text-align: left;
      img {
        width: 0.2rem;
        height: 0.34rem;
      }
    }
    .h-title {
      flex: 2;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .h-do {
      margin-right: 0.2rem;
      width: 1.3rem;
      font-size: 0.3rem;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      a {
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
