<template>
  <div class="app">
    <div class="main">
      <div class="content">
        <div class="topbg pd20">
          <div class="topbar">
            <div class="left">
              <img src="./images/fanhui.png">
            </div>
            <div class="right">
              <ul>
                <li><img src="./images/sm.png"></li>
                <li><img src="./images/xiaoxi.png"></li>
                <li><img src="./images/shezhi.png"></li>
              </ul>
            </div>
          </div>
          <div class="box1">
            <div class="left">
              <div class="tx"><img src="./images/mrtx.png"></div>
              <div class="uinfo">
                <p class="name">化妆的小蜜</p>
                <p class="tips">创客为您节约了65.00元</p>
              </div>
            </div>
            <div class="right">
              <p><img src="./images/jifen.png">积分：800</p>
            </div>
          </div>
        </div>
        <div class="base_box pd20">
          <div class="tit">
            <div class="l">我的订单</div>
            <div class="r">全部订单<img src="./images/you1.png"></div>
          </div>
          <ul class="myorder">
            <li>
              <span><img src="./images/daifukuan.png"></span>
              <span>待付款</span>
              <span class="num">8</span>
            </li>
            <li>
              <span><img src="./images/daishouhuo.png"></span>
              <span>待收货</span>
            </li>
            <li>
              <span><img src="./images/daishiyong.png"></span>
              <span>待使用</span>
            </li>
            <li>
              <span><img src="./images/daipinglun.png"></span>
              <span>待评论</span>
              <span class="num">12</span>
            </li>
            <li>
              <span><img src="./images/daituikuan.png"></span>
              <span>待退款</span>
            </li>
          </ul>
          <div class="tit">
            <div class="l">我的积分</div>
            <div class="r"><img src="./images/you1.png"></div>
          </div>
          <div class="tit">
            <div class="l">我要兑换</div>
            <div class="r"><img src="./images/you1.png"></div>
          </div>
          <div class="tit">
            <div class="l">我的收藏</div>
            <div class="r"><img src="./images/you1.png"></div>
          </div>
          <div class="tit">
            <div class="l">帮助中心</div>
            <div class="r"><img src="./images/you1.png"></div>
          </div>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
import { Swiper } from "vux";
export default {};
</script>
<style lang="less" scoped>
.main {
  top: 0;
  background: #fff;
}
.topbg {
  background: url("./images/wode_bg.png") center center no-repeat;
  min-height: 2.6rem;
  background-size: cover;
  padding: 0.2rem;
}
.topbar {
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 0.4rem;
    height: 0.4rem;
  }
  .right {
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 0.4rem;
      }
    }
  }
}
.box1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.45rem;
  .left {
    display: flex;
    padding: 0.1rem 0;
    align-items: center;
    .tx {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.2rem;
      img {
        border-radius: 1rem;
      }
    }
    .uinfo {
      .name {
        font-size: 0.3rem;
        display: flex;
        align-items: center;
        img {
          width: 0.34rem;
          height: 0.25rem;
          margin-left: 0.1rem;
        }
      }
      .tips {
        color: #fff;
        font-size: 0.24rem;
      }
    }
  }
  .right {
    background-image: -webkit-linear-gradient(225deg, #f5252d 0, #ff7d32 94%);
    background-image: linear-gradient(225deg, #f5252d 0, #ff7d32 94%);
    padding: 0.1rem 0.2rem 0.1rem 0.3rem;
    border-radius: 1rem 0 0 1rem;
    text-align: center;
    width: 1.6rem;
    margin-right: -0.2rem;
    p {
      color: #fff;
      font-size: 0.2rem;
      display: flex;
      align-items: center;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.1rem;
      }
    }
  }
}
.base_box .tit {
  border-bottom: #e6e6e6 dashed 1px;
}
.myorder {
  position: relative;
  display: flex;
  padding: 0.2rem 0;
  border-bottom: #e6e6e6 dashed 1px;
  li {
    width: 25%;
    text-align: center;
    position: relative;
    span {
      display: block;
    }
    .num{
      position: absolute;
      top: 0;
      right: 0;
      width: .3rem;
      height: .3rem;
      background: #ff7f32;
      color: #ffffff;
      border-radius: 1rem;
      font-size: .2rem;
      text-align: center;
    }
  }
}
</style>