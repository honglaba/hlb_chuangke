<template>
<div id="app">
  <x-header :left-options="{backText: ''}" title="大岗仙庙烧鸡"></x-header>
  <section>
    <router-link class="location-row" tag="a" to="#">
      <span></span>
      <p>袁屋边大道2号盈锋生活超市二层一号铺</p>
    </router-link>
    <section class="total-money">
      <p>支付金额</p>
      <!-- <p>￥300</p> -->
      <p>￥<input type="number" class="pay-input" placeholder="请输入金额" v-model="money"/></p>
      <div class="vux-1px-t">
        预计您将获得<span class="#cf00">300</span>积分
      </div>
    </section>

    <section class="chuangke-block" v-if="chuangke">
      <ul>
        <li class="vux-1px-b">
          <div class="ask">
            <p>是否使用创客微卡佣金</p>
            <span @click="showTip"></span>
          </div>
          <div class="use-btn">全部使用</div>
        </li>
        <li class="vux-1px-b" v-if="commission">
          <div class="commission">
            <span>￥</span>
            <input type="text" placeholder="输入佣金金额" />
          </div>
          <div class="c999 fz24">可用余额800元</div>
        </li>
        <li class="vux-1px-b" v-else>
          <div class="commission">
            <span>￥290</span>
          </div>
          <div class="c999 fz24">余额用完了</div>
        </li>
        <li  class="vux-1px-b">
          <div class="fz30 c666">剩余需要支付的金额</div>
          <div class="surplus">￥10</div>
        </li>
      </ul>
    </section>

    <section class="pay-type">
      <p>选择支付方式</p>
      <ul>
        <li class="cur">
          <span class="ico weixin"></span>
          <div class="info">
            <p>微信</p>
            <span class="select-ico"></span>
          </div>
        </li>
         <!-- <li>
            <span class="ico zhifubao"></span>
            <div class="info">
              <p>支付宝</p>
              <span class="select-ico" v-if="binding"></span>
              <router-link v-else to="#" tag="div" class="binding-tag">
                未绑定，先去绑定
              </router-link>
            </div>
          </li> -->
      </ul>
    </section>
  </section>
  <div class="pay-btn" @click="weixinPay">
    已和店员确定，立即买单
  </div>
  <section class="mask" v-if="mask" @click.self="maskTap">
    <div class="inner">
        <p>扣费细则</p>
        <p>支付过程中，您可以使用创客微卡推广中平台所赠送的佣金，可直接抵现使用。
优先使用代用金，当佣金不足时，您需要额外支付剩余的费用。</p>
        <div @click="maskTap">我知道了</div>
    </div>
  </section>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      binding: false,
      chuangke: false,
      commission: true,
      mask: false,
      money: ''
    }
  },
  methods: {
    ...mapActions(['HTTP_pay']),
    showTip  () {
      this.mask = true
    },
    maskTap  () {
      this.mask = false
    },
    onBridgeReady () {
      this.HTTP_pay(this.money)
        .then(res => {
          window.WeixinJSBridge.invoke(
            'getBrandWCPayRequest', res.data, res => {
              alert('成功')
            })
        })
    },
    weixinPay  () {
      let that = this
      if (this.money) {
        if (typeof WeixinJSBridge === 'undefined') {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', that.onBridgeReady, false)
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', that.onBridgeReady)
            document.attachEvent('onWeixinJSBridgeReady', that.onBridgeReady)
          }
        } else {
          that.onBridgeReady()
        }
      } else {
        alert('请输入金额')
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.location-row{
  width: 100%;
  height: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font: .26rem;
  color: #999;
  >span{
    display: block;
    width: .31rem;
    height: .36rem;
    background: url(./images/icon_pay_top.png) no-repeat;
    background-size:100%;
    margin-right: .1rem;
  }
}
.total-money{
  background: #fff;
  padding: .24rem .2rem 0 .2rem;
  margin-bottom: .2rem;
  >p:nth-child(1){
    font-size: .32rem;
    margin-bottom: .48rem;
        line-height: 100%;
  }
  >p:nth-child(2){
    font-weight: bold;
    font-size: .64rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: .24rem;
    line-height: 100%;
    display: flex;
  }
  .pay-input{
    font-size: .64rem;
    border: 0;
    outline: 0;
  }
  >div{
    height: .64rem;
    line-height: .64rem;
    color:#999;
    font-size: .24rem;
    >span{
      color: #f00;
    }
  }
}
.pay-type{
  background: #fff;
  padding: .4rem 0 0 .2rem;
  >p:nth-child(1){
    font-size: .32rem;
    margin-bottom: .45rem;
  }
  >ul{
    >li{
      display: flex;
      align-items: center;
      height: .9rem;
      .ico{
        width: .6rem;
        height: .6rem;
        margin-right: .2rem;
      }
      .ico.weixin{
         background: url(../../assets/images/weixin.png) no-repeat;
         background-size:100%;
      }
      .ico.zhifubao{
         background: url(../../assets/images/zhifubao.png) no-repeat;
         background-size:100%;
      }
      .info{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px dashed #e6e6e6;
        height: .9rem;
        font-size: .3rem;
        padding-right: .3rem;
        .select-ico{
          width: .44rem;
          height: .44rem;
          border:.03rem solid #ccc;
          box-sizing: border-box;
          border-radius: 50%;
        }
        .binding-tag{
          font-size:.24rem;
          color: #999;
          padding-right: .28rem;
          position: relative;
        }
        .binding-tag:before{
          content: "";
          width: .13rem;
          height: .21rem;
          background: url(./images/icon_pay_into.png) no-repeat;
          background-size: 100%;
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -.105rem;
        }
      }
    }
    >.cur .select-ico{
      background: url(../../assets/images/radio_on.png) no-repeat;
      background-size:100%;
      border: none !important;
    }
    >li:nth-child(last) .info{
      border-bottom: none;
    }
  }
}
.pay-btn{
  width: 7rem;
  height: .9rem;
  background: linear-gradient(to right,#ff7f32,#f5222d);
  margin: 0 auto;
  text-align: center;
  line-height: .9rem;
  color: #fff;
  font-size: .32rem;
  border-radius: .06rem;
  margin-top: .2rem;
}
.chuangke-block{
  padding: 0 .2rem;
  background: #fff;
  font-size: .32rem;
  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.26rem;
    .surplus{
      color: #f00;
      font-family: Arial, Helvetica, sans-serif;
      font-size: .38rem;
      font-weight: bold;
    }
    .commission{
      display: flex;
      align-items: center;
      >span{
        font-size: .4rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        margin-right: .14rem;
      }
      >input{
        border: 0;
        font-size: .32rem;
        outline: none;

      }
    }
    .ask{
      display: flex;
      align-items: center;
      >span{
        width: .32rem;
        height: .32rem;
        background: url(./images/icon_pay_help.png) no-repeat;
        background-size:100%;
        margin-left: .16rem;
      }
    }
    .use-btn{
        font-size: .24rem;
        color: #999;
        padding-right: .28rem;
        position: relative;
      }
      .use-btn:before{
          content: "";
          width: .13rem;
          height: .21rem;
          background: url(./images/icon_pay_into.png) no-repeat;
          background-size: 100%;
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -.105rem;
      }
  }
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
  z-index: 999;
  .inner{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left:-3.05rem;
    margin-top: -2.2rem;
    width: 6.1rem;
    height: 4.4rem;
    background: #fff;
    border-radius: .16rem;
    padding: .38rem .4rem 0 .4rem;
    box-sizing: border-box;
    >p:nth-child(1){
      font-size: .4rem;
      text-align: center;
      margin-bottom: .2rem;
    }
    >p:nth-child(2){
      font-size: .28rem;
      text-align: center;
      color: #666;
      line-height: .5rem;
      margin-bottom: .3rem;
    }
    >div{
      width: 2.2rem;
      height: .8rem;
      background: linear-gradient(to right,#ff7f32,#f5222d);
      color: #fff;
      font-size: .32rem;
      border-radius: .08rem;
      text-align: center;
      line-height: .8rem;
      margin: 0 auto;
    }
  }
}
</style>
