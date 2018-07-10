<template>
  <div class="app">
    <div class="main">
      <div class="content">
        <div class="topbg pd20">
          <div class="topbar">
            <router-link to="/home" tag="div" class="left">
              <img src="./images/fanhui.png">
            </router-link>
            <div class="right">
              <ul>
                <li>
                  <router-link :to="{path: '/ccc'}"><img src="./images/sm.png"></router-link>
                </li>
                <li>
                  <router-link :to="{path: '/home/notice'}"><img src="./images/xiaoxi.png"></router-link>
                </li>
                <li>
                  <router-link :to="{path: '/member/settings'}"><img src="./images/shezhi.png"></router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="box1">
            <div class="left">
              <div class="tx"><img :src="DataTree.headimgurl"></div>
              <div class="uinfo" v-if="!DataTree.nickname">
                <p class="name">立即登录</p>
                <p class="tips">Hello,欢迎来到创客</p>
              </div>
              <div class="uinfo-login" v-else>
                <p class="name-login">{{ DataTree.nickname }}</p>
                <p class="tips-login">VIP
                  <span></span>
                </p>
              </div>
            </div>
            <div class="right">
              <p><img src="./images/jifen.png">积分：{{ DataTree.reward_point }}</p>
            </div>
          </div>
        </div>
        <div class="base_box pd20">
          <div class="tit">
            <div class="l">我的订单</div>
            <!-- <div class="r">全部订单<img src="./images/you1.png"></div> -->
            <router-link class="r" tag="div" to="member/order/order_list/0">全部订单<img src="./images/you1.png"></router-link>
          </div>
          <ul class="myorder">
            <li>
              <router-link :to="{ path:'/member/order/order_list/1' }">
                <span class="myorder-icon">
                  <img src="./images/daifukuan.png">
                  <span class="num" v-if="DataTree.unpay_order_amount > 0">
                    {{ DataTree.unpay_order_amount}}
                  </span>
                </span>
                <span>待付款</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/member/order/order_list/3'}">
                <span class="myorder-icon">
                  <img src="./images/daishouhuo.png">
                  <span class="num" v-if="DataTree.unrecevie_order_amount > 0">
                    {{ DataTree.unrecevie_order_amount }}
                  </span>
                </span>
                <span>待收货</span>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{path:'/member/order/order_list/3'}">
                <span><img src="./images/daishiyong.png"></span>
                <span>待使用</span>
              </router-link>
            </li> -->
            <li>
              <router-link :to="{path:'/member/order/order_list/4'}">
                <span class="myorder-icon">
                  <img src="./images/daipinglun.png">
                  <span class="num" v-if="DataTree.uncomment_order_amount > 0">
                    {{ DataTree.uncomment_order_amount }}
                  </span>
                </span>
                <span>待评论</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/member/order/order_list/5'}">
                <span><img src="./images/daituikuan.png"></span>
                <span>待退款</span>
              </router-link>
            </li>
          </ul>

          <router-link :to="{path:'/member/points'}">
            <div class="tit">
              <div class="l">我的积分</div>
              <div class="r"><img src="./images/you1.png"></div>
            </div>
          </router-link>
          <!-- <router-link :to="{path:'/member/exchange'}">
            <div class="tit">
              <div class="l">我要兑换</div>
              <div class="r"><img src="./images/you1.png"></div>
            </div>
          </router-link> -->
          <router-link :to="{path:'/member/favourite'}">
            <div class="tit">
              <div class="l">我的收藏</div>
              <div class="r"><img src="./images/you1.png"></div>
            </div>
          </router-link>
          <router-link :to="{ path: '/article/help_list' }">
            <div class="tit">
              <div class="l">帮助中心</div>
              <div class="r"><img src="./images/you1.png"></div>
            </div>
          </router-link>

        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
import { Swiper } from 'vux'
export default {
  props: {
    DataTree: {
      type: Object
    }
  },
  components: {
    Swiper
  }
}
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
      color: #fff;
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
        font-size: 0.23rem;
      }
    }
    .uinfo-login {
      color: #fff;
      .name-login {
        font-size: 0.3rem;
      }
      .tips-login {
        font-size: 0.23rem;
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
    img {
      height: 0.68rem;
      width: 0.68rem;
    }
    span {
      display: block;
    }
    .myorder-icon {
      width: 0.68rem;
      height: 0.68rem;
      margin-left: 50%;
      transform: translateX(-50%);
      position: relative;
      .num {
        position: absolute;
        top: -0.1rem;
        right: -0.1rem;
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        background: #ff7f32;
        color: #ffffff;
        border-radius: 1rem;
        font-size: 0.2rem;
        text-align: center;
      }
    }
  }
}
</style>
