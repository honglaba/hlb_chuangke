<template>
    <div class="app">
       <x-header :left-options="{backText: ''}" title="提现"><router-link to="withdraw_log" slot="right">提现记录</router-link></x-header>
        <div class="main">
            <div class="content">
                <div class="base_box pd20 mt20">
                    <div class="tit">
                        <div class="l">选择到账户</div>
                        <div class="r"></div>
                    </div>
                    <ul class="account">
                        <li class="on">
                            <div class="left">
                                <img src="../../assets/images/weixin.png">微信
                            </div>
                            <div class="right">
                                <span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <img src="../../assets/images/weixin.png">微信
                            </div>
                            <div class="right">
                                <span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="left"><img src="../../assets/images/zhifubao.png">支付宝
                            </div>
                            <div class="right">

                                <router-link to="bind">未绑定,先去绑定<img src="../../assets/images/you1.png"></router-link>

                            </div>
                        </li>
                    </ul>
                    <!-- <group>
                        <radio :selected-label-style="{color: '#09BB07'}" :options="accountLists" v-model="defaultAccount" @on-change="change"></radio>
                    </group> -->
                </div>
                <div class="base_box pd20 mt20">
                    <div class="tit">
                        <div class="l">提现金额</div>
                        <div class="r" @click="viewrules">提现规则<img src="../../assets/images/you1.png"></div>
                    </div>
                    <group>
                        <x-input title="¥" :is-type="be2333" placeholder="" @on-focus="onFocus" required style='color:#000;font-weight: bold;font-size: .6rem;' type="number"></x-input>
                    </group>
                    <p class="mtb20 c999">可提现金额￥300.额外可用作金额￥50.</p>
                    <p class="mb20">
                        <button class="btn-aoc">立即提现</button>
                    </p>
                </div>
            </div>
        </div>
        <Footerx></Footerx>
    </div>
</template>
<script>
import { Radio, XInput } from "vux";

export default {
  data() {
    return {
      defaultAccount: "1",
      accountLists: [
        {
          icon: require("../../assets/images/weixin.png"),
          key: "1",
          value: "微信"
        },
        {
          icon: require("../../assets/images/zhifubao.png"),
          key: "2",
          value: "支付宝"
        }
      ]
    };
  },
  components: {
    Radio,
    XInput
  },
  methods: {
    viewrules:function(){
        alert('adsad');
    },
    onFocus(val, $event) {
      console.log("on focus", val, $event);
    }
  }
};
</script>
<style lang="less" scoped>
.base_box .tit {
  height: auto;
  margin-bottom: 0.2rem;
}
.btn-aoc {
  background-image: -webkit-linear-gradient(225deg, #f97d81 0, #ffb084 94%);
  background-image: linear-gradient(225deg, #f97d81 0, #ffb084 94%);
}
.account li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  position: relative;
  .left {
    display: flex;
    align-items: center;
  }
  img {
    width: 0.48rem;
    height: 0.48rem;
    margin-right: 0.1rem;
  }
  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px dashed #e6e6e6;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 0.58rem;
  }
  &:first-child::before {
    width: 0;
  }
  a {
    color: #999;
  }
  .right {
    a {
      display: flex;
      align-items: center;
    }
    img {
      width: 0.16rem;
      height: 0.28rem;
      margin-left: 0.1rem;
      margin-right: 0;
    }
    span {
      width: 0.48rem;
      height: 0.48rem;
      background: url("../../assets/images/radio_unon.png") no-repeat;
      display: block;
      background-size: cover;
    }
  }
  &.on {
    .right {
      span {
        background: url("../../assets/images/radio_on.png") no-repeat;
        background-size: cover;
      }
    }
  }
}
.weui-cell {
  border-bottom: solid 1px #e6e6e6;
  padding-left: 0;
}
</style>