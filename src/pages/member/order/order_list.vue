<template>
  <div class="app">
    <div class="nav">
      <x-header title="我的订单" :left-options="{backText: '', preventGoBack: true}" @on-click-back="routeBack"></x-header>

      <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
        <tab-item @on-item-click="handler(0)" data-id=0 :selected="nowSeen == 0">全部</tab-item>
        <tab-item @on-item-click="handler(1)" data-id=1 :selected="nowSeen == 1">待付款</tab-item>
        <!-- <tab-item @on-item-click="handler(2)" data-id=2 :selected="nowSeen === 2">待发货</tab-item> -->
        <tab-item @on-item-click="handler(3)" data-id=3 :selected="nowSeen == 3">待收货</tab-item>
        <tab-item @on-item-click="handler(4)" data-id=4 :selected="nowSeen == 4">待评价</tab-item>
        <!-- <tab-item @on-item-click="handler(5)" data-id=5 :selected="nowSeen === 5">退换/售后</tab-item> -->
      </tab>
    </div>

    <div class="content">

      <div class="tab-list tab-list1" v-if="ReqEnd">
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
                  <span class="r">{{ item.status_text }}</span>
                </div>
              </div>
              <div class="splist">
                <div class="glist" v-for="child in item.order_goodses" :key="child.id">
                  <div class="left">
                    <img :src="child.thumb || ''" onerror="javascript:this.src='static/images/商品默认图.png';">
                  </div>
                  <div class="right">
                    <div class="name">{{ child.name }}</div>
                    <div class="guige">
                      数量：{{ child.num }}；颜色：白色；尺码：38
                    </div>
                  </div>
                </div>
              </div>
              <div class="spprice">共 {{ item.order_goodses.length }} 件商品 实付:
                <span>￥{{ item.final_price }}</span>
              </div>

              <!-- 1 -->
              <div class="spcaozuo" v-if="item.status_text === '待付款'">
                <span class="a1">取消订单</span>
                <span class="a2">立即付款</span>
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
              <!-- 售后 -->
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      nowSeen: 0,
      realData: [],
      ReqEnd: false
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
      this.$vux.loading.show()
      this.getGoodList(val).then(res => {
        this.ReqEnd = true
        this.$vux.loading.hide()
        this.nowSeen = val
        this.realData = res.data
      })
    },
    routeBack () {
      this.$router.push({ path: '/member' })
    },
    ...mapActions({ getGoodList: 'User_buyList' })
  },
  components: {
    Tab,
    TabItem
  }
}
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
}
.content {
  width: 100%;
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top: 1.8rem;
  overflow: hidden;
}
.main2 {
  position: relative;
}
.empty {
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
  margin-top: 0.2rem;
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
                &.yiwancheng {
                  color: #999;
                }
                &.daifukuan {
                  color: #ff7f32;
                }
                &.daishiyong {
                  color: #0aa42a;
                }
              }
            }
          }
        }
        .glist {
          display: flex;
          align-items: center;
          padding: 0.2rem 0;
          border-bottom: #f0f0f0 solid 1px;
          &:last-child {
            border-bottom: none;
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
          margin-bottom: 0.2rem;
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
            border-radius: 0.1rem;
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
            border-radius: 0.1rem;
            line-height: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
