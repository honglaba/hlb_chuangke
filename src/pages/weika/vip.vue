<template>
    <div class="app">
      <x-header :left-options="{backText: ''}" title="微卡VIP首页"></x-header>
        <div class="main">
            <div class="content">
                <div class="wkbg pd20">
                    <div class="wkbox">
                        <div class="box1">
                            <div class="left">
                                <div class="tx"><img src="http://thirdwx.qlogo.cn/mmopen/odejae0mVFZnfY3M68PlfkwhHJStxviahZO8oLsKxmeQv50LEibdBbqvc3tGtSibZib814ms21yVPCUPhYCQ90b8dlr6bC57rgKw/132"></div>
                                <div class="uinfo">
                                    <p class="name">化妆的小蜜<img src="./images/vip1.png"></p>
                                    <p class="tips">创客为您节约了65.00元</p>
                                </div>
                            </div>
                            <div class="right">
                                <p class="a1">推广ID</p>
                                <p class="a2">28C5AP</p>
                            </div>
                        </div>
                        <div class="box2">
                            <ul>
                                <li>
                                    <span>可用佣金(元)</span>
                                    <span>65.00</span>
                                    <span> <router-link to="withdraw">提现</router-link></span>
                                </li>
                                <li>
                                    <span>累计佣金(元)</span>
                                    <span>85.00</span>
                                    <span><router-link to="income">查看</router-link></span>
                                </li>
                                <li>
                                    <span>我的推荐(人)</span>
                                    <span>105</span>
                                    <span><router-link to="recommend_list">查看</router-link></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="fuwu">
                    <div class="fuwu_tab">
                        <div class="left">创客微卡VIP1权益</div>
                        <div class="right">
                            <a href="#">全部权益</a>
                        </div>
                    </div>
                    <div class="fuwu_con">
                        <ul>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a1.png"></span>
                                    <span>优惠购物</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a2.png"></span>
                                    <span>线下消费</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a3.png"></span>
                                    <span>分享赚钱</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a4.png"></span>
                                    <span>1元疯抢</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a5.png"></span>
                                    <span>免费体验</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a6.png"></span>
                                    <span>我要领券</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a7.png"></span>
                                    <span>专享活动</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/a8.png"></span>
                                    <span>邀请有礼</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fuwu jingli">
                    <div class="fuwu_tab">
                        <div class="left">您的专属客服经理</div>
                        <div class="right">
                            <a href="#">工作时间9:00-21:00</a>
                        </div>
                    </div>
                    <div class="fuwu_con">
                        <ul>
                            <li>
                                <a href="#">
                                    <span><img src="./images/vip1-1.png"></span>
                                    <span>您的客服经理</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/vip1-2.png"></span>
                                    <span>专属经理微信</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><img src="./images/vip1-3.png"></span>
                                    <span>专属经理电话</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fuwu duihuan">
                    <div class="fuwu_tab">
                        <div class="left">会员专享精品兑换</div>
                        <div class="right">
                            <a href="#">可用积分:500</a>
                        </div>
                    </div>
                    <div class="fuwu_con">
                        <scroller lock-y scrollbar-x>
                            <div class="dhbox">
                                <div class="dhbox-item" v-for="i in 7">
                                    <span>{{' ' + i + ' '}}</span>
                                </div>
                            </div>
                        </scroller>

                    </div>
                </div>
            </div>
        </div>
     <Footerx></Footerx>
    </div>
</template>
<script>
import { Scroller } from "vux";

export default {
  components: {
    Scroller
  }
};
</script>
<style lang="less" scoped>
.wkbg {
  background: #fff;
}
.wkbox {
  background: #2e2c58;
  color: #fff;
  border-radius: 0.1rem;
  padding: 0.3rem 0;
  .box1 {
    display: flex;
    justify-content: space-between;
    padding-left: 0.25rem;
    align-items: center;
    padding-bottom: 0.5rem;
    .left {
      display: flex;
      padding: 0.1rem 0;
      align-items: center;
      .tx {
        width: 0.6rem;
        height: 0.6rem;
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
          color: #8f8fb3;
          font-size: 0.24rem;
        }
      }
    }
    .right {
      background: #d1b358;
      padding: 0.1rem 0.15rem 0.1rem 0.3rem;
      border-radius: 1rem 0 0 1rem;
      text-align: center;
      .a1 {
        color: #333;
        font-size: 0.2rem;
      }
    }
  }
  .box2 {
    padding: 0 0.3rem;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        position: relative;
        flex: 1;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          right: 0;
          top: 10%;
          content: "";
          width: 1px;
          background: #3d3d66;
          height: 80%;
        }
        &:nth-child(3)::after {
          width: 0;
        }
        span {
          display: block;
          text-align: center;
          &:nth-child(1) {
            font-size: 0.24rem;
            color: #8f8fb2;
          }
          &:nth-child(2) {
            font-size: 0.3rem;
          }
          &:nth-child(3) {
            display: table;
            margin: 0.2rem auto 0;
            border: #8f8fb3 solid 1px;
            padding: 0 0.2rem;
            border-radius: 1rem;
            line-height: 0.38rem;
            a{ color: #ffffff;}
          }
        }
      }
    }
  }
}

.fuwu {
  background: #fff;
  margin-top: 0.2rem;
  text-align: center;
  .fuwu_tab {
    padding: 0.1rem 0.2rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #e7e7e7 dashed 1px;
    .left {
      position: relative;
      font-size: 0.32rem;
      &::before {
        display: inline-block;
        position: absolute;
        left: -0.2rem;
        top: 25%;
        content: "";
        width: 0.06rem;
        background: #d1b358;
        height: 50%;
      }
    }
    .right a {
      color: #999;
    }
  }
  .fuwu_con {
    padding: 0.2rem;
    text-align: center;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 0.4rem 0;
        a {
          display: block;
          color: #333;
          span {
            display: block;
            img {
              width: 0.48rem;
              height: 0.48rem;
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
  }
}
.jingli .fuwu_con ul li {
  flex: 3;
  border: #e6e6e6 solid 1px;
  margin-right: 0.12rem;
  &:nth-child(3) {
    margin-right: 0;
  }
}
.duihuan .fuwu_con ul li {
  flex: 3;
}
.dhbox {
  height: 100px;
  position: relative;
  width: 1490px;
}
.dhbox-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.dhbox-item:first-child {
  margin-left: 0;
}
</style>