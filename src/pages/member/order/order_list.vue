<template>
  <div class="app">
    <x-header title="我的订单" :left-options="{backText: '', preventGoBack: true}" @on-click-back="routeBack"></x-header>
    <div class="main2">
      <div class="content">
        <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
          <tab-item @on-item-click="handler" @click.native="tab" data-id=1 selected>全部</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=2>待付款</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=3>待发货</tab-item>
          <!-- <tab-item @on-item-click="handler" @click.native="tab" data-id=4>待使用/收货</tab-item> -->
          <tab-item @on-item-click="handler" @click.native="tab" data-id=5>待评价</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=6>退换/售后</tab-item>
        </tab>
        <div class="tab-list tab-list1" v-if="nowSeen==1">
          <div class="empty">
            <p class="pic"><img src="./../images/noorder.png"></p>
            <p class="tips">还没有相关订单,先去逛逛想买的商品~</p>
          </div>
          <div class="dhlist">
            <ul>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">订单号：
                      <em>4547786454</em>
                    </span>
                    <span class="r">待发货</span>
                  </div>
                </div>
                <div class="splist">
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                      <div class="guige">
                        数量：1；颜色：白色；尺码：38
                      </div>
                    </div>
                  </div>
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                      <div class="guige">
                        数量：1；颜色：白色；尺码：38
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spprice">共1件商品 实付:
                  <span>￥158.55</span>
                </div>
                <div class="spcaozuo">
                  <span class="a1">取消订单</span>
                  <span class="a2">立即付款</span>
                </div>
              </li>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">订单号：209784545786</span>
                    <span class="r">待发货</span>
                  </div>
                </div>
                <div class="splist">
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">购买创客微卡</div>
                      <div class="guige">
                        数量：1
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spprice">共1件商品 实付:
                  <span>￥599</span>
                </div>
                <div class="spcaozuo">
                  <span class="a1">取消订单</span>
                  <span class="a2">立即付款</span>
                </div>
              </li>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">订单号：
                      <em>4547786454</em>
                    </span>
                    <span class="r">
                      <em class="yiwancheng">已完成</em>
                    </span>
                  </div>
                </div>
                <div class="mdinfo1">
                  <span>湖南大碗茶 ></span>
                </div>
                <div class="mdinfo2">
                  <span class="a1">下单时间：2018-10-10 16:32</span>
                  <span class="a2">实付:
                    <em>￥158.55</em>
                  </span>
                </div>
                <div class="spcaozuo">
                  <span class="a2">立即评论</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-list tab-list2" v-if="nowSeen==2">
          <div class="dhlist">
            <ul>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">订单号：209784545786</span>
                    <span class="r">待发货</span>
                  </div>
                </div>
                <div class="splist">
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                      <div class="guige">
                        数量：1；颜色：白色；尺码：38
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spprice">共1件商品 实付:
                  <span>￥158.55</span>
                </div>
                <div class="spcaozuo">
                  <span class="a1">取消订单</span>
                  <span class="a2">立即付款</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-list tab-list3" v-if="nowSeen==3">
          <div class="dhlist">
            <ul>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">森马旗舰店</span>
                    <span class="r">待发货</span>
                  </div>
                </div>
                <div class="splist">
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                      <div class="guige">
                        数量：1；颜色：白色；尺码：38
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spprice">共1件商品 实付:
                  <span>￥158.55</span>
                </div>
                <div class="spcaozuo">
                  <span class="a1">取消订单</span>
                  <span class="a2">提醒发货</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <!-- <div class="tab-list tab-list4" v-if="nowSeen==4"> </div> -->
        <div class="tab-list tab-list5" v-if="nowSeen==5">
          <div class="dhlist">
            <ul>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">森马旗舰店</span>
                    <span class="r">待评价</span>
                  </div>
                </div>
                <div class="splist">
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                      <div class="guige">
                        数量：1；颜色：白色；尺码：38
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spprice">共1件商品 实付:
                  <span>￥158.55</span>
                </div>
                <div class="spcaozuo">
                  <span class="a1">申请售后</span>
                  <span class="a1">再次购买</span>
                  <span class="a2">去评价</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div class="tab-list tab-list6" v-if="nowSeen==6">
          <div class="dhlist">
            <ul>
              <li>
                <div class="shopinfo">
                  <div class="name">
                    <span class="l">服务单号：787874546</span>
                    <span class="r">退货</span>
                  </div>
                </div>
                <div class="splist">
                  <div class="glist">
                    <div class="left">
                      <img src="./../images/temp001.png">
                    </div>
                    <div class="right">
                      <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                      <div class="guige">
                        数量：1；颜色：白色；尺码：38
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spprice">共1件商品 实付:
                  <span>￥158.55</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from "vux";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nowSeen: "1"
    };
  },
  async created() {
    await this.APP_collectCommodityList();
  },
  methods: {
    ...mapActions(["APP_collectCommodityList"]),
    tab(e) {
      this.nowSeen = e.target.getAttribute("data-id");
    },
    routeBack() {
      this.$router.push({ path: "/member" });
    }
  },
  components: {
    Tab,
    TabItem
  }
};
</script>
<style lang="less" scoped>
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
.tab-list1 {
  font-size: 0.24rem;
  margin-top: 0.2rem;
}
.tab-list2 {
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
</style>
