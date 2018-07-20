<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'我的收藏'"></my-header>
    <div class="main2">
      <div class="content">
        <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
          <tab-item @click.native="tab(1)" data-id=1 selected>收藏的商品</tab-item>
          <tab-item @click.native="tab(2)" data-id=2>收藏的商家</tab-item>
        </tab>

        <div class="tab-list1" v-if="nowSeen === 1 && !isReq">
          <div class="empty">
            <p class="pic"><img src="./images/empty.png"></p>
            <p class="tips">还没有收藏的商品~</p>
          </div>

          <!-- <ul>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                <div class="price">￥158.55</div>
                <div class="info">
                  <span class="a1">已售
                    <em>188</em>件</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                <div class="price">￥158.55</div>
                <div class="info">
                  <span class="a1">已售
                    <em>188</em>件</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                <div class="price">￥158.55</div>
                <div class="info">
                  <span class="a1">已售
                    <em>188</em>件</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
          </ul> -->
        </div>

        <div class="tab-list2" v-if="nowSeen === 2 && !isReq">

          <div class="empty" v-if="realData.length === 0">
            <p class="pic"><img src="./images/empty.png"></p>
            <p class="tips">还没有收藏的商家~</p>
          </div>

          <ul v-else>

            <li v-for="item in realData" :key="item.id">
              <div class="left">
                <img :src="item.logo">
              </div>
              <div class="right">
                <div class="name">{{ item.title }}</div>
                <div class="caixi">
                  <span>特色菜</span>
                  <span>人均消费￥{{ item.average_cost }}/人</span>
                  <span></span>
                  <!-- <span>距离24.56km</span> -->
                </div>
                <div class="pingfen">
                  <span class="a1">
                    评分
                    <em>{{ item.score }}</em>
                  </span>
                </div>
                <div class="info">
                  <span class="a1">已有
                    <em>{{ item.total_customers }}</em>人消费</span>
                  <span class="a2" @click="cancelCollect(item.id)">取消关注</span>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// for (let i in res.data) {
// // this.businessList.push(res.data[i])
// if (res.data[i].distance >= 1000) {
// res.data[i].distance = (res.data[i].distance / 1000).toFixed(1) + 'Km'
// } else {
// res.data[i].distance = res.data[i].distance + 'm'
// }
// }
import { Tab, TabItem } from 'vux'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      isReq: false,
      nowSeen: 1,
      realData: []
    }
  },
  created () {},
  methods: {
    cancelCollect (id) {
      this.isReq = true
      this.unCollectShop(id)
        .then(res => {
          this.getShop()
            .then(res => {
              this.isReq = false
              this.realData = res.data
            })
        })
    },
    tab (val) {
      this.isReq = true
      this.getShop()
        .then(res => {
          this.isReq = false
          this.realData = res.data
          this.nowSeen = val
        })
    },
    routeBack () {
      this.$router.push({path: '/member'})
    },
    ...mapActions({getShop: 'User_collectShopList', unCollectShop: 'APP_unCollectShop'})
  },
  components: {
    Tab,
    TabItem
  }
}
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
.tab-list1 {
  font-size: 0.24rem;
  margin-top: 0.2rem;
  ul {
    background: #fff;
    li {
      padding: 0.2rem;
      display: flex;
      align-items: center;
      border-bottom: #f0f0f0 solid 1px;
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
        .price {
          color: #f5232e;
          font-size: 0.32rem;
          margin-bottom: 0.1rem;
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999;
          .a1 {
            em {
              color: #f5232e;
              font-style: normal;
            }
          }
          .a2 {
            display: block;
            padding: 0 0.3rem;
            border: #e6e6e6 solid 1px;
            border-radius: 0.1rem;
            color: #333;
            line-height: 0.6rem;
          }
        }
      }
    }
  }
}
.tab-list2 {
  margin-top: 0.2rem;
  font-size: 0.24rem;
  ul {
    background: #fff;
    li {
      padding: 0.2rem;
      display: flex;
      align-items: center;
      border-bottom: #f0f0f0 solid 1px;
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
          font-weight: bold;
        }
        .caixi {
          display: flex;
          justify-content: space-between;
          color: #666;
          span:nth-child(1) {
            margin-right: 0.2rem;
          }
          span:nth-child(3) {
            flex: 2;
            text-align: right;
          }
        }
        .pingfen {
          margin-top: 0.1rem;
          margin-bottom: 0.2rem;
          em {
            color: #f5222d;
            font-style: normal;
          }
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999;
          .a1 {
            em {
              color: #ff0000;
              font-style: normal;
            }
          }
          .a2 {
            display: block;
            padding: 0 0.3rem;
            border: #e6e6e6 solid 1px;
            border-radius: 0.1rem;
            color: #333;
            line-height: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
