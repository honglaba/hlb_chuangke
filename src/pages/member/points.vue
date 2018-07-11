<template>
  <div class="app">
    <my-header @left-action="routeBack" :Title="'我的积分'"></my-header>
    <div class="main2">
      <div class="content">
        <div class="jfbox">
          <div class="box1">
            <p class="total">88888</p>
            <p class="tips">可用积分</p>
          </div>
          <div class="box2 base_box">
            <router-link to="exchange">
              <div class="tit">
                <div class="l"><img src="./images/jifen_icon01.png">积分兑换好礼</div>
                <div class="r"><img src="./images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path: '/article/xxxx' }">
              <div class="tit">
                <div class="l"><img src="./images/jifen_icon02.png">如何获取积分</div>
                <div class="r"><img src="./images/you1.png"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      nowSeen: '1'
    }
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
    routeBack () {
      this.$router.push({path: '/member'})
    }
  }
}
</script>
<style lang="less" scoped>
.jfbox {
  .box1 {
    height: 2.4rem;
    background: url("images/jifen_bg.png") center no-repeat;
    background-size: contain;
    text-align: center;
    color: #fff;
    .total {
      font-size: 0.52rem;
      padding-top: 0.76rem;
      font-weight: bold;
    }
    .tips {
      font-size: 0.24rem;
    }
  }
  .box2 {
    margin-top: 0.2rem;
    padding: 0 0.4rem;
    a {
      &:last-child {
        .tit {
          border-bottom: none;
        }
      }
    }
    .tit {
      border-bottom: #e6e6e6 dashed 1px;
      .l {
        img {
          width: 0.34rem;
          height: 0.34rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>
