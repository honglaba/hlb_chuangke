<template>
  <div id="app">
    <my-header :Title="'订单详情'"></my-header>
    <div class="main2" v-if="Object.keys(momentState).length === 0">

      <section class="bgf tpad44 bpad51 bmar20 text-c">
        <img src="./images/finish.png" class="finish-logo" />
        <h3>支付完成</h3>
        <p class="txt1">感谢您对创客的支持，期待再次光临</p>
        <p class="txt2">本次消费活的20个积分</p>
        <div class="btn-row">
          <router-link to="javascript:;">积分兑换</router-link>
          <router-link to="javascript:;">去评价</router-link>
        </div>
      </section>

      <!-- 订单详情 -->
      <section class="order-block" v-if="momentState.is_pay === 1">
        <div class="til-row">
          <div class="img">
            <img src="./images/home-like-img1.png" />
          </div>
          <div>
            <p class="fz32 bmar10">{{ momentState.shop.name }}</p>
            <p class="fz24 c999">评分
              <span class="cf5222d">{{ momentState.shop.score }}</span> 已有
              <span class="cf5222d">{{ momentState.shop.total_consumption }}</span>人消费</p>
          </div>
        </div>
        <div class="fwb">
          <p class="fz24">付款金额</p>
          <p>
            <span class="fz24">￥</span>
            <span class="fz32">56</span>
          </p>
        </div>
        <div class="lh40">
          <div>
            <p class="fz24">订单编号</p>
            <p class="fz20 c999">下单时间</p>
          </div>
          <div class="text-r">
            <p class="fz24 c999">{{ momentState.order_sn }}</p>
            <p class="fz20 c999">{{ momentState.created_time }}</p>
          </div>
        </div>
        <div class="lh40">
          <div>
            <p class="fz24">支付方式</p>
            <p class="fz20 c999">支付时间</p>
          </div>
          <div class="text-r">
            <p class="fz24 c999">微信支付</p>
            <p class="fz20 c999">{{ momentState.pay_time }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      momentState: ''
    }
  },
  created () {
    this.isFinished(this.$route.params.id)
      .then(res => {
        this.momentState = res.data
        // this.$printf(res)
      })
      .catch(erro => {
        // this.$printf(erro)
      })
  },
  methods: {
    ...mapActions({isFinished: 'APP_isFinished'})
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.finish-logo {
  width: 0.9rem;
  height: 0.9rem;
}
h3 {
  font-size: 0.4rem;
  margin-bottom: 0.15rem;
}
.txt1 {
  font-size: 0.24rem;
  margin-bottom: 0.2rem;
}
.txt2 {
  font-size: 0.2rem;
  margin-bottom: 0.3rem;
  color: #999;
}
.btn-row {
  width: 3.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  a {
    display: block;
    width: 1.6rem;
    height: 0.6rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.6rem;
    border-radius: 0.08rem;
    border: 0.01rem solid #e6e6e6;
    &:nth-child(2) {
      color: #f5222d;
    }
  }
}
.order-block {
  padding-left: 0.2rem;
  background: #fff;
  > div {
    display: flex;
    justify-content: space-between;

    border-bottom: 0.01rem dashed #e6e6e6;
    padding: 0.2rem 0;
    padding-right: 0.2rem;
    &:last-child {
      border: 0;
    }
  }
  .til-row {
    justify-content: inherit;
    .img {
      width: 1rem;
      height: 1rem;
      overflow: hidden;
      margin-right: 0.3rem;
      img {
        display: block;
        margin: 0 auto;
        height: 1rem;
      }
    }
  }
}
</style>
