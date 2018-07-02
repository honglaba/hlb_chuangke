<template>
  <div class="app">
    <x-header :left-options="{backText: '', preventGoBack: true}" @on-click-back="routeBack" title="消息公告"></x-header>
    <section>
      <tab bar-active-color="#f60" active-color="#f60" custom-bar-width=".34rem">
        <tab-item @on-item-click="handler" @click.native="tab" data-id=1 selected>消息</tab-item>
        <tab-item @on-item-click="handler" @click.native="tab" data-id=2>公告</tab-item>
      </tab>
      <div>
        <ul class="notice-list" v-if="nowSeen==1">
          <li>
            <div class="time">2018-05-08 21:08:58</div>
            <div class="inner type1">
              <div class="bmar20">
                <div class="y-flex y-ac">
                  <span class="activeico">活动</span>
                  <p>5.15创客开启新航信之旅，奖励翻倍</p>
                </div>
                <div class="pic"><img src="./images/notice-banner.png" /></div>
                <p class="fz26 c999 lh40">5.15创客开启新航信之旅，奖励翻倍5.15创客开启新航线之旅，奖励翻倍</p>
              </div>
              <router-link to="#" class="vux-1px-t">
                立即查看
                <span></span>
              </router-link>
            </div>
          </li>
          <li>
            <div class="time">2018-05-08 21:08:58</div>
            <div class="inner type1">
              <div class="bmar20">
                <div class="y-flex y-ac bmar44">
                  <span class="sysico">系统</span>
                  <p>5.15创客开启新航信之旅，奖励翻倍</p>
                </div>
                <p class="fz26 c999 lh40">5.15创客开启新航信之旅，奖励翻倍5.15创客开启新航线之旅，奖励翻倍</p>
              </div>
              <router-link to="#" class="vux-1px-t">
                立即查看
                <span></span>
              </router-link>
            </div>
          </li>
        </ul>

        <ul class="notice-list" v-if="nowSeen==2">
          <li>
            <div class="time">2018-05-08 21:08:58</div>
            <div class="inner">
              <div class="txt">
                <p>优惠券即将到期通知</p>
                <p>尊敬的用户，您好！您有优惠券即将到期，您可在我的优惠券进行查看。感谢您对我们的关注和支持！</p>
              </div>
              <router-link to="#" class="vux-1px-t">
                立即查看
                <span></span>
              </router-link>
            </div>
          </li>
          <li class="sp">
            <div class="time">2018-05-08 21:08:58</div>
            <div class="inner">
              <div class="txt">
                <p>优惠券即将到期通知</p>
                <p>尊敬的用户，您好！您有优惠券即将到期，您可在我的优惠券进行查看。感谢您对我们的关注和支持！</p>
              </div>
              <router-link to="#" class="vux-1px-t">
                立即查看
                <span></span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
      // window.webkit.messageHandlers.show.postMessage('hello，world') // ios callback
      this.$router.push({path: '/home'})
    },
    tab: function (e) {
      this.nowSeen = e.target.getAttribute('data-id')
    }
  },
  mounted () {
    this.axios.get('/api/message?type=2').then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
.vux-tab-wrap {
  padding-top: 0.7rem !important;
  .vux-tab-container {
    height: 0.7rem;
    .vux-tab {
      height: 0.7rem;
      .vux-tab-item {
        font-size: 0.3rem;
        line-height: 0.7rem;
      }
      .vux-tab-ink-bar {
        height: 0.06rem !important;
      }
    }
  }
}
.notice-list {
  padding-top: 0.4rem;
  > li {
    margin-bottom: 0.4rem;
    .time {
      text-align: center;
      font-size: 0.24rem;
      color: #666;
      margin-bottom: 0.2rem;
    }
    .inner {
      width: 6.86rem;
      box-sizing: border-box;
      // height: 2.91rem;
      border-radius: 0.03rem;
      background: #fff;
      box-shadow: 0px 0.05rem 0.3rem rgba(245, 34, 45, 0.1);
      margin: 0 auto;
      padding: 0.4rem 0.26rem 0 0.26rem;
      .txt {
        padding-bottom: 0.3rem;
        > p:nth-child(1) {
          color: #333;
          font-size: 0.3rem;
          margin-bottom: 0.4rem;
        }
        > p:nth-child(2) {
          color: #666;
          font-size: 0.26rem;
          line-height: 0.4rem;
        }
      }
      a {
        display: block;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.28rem;
        color: #f60;
        position: relative;
        > span {
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          position: absolute;
          background: url(../../../static/images/enter.png) no-repeat;
          background-size: 100%;
          right: 0;
          top: 50%;
          margin-top: -0.2rem;
        }
      }
    }
    .type1 {
      padding-top: 0.32rem;
      .y-flex {
        .activeico {
          display: block;
          width: 0.8rem;
          height: 0.38rem;
          border-radius: 0.05rem;
          color: #fff;
          background: linear-gradient(45deg, #f5222d, #fa8c16);
          text-align: center;
          line-height: 0.38rem;
          margin-right: 0.15rem;
        }
        .sysico {
          display: block;
          width: 0.8rem;
          height: 0.38rem;
          border-radius: 0.05rem;
          color: #fff;
          background: linear-gradient(45deg, #ff6600, #ffa42e);
          text-align: center;
          line-height: 0.38rem;
          margin-right: 0.15rem;
        }
        > p {
          font-size: 0.3rem;
        }
      }
      .pic {
        width: 100%;
        > img {
          width: 100%;
        }
      }
    }
  }
  > .sp .txt p {
    color: #ccc !important;
  }
}
</style>
