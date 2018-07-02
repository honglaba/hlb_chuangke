<template>
  <div class="app">
    <x-header title="积分记录" :left-options="{backText: '', preventGoBack: true}" @on-click-back="routeBack"></x-header>
    <div class="main2">
      <div class="content">
        <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
          <tab-item @on-item-click="handler" @click.native="tab" data-id=1 selected>全部</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=2>获取</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=3>使用</tab-item>
        </tab>

        <div class="common-list all-list" v-if="nowSeen==1">
          <div class="empty">
            <p class="pic"><img src="./images/empty.png"></p>
            <p class="tips">暂无积分记录~</p>
          </div>
          <ul>
            <li>
              <div class="left">
                <div class="name">兑换商品</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+50</div>
            </li>
            <li>
              <div class="left">
                <div class="name">线下消费</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+50</div>
            </li>
            <li>
              <div class="left">
                <div class="name">邀请注册</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+50</div>
            </li>
          </ul>
        </div>
        <div class="common-list huoqu-list" v-if="nowSeen==2">
          <ul>
            <li>
              <div class="left">
                <div class="name">兑换商品</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+50</div>
            </li>
            <li>
              <div class="left">
                <div class="name">线下消费</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+80</div>
            </li>
            <li>
              <div class="left">
                <div class="name">邀请注册</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+90</div>
            </li>
          </ul>
        </div>
        <div class="common-list shiyong-list" v-if="nowSeen==3">
          <ul>
            <li>
              <div class="left">
                <div class="name">兑换商品</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+250</div>
            </li>
            <li>
              <div class="left">
                <div class="name">线下消费</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+650</div>
            </li>
            <li>
              <div class="left">
                <div class="name">邀请注册</div>
                <div class="date">2018-05-25 16:50</div>
              </div>
              <div class="right">+50</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Accordion from '../../components/accordion'
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
    tab (e) {
      console.log(e.target.getAttribute('data-id'))
      this.nowSeen = e.target.getAttribute('data-id')
    },
    routeBack () {
      this.$router.push({path: '/member'})
    }
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
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
.common-list {
  margin-top: 0.2rem;
  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      padding: 0.2rem;
      border-bottom: #e6e6e6 dashed 1px;
      &:last-child {
        border-bottom: none;
      }
    }
    .left {
      .name {
        font-size: 0.3rem;
      }
      .date {
        margin-top: 0.1rem;
        color: #999;
        font-size: 0.2rem;
      }
    }
    .right {
      color: #f5222d;
      font-size: 0.3rem;
    }
  }
}
.huoqu-list {
  margin-top: 0.2rem;
}
.shiyong-list {
  margin-top: 0.2rem;
}
</style>
