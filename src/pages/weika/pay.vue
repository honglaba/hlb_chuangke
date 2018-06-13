<template>
    <div class="app">
        <x-header :left-options="{backText: ''}" title="微卡购买"></x-header>
        <div class="main">
            <div class="content">
                <div class="paybox pd20">
                    <img src="./images/pay_ad.png">
                    <group gutter="5px  ">
                        <cell title="购买方式" value="在线支付"></cell>
                        <popup-radio title="支付方式" :options="paytypeList" v-model="paytype">
                            <template slot-scope="props" slot="each-item">
                                <p>
                                 <img  src="../../assets/images/weixin.png" class="vux-radio-icon"> {{ props.label }}----{{ props.index + 1 }}
                                </p>    
                            </template>
                        </popup-radio>
                    <cell title="支付金额">
                        <span style="color: #f5232e">￥298.00</span>
                    </cell>
                    <cell title="奖励积分">
                        <span style="color: #ff7e32">298.00积分</span>
                    </cell>
                    </group>
                    <div class="tijiao">
                        <button class="btn-aoc">立即支付</button>
                    </div>
                    <div class="tips">
                        <p>开通即视为同意
                            <span>
                                <<创客微卡会员用户协议>></span>
                        </p>
                    </div>
                </div>
                <div class="fuwu">
                    <div class="fuwu_tab">
                        <div class="left">创客微卡特权服务</div>
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
            </div>
        </div>
        <Footerx></Footerx>
    </div>
</template>
<script>
import {
  XInput,
  Selector,
  Group,
  PopupPicker,
  Datetime,
  Picker,
  Cell,
  PopupRadio
} from "vux";
export default {
  data() {
    return {
      paytype: "微信",
      paytypeList: ["微信", "支付宝"],
    };
  },
  components: {
    XInput,
    Group,
    Selector,
    PopupPicker,
    Datetime,
    Picker,
    Cell,
    PopupRadio
  }
};
</script>
<style lang="less" scoped>
.content .weui-cells {
  margin-top: 0;
}
.paybox {
  background: #fff;
  .tijiao {
    margin-top: 0.2rem;
  }
  .tips {
    font-size: 0.28rem;
    text-align: center;
    color: #333;
    span {
      color: #f5232e;
    }
    margin: 0.2rem;
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
    justify-content: center;
    border-bottom: #e7e7e7 dashed 1px;
    .left {
      position: relative;
      font-size: 0.32rem;
      &::before {
        display: inline-block;
        position: absolute;
        left: -0.6rem;
        top: 25%;
        content: "";
        width: 0.4rem;
        background: url("./images/l_jiantou.png") center no-repeat;
        height: 50%;
      }
      &::after {
        display: inline-block;
        position: absolute;
        right: -0.6rem;
        top: 25%;
        content: "";
        width: 0.4rem;
        background: url("./images/r_jiantou.png") center no-repeat;
        height: 50%;
      }
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
</style>