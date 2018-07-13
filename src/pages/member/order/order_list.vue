<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'我的订单'"></my-header>
    <div class="tab">
      <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
        <tab-item @on-item-click="handler(0)" data-id=0 :selected="nowSeen == 0">全部</tab-item>
        <tab-item @on-item-click="handler(1)" data-id=1 :selected="nowSeen == 1">待付款</tab-item>
        <tab-item @on-item-click="handler(2)" data-id=2 :selected="nowSeen == 2">待发货</tab-item>
        <tab-item @on-item-click="handler(3)" data-id=3 :selected="nowSeen == 3">待收货</tab-item>
        <tab-item @on-item-click="handler(4)" data-id=4 :selected="nowSeen == 4">待评价</tab-item>
        <!-- <tab-item @on-item-click="handler(5)" data-id=5 :selected="nowSeen === 5">退换/售后</tab-item> -->
      </tab>
    </div>
    <div class="main2">
      <div class="content">
        <div class="tab-list" v-if="ReqEnd">
          <div class="empty" v-if="realData.length === 0">
            <p class="pic"><img src="./../images/noorder.png"></p>
            <p class="tips">还没有相关订单,先去逛逛想买的商品~</p>
          </div>
          <div class="dhlist" v-else>
            <ul>

              <li v-for="(item, index) in realData" :key="index">
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">订单号：
                      <em>{{ item.order_sn }}</em>
                    </span>
                    <span class="r">
                      <em class="huangse" v-if="item.status_text === '待付款'">{{ item.status_text }}</em>
                      <em class="huangse" v-if="item.status_text === '待发货'">{{ item.status_text }}</em>
                      <em class="lvse" v-if="item.status_text === '待收货'">{{ item.status_text }}</em>
                      <em class="" v-if="item.status_text === '待评价'">{{ item.status_text }}</em>
                      <em class="huise" v-if="item.status_text === '已取消'">{{ item.status_text }}</em>
                    </span>
                  </div>
                </div>

                <div class="splist">
                  <template v-if="item.type === 3">
                    <div class="glist" v-for="child in item.order_goodses" :key="child.id">
                      <div class="left">
                        <img :src="child.thumb || ''" onerror="javascript:this.src='static/images/商品默认图.png';">
                      </div>
                      <div class="right">
                        <div class="name">{{ child.name }}</div>
                        <!-- <div class="guige">
                        数量：{{ child.num }}；颜色：白色；尺码：38
                      </div> -->
                      </div>
                    </div>
                  </template>

                  <template v-if="item.type === 2">
                    <div class="mdinfo1">
                      <span>{{ item.shop_title }}</span>
                    </div>
                    <div class="mdinfo2">
                      <span class="a1">下单时间：{{item.created_at }}</span>
                      <span class="a2">实付:
                        <em>￥{{ item.final_price }}</em>
                      </span>
                    </div>
                  </template>

                </div>

                <div class="spprice" v-if="item.type !== 2">共 {{ item.order_goodses.length }} 件商品 实付:
                  <span>￥{{ item.final_price }}</span>
                </div>

                <!-- 1 -->
                <div class="spcaozuo" v-if="item.status_text === '待付款'">
                  <span class="a1" @click="_toCancel(item)">取消订单</span>
                  <span class="a2" @click="_toPay(item)">立即付款</span>
                </div>

                <!-- 2 -->
                <!-- <div class="spcaozuo" v-if="item.status_text === '待发货'">
                  <span class="a1">取消订单</span>
                  <span class="a2">提醒发货</span>
                </div> -->

                <!-- 3 -->
                <div class="spcaozuo" v-if="item.status_text === '待收货'">
                  <span class="a1">取消订单</span>
                  <span class="a2">确认收货</span>
                </div>

                <!-- 4 -->
                <div class="spcaozuo" v-if="item.status_text === '待评论'">
                  <span class="a1">申请售后</span>
                  <span class="a1">再次购买</span>
                  <span class="a2">去评价</span>
                </div>

                <!-- 5 -->
                <div class="spcaozuo" v-if="item.status_text === '待评价'">
                  <span class="a2">立即评论</span>
                </div>
                <!-- 售后 -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import { mapActions, mapMutations } from 'vuex'
import { wxpay } from 'tools/util'
export default {
  data () {
    return {
      nowSeen: 0,
      realData: [],
      ReqEnd: false,
      momentPay: {}
    }
  },
  created () {
    this.$vux.loading.show()
    this.getGoodList(this.$route.params.status).then(res => {
      this.ReqEnd = true
      this.$vux.loading.hide()
      this.nowSeen = this.$route.params.status
      this.realData = res.data
    })
  },
  methods: {
    handler (val) {
      if (this.nowSeen === val) return
      this.ReqEnd = false
      this.updateLoading({ status: true })
      this.getGoodList(val)
        .then(res => {
          this.ReqEnd = true
          this.updateLoading({ status: false })
          this.nowSeen = val
          this.realData = res.data
        })
    },
    routeBack () {
      this.$router.push({ path: '/member' })
    },
    _toCancel (item) {
      let _this = this
      this.$vux.confirm.show({
        content: '确认取消该订单?',
        onConfirm () {
          _this.updateLoading({ status: true })
          _this.cancelOrder({order_id: item.id})
            .then(res => {
              _this.updateLoading({ status: false })
              _this.getGoodList(_this.$route.params.status)
              _this.realData = res.data
            })
        }
      })
    },
    _toPay (item) {
      this.momentPay = item
      wxpay(
        /* 回调 */ this._payLoopCallback,
        /* 参数 */ { order_id: item.id, trade_type: 'weixinjsbridge' }
      ) // 调起微信支付
    },
    _payLoopCallback (val) {
      this.payMoney(val).then(response => {
        window.WeixinJSBridge.invoke(
          'getBrandWCPayRequest',
          response.data,
          res => {
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
              this.wxSuccessCall()
            }
            if (
              res.err_msg === 'get_brand_wcpay_request:fail' ||
              res.err_msg === 'get_brand_wcpay_request:cancel'
            ) {
              this.wxErrCall()
            }
          }
        )
      })
    },
    wxSuccessCall () {
      this.updateLoading({ status: true })
      this.ReqEnd = false
      if (this.momentPay.type_text === '微卡订单') {
        this.getUsrInfo() // 更新用户信息后再跳转
          .then(res1 => {
            this.updataUsr(res1.data)
            this.momentPay = {}
            this.updateLoading({ status: false })
            this.$router.push({ path: '/weika/vip' })
          })
      } else {
        this.getGoodList(this.nowSeen).then(res => {
          this.ReqEnd = true
          this.realData = res.data
          this.$vux.loading.hide()
          this.updateLoading({ status: false })
          this.$vux.toast.show({
            type: 'text',
            text: '订单支付完成'
          })
          this.momentPay = {}
        })
      }
    },
    wxErrCall () {},
    ...mapActions({
      getGoodList: 'User_buyList',
      payMoney: 'Wk_Pay',
      getUsrInfo: 'HTTP_UserInfo',
      cancelOrder: 'User_CancelOrder'
    }),
    ...mapMutations({
      updataUsr: 'SET_USER_INFO',
      updateLoading: 'UPDATE_LOADING'
    })
  },
  components: {
    Tab,
    TabItem
  }
}
</script>
<style lang="less" scoped>
.tab {
  position: fixed;
  top: 0.88rem;
  width: 100%;
}
.main2 {
  top: 1.58rem;
}
.empty {
  margin-top: 2.2rem;
  padding: 0.4rem;
  text-align: center;
  .pic {
    width: 1.17rem;
    height: 1.37rem;
    margin: 0 auto;
    margin-bottom: 0.2rem;
  }
  .tips {
    color: #999;
  }
}
.tab-list {
  font-size: 0.24rem;
  .dhlist {
    font-size: 0.24rem;
    margin-top: 0.2rem;
    ul {
      li {
        padding: 0.2rem;
        border-bottom: #f0f0f0 solid 1px;
        background: #fff;
        margin-bottom: 0.2rem;
        .shopinfo {
          .name {
            position: relative;
            font-size: 0.24rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: #e6e6e6 solid 1px;
            padding-bottom: 0.2rem;
            .l {
              em {
                color: #999;
                font-style: normal;
              }
            }
            .r {
              color: #f5222d;
              font-size: 0.24rem;
              em {
                font-style: normal;
                &.huise {
                  color: #999;
                }
                &.huangse {
                  color: #ff7f32;
                }
                &.lvse {
                  color: #0aa42a;
                }
              }
            }
          }
        }
        .glist {
          display: flex;
          padding: 0.2rem 0;
          border-bottom: #f0f0f0 solid 1px;
          &:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .left {
            margin-right: 0.2rem;
            img {
              width: 1.86rem;
              height: 1.86rem;
            }
          }
          .right {
            flex: 1;
            .name {
              font-size: 0.3rem;
              margin-bottom: 0.2rem;
            }
            .guige {
              margin-bottom: 0.1rem;
              color: #999;
            }
          }
        }
        .spprice {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: #999;
          font-size: 0.24rem;
          span {
            color: #333;
            font-size: 0.3rem;
          }
        }
        .mdinfo1 {
          position: relative;
          font-size: 0.34rem;
          font-weight: bold;
          padding-left: 0.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.2rem 0;
          height: 0.6rem;
          &::before {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            content: "";
            width: 0.6rem;
            height: 0.6rem;
            background: url("../images/shop2.png") center no-repeat;
            background-size: contain;
          }
        }
        .mdinfo2 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999;
          font-size: 0.24rem;
          margin: 0.2rem 0;
          .a2 {
            em {
              color: #333;
              font-size: 0.3rem;
              font-style: normal;
            }
          }
        }
        .spcaozuo {
          border-top: #e6e6e6 dashed 1px;
          padding-top: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: #999;
          .a1 {
            font-size: 0.24rem;
            color: #333;
            display: block;
            padding: 0 0.3rem;
            border-radius: 0.06rem;
            line-height: 0.6rem;
            border: #e6e6e6 solid 1px;
            margin-right: 0.4rem;
          }
          .a2 {
            background-image: -webkit-linear-gradient(
              225deg,
              #f5252d 0,
              #ff7d32 94%
            );
            background-image: linear-gradient(225deg, #f5252d 0, #ff7d32 94%);
            font-size: 0.24rem;
            color: #fff;
            display: block;
            padding: 0 0.3rem;
            border-radius: 0.06rem;
            line-height: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
