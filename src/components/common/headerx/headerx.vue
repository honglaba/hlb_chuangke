<template>
  <header class="y-flex y-ac">
    <div class="add y-flex y-ac">
      <router-link to="/home/location" tag="p">东莞</router-link>
      <span></span>
    </div>
    <div class="search-box y-flex y-ac">
      <span></span>
      <input type="text" placeholder="搜索附近的吃喝玩乐" />
    </div>
    <div class="screen"></div>
    <router-link class="message" to="/home/notice" tag="div"></router-link>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
header {
  height: 0.88rem;
  padding-left: 0.2rem;
  // margin-bottom: .4rem;
  background: #fff;
}
.add {
  margin-right: 0.2rem;
  p {
    font-size: 0.34rem;
    color: #333;
  }
  span {
    display: block;
    width: 0.24rem;
    height: 0.23rem;
    background: url(./images/home-top-icon1.png) no-repeat;
    background-size: 100%;
  }
}
.search-box {
  width: 4.44rem;
  height: 0.62rem;
  border-radius: 0.62rem;
  background: #f3f3f3;
  > span {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    background: url(./images/home-top-icon2.png) no-repeat;
    background-size: 100%;
    margin-left: 0.28rem;
    margin-right: 0.08rem;
  }
  > input {
    border: 0;
    background: none;
    font-size: 0.28rem;
    outline: none;
    color: #666;
    width: 3.5rem;
  }
}
.screen {
  width: 0.48rem;
  height: 0.48rem;
  background: url(./images/home-top-icon3.png) no-repeat;
  background-size: 100%;
  margin: 0 0.32rem;
}
.message {
  width: 0.48rem;
  height: 0.48rem;
  background: url(./images/home-top-icon4.png) no-repeat;
  background-size: 100%;
  position: relative;
  &::before {
    content: "";
    width: 0.16rem;
    height: 0.16rem;
    background: #f00;
    border-radius: 50%;
    position: absolute;
    right: -0.04rem;
    top: -0.04rem;
  }
}
</style>
