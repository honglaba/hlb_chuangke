<template>
  <div class="head-content">

    <div class="pro-top">
      <div class="pro-top-back" @click="routeBack"><img src="~static/images/top-return-icon.png"></div>
      <div class="pro-top-mid">
        <span>{{ Title || '标题' }}</span>
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
.head-content {
  .pro-top {
    width: 100%;
    height: 0.88rem!important;
    position: relative;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 0.4rem;
    .pro-top-back {
      width: 0.88rem;
      height: 0.88rem;
      float: left;
      box-sizing: border-box;
      img {
        float: left;
        width: 0.2rem;
        height: 0.34rem;
        margin-top: 50%;
        transform: translateY(-50%);
        margin-left: 0.28rem;
      }
    }
    .pro-top-mid {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
