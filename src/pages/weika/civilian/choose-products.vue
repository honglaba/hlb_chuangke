<template>
  <div class="app">
    <!-- 选择商品界面 -->
    <my-header :Title="'选择微卡商品'" :left-options="{preventGoBack: true}" @on-click-back="routeBack"></my-header>
    <div class="main">
      <div class="content">
        <div class="paybox">
          <img src="../images/wkpaybg.png">
          <div class="desc">
            <p class="p1">购买一款我们为您推荐的商品</p>
            <p class="p2">选购完成后自动开通创客微卡</p>
          </div>
          <div class="wkgoodslist">

            <transition name="fade">
              <scroller lock-y scrollbar-x v-show="goodList.length > 0">
                <div class="dhbox">
                  <div class="dhbox-item" v-for="(item, index) in goodList" :key="index" :class="chooseIndex === index ? 'on' : ''" @click="chooseIndex = index">
                    <div class="name">{{ item.name }}</div>
                    <div class="price">特价：￥{{ item.price }}</div>
                    <div class="beizhu">赠送创客微卡</div>
                    <div class="look">
                      <span>查看详情</span>
                    </div>
                  </div>
                </div>
              </scroller>
            </transition>

          </div>

          <div class="pd20">
            <div class="tijiao">
              <button class="btn-aoc" @click="toBuy">确认购买</button>
            </div>
            <div class="tips">
            </div>
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
import { Scroller } from 'vux'
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      chooseIndex: 0,
      goodList: []
    }
  },
  created () {
    this.Wk_GoodList().then(res => {
      this.goodList = res.data
    })
  },
  methods: {
    toBuy () {
      let choose = this.goodList[this.chooseIndex]
      setTimeout(() => {
        this.updateCart(choose)
        this.saveCurrTodo('Wkbuy')
        this.$router.push({ path: '/weika/pay' })
      }, 300)
    },
    routeBack () {
      this.$router.go(-1)
    },
    ...mapActions(['Wk_GoodList']),
    ...mapMutations({
      updateCart: 'SAVE_SHOPPING_CART',
      saveCurrTodo: 'UPDATE_CURRENT_OPERATION'
    })
  },
  components: {
    Scroller
  }
}
</script>
<style lang="less" scoped>
.paybox {
  position: relative;
  .desc {
    position: absolute;
    width: 100%;
    color: #fff;
    font-size: 0.4rem;
    text-align: center;
    top: 0.5rem;
    .p2 {
      margin-top: 0.1rem;
      font-size: 0.3rem;
    }
  }
  background: #fff;
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
.wkgoodslist {
  margin-top: -0.4rem;
  padding: 0 0.2rem;
  height: 3.8rem;
}
.dhbox {
  position: relative;
  width: 12.42rem;
  height: 3.8rem;
  perspective: 1000px;
  .dhbox-item {
    width: 2.56rem;
    height: 3.16rem;
    display: inline-block;
    border: #fff solid 1px;
    box-shadow: 0 3px 12px rgba(21, 0, 71, 0.16);
    border-radius: 5px;
    margin-left: 0.1rem;
    background: #fff;
    padding: 0.2rem;
    box-sizing: border-box;
    .name {
      font-size: 0.32rem;
      font-weight: bold;
      min-height: 0.84rem;
    }
    .price {
      margin-top: 0.1rem;
      color: #f5232e;
    }
    .beizhu {
      color: #999;
      margin-top: 0.1rem;
    }
    .look {
      margin-top: 0.3rem;
      border-top: #eaeaea dashed 1px;
      text-align: center;
      span {
        height: 0.48rem;
        padding: 0 0.3rem;
        margin-top: 0.3rem;
        display: inline-block;
        border: #e6e4e3 solid 1px;
        border-radius: 5px;
        line-height: 0.48rem;
      }
    }
    &.on {
      border: #fa9196 solid 2px;
    }
  }
}
.dhbox-item:first-child {
  margin-left: 0;
}
</style>
