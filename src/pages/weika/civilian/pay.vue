<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'微卡支付'"></my-header>
    <div class="main">
      <div class="content">

        <div class="address_box">
          <div class="none" v-if="!hasReceiverAddress">
            <router-link :to="{path: '/member/address_add'}">
              <span class="add">新增收货地址</span>
            </router-link>
          </div>

          <group gutter="5px" v-else>
            <cell
            :link="{path: '/member/address'}"
            :title="'收货地址：' + hasReceiverAddress.address"
            :inline-desc="hasReceiverAddress.name + '，' + hasReceiverAddress.mobile_phone"
            :border-intent="false"></cell>
          </group>
          <img src="../images/address_bline.png">
        </div>

        <div class="paybox pd20">
          <img src="../images/pay_ad.png">
          <group gutter="5px" v-if="Object.keys(mitem).length > 0">
            <cell title="购买方式" value="在线支付"></cell>
            <popup-radio title="支付方式" :options="paytypeList" v-model="paytype">
              <template slot-scope="props" slot="each-item">
                <p>
                  <img src="~assets/images/weixin.png" class="vux-radio-icon">微信支付
                </p>
              </template>
            </popup-radio>
            <cell title="支付金额">
              <span style="color: #f5232e">￥{{ mitem.price }}</span>
            </cell>
            <cell title="奖励积分">
              <span style="color: #ff7e32">{{ mitem.price }}积分</span>
            </cell>
          </group>
          <div class="tijiao">
            <button class="btn-aoc" @click="_pay">立即支付</button>
          </div>
          <div class="tips">
            <p>开通即视为同意
              <span>&#60;&#60;创客微卡会员用户协议&#62;&#62;</span>
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
                <a href="javascript:;">
                  <span><img src="../images/a1.png"></span>
                  <span>优惠购物</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a2.png"></span>
                  <span>线下消费</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a3.png"></span>
                  <span>分享赚钱</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a4.png"></span>
                  <span>1元疯抢</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a5.png"></span>
                  <span>免费体验</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a6.png"></span>
                  <span>我要领券</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a7.png"></span>
                  <span>专享活动</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a8.png"></span>
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
import { wxpay } from 'tools/util'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import {
  XInput,
  Selector,
  Group,
  PopupPicker,
  Datetime,
  Picker,
  Cell,
  PopupRadio
} from 'vux'
export default {
  data () {
    return {
      paytype: '微信',
      paytypeList: ['微信'],
      mitem: {}
    }
  },
  computed: {
    hasReceiverAddress () {
      let defaultAddr = {}
      if (this.receiverAddressGetter.length > 0) {
        this.receiverAddressGetter.forEach(ele => {
          if (ele.is_default === 1) {
            defaultAddr = ele
          }
        })
        return defaultAddr
      } else {
        return false
      }
    },
    ...mapGetters(['WkInvGetter', 'payAddress', 'receiverAddressGetter', 'shoppingCart'])
  },
  async created () {
    await this.HTTP_receiverAddress()
    this.updateCurrTodo('')
    this.mitem = this.shoppingCart
  },
  methods: {
    _pay () {
      let inbObj = {
        goods_id: this.mitem.id,
        is_invite: 0,
        trade_type: 'weixinjsbridge'
      }
      if (this.WkInvGetter) {
        inbObj.is_invite = 1
        inbObj.invite_id = this.WkInvGetter
      }

      let realAddress = {
        consignee: this.hasReceiverAddress.name,
        mobile: this.hasReceiverAddress.mobile_phone,
        province: this.hasReceiverAddress.province_id,
        city: this.hasReceiverAddress.city_id,
        borough: this.hasReceiverAddress.borough_id,
        address: this.hasReceiverAddress.address
      }

      this.updateShoppingCard('') // 清空购物车

      this.Wk_Order(Object.assign(inbObj, realAddress))
        .then(res => {
          wxpay(/* 回调 */this.onBridgeReady, /* 参数 */{order_id: res.data.order_id, trade_type: 'weixinjsbridge'}) // 调起微信支付
        })
        .catch(err1 => {
          this.$router.push({path: '/member/order/order_list/1'})
        })
    },
    onBridgeReady (val) {
      this.Wk_Pay(val)
        .then(res => {
          let result = res.data
          this.invId(null) // clear
          window.WeixinJSBridge.invoke('getBrandWCPayRequest', result, res => {
            if (res.err_msg === 'get_brand_wcpay_request:ok') { this.wxSuccessCall() }
            if (
              res.err_msg === 'get_brand_wcpay_request:fail' ||
              res.err_msg === 'get_brand_wcpay_request:cancel'
            ) { this.wxErrCall() }
          })
        })
    },
    wxSuccessCall () {
      this.HTTP_UserInfo() // 更新用户信息后再跳转
        .then(res1 => {
          this.updateUsr(res1.data)
          this.$router.push({ path: '/weika' })
        })
    },
    wxErrCall () {
      this.$router.push({path: '/member/order/order_list/1'})
    },
    routeBack () {
      this.$router.go(-1)
    },
    ...mapMutations({ invId: 'SET_WEIKA_INVID', updateUsr: 'SET_USER_INFO', updateCurrTodo: 'UPDATE_CURRENT_OPERATION', updateShoppingCard: 'SAVE_SHOPPING_CART' }),
    ...mapActions(['Wk_Pay', 'HTTP_UserInfo', 'Wk_Order', 'User_CancelOrder', 'Wk_Query', 'HTTP_receiverAddress'])
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/member/address_add' || to.path === '/member/address') {
      this.updateCurrTodo('Wkbuy')
    } else {
      this.updateCurrTodo('')
    }
    next()
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
}
</script>
<style lang="less" scoped>
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
        background: url("../images/l_jiantou.png") center no-repeat;
        height: 50%;
      }
      &::after {
        display: inline-block;
        position: absolute;
        right: -0.6rem;
        top: 25%;
        content: "";
        width: 0.4rem;
        background: url("../images/r_jiantou.png") center no-repeat;
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
.address_box {
  background: #fff;
  margin-bottom: 0.1rem;
  .none {
    text-align: center;
    .add {
      margin: 0.3rem 0 0.3rem 0;
      display: inline-block;
      line-height: 0.7rem;
      padding: 0 0.3rem;
      border: #e5e5e5 solid 1px;
      border-radius: 5rem;
      color: #333;
    }
  }
  img {
    width: 100%;
    height: 0.06rem;
  }
}
</style>
