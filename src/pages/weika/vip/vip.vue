<template>
  <div id="weika">
    <my-header @on-click-back="routeBack" :Title="'创客微卡'" :left-options="{preventGoBack: true}"></my-header>
    <!-- <div class="weika-head">
      <span class="weika-head-title">创客微卡</span>
      <span class="weika-head-right">奖励规则</span>
    </div> -->
    <div class="main">
      <div class="content" style="margin-bottom:.6rem;" v-if="flag">
        <div class="wkbg">
          <div class="wkbox">

            <div class="box1">

              <div class="left">
                <div class="tx"><img :src="vip.headimgurl"></div>
                <div class="uinfo">
                  <div class="name">
                    <span class="vip-name">{{ vip.nickname }}</span>
                    <span class="vip-lv">
                      <img :src="require('../images/vip-lv/vip' + '1' + '.png')">
                    </span>
                  </div>
                  <!-- vip-lv.png -->
                  <div class="tips">创客为您节约了
                    <span class="gold-color">{{ vip.save_money }}</span> 元
                  </div>
                </div>
              </div>

              <div class="right" v-clipboard:copy="vip.invite_id" v-clipboard:success="copy_inviteid">
                <p class="right-text">
                  <span class="a1">推广ID</span>
                  <span class="a2">{{ vip.invite_id }}</span>
                </p>
              </div>

            </div>

            <div class="box2">
              <ul>
                <li>
                  <router-link to="withdraw">
                    <span>可用佣金(元)</span>
                    <span>{{ vip.money }}</span>
                    <span>提现</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="commission">
                    <span>累计佣金(元)</span>
                    <span>{{ vip.total_money }}</span>
                    <span>查看</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="recommend_list">
                    <span>我的推荐(人)</span>
                    <span>{{ vip.invites }}</span>
                    <span>
                      查看
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="quanyi fuwu">
          <div class="fuwu_tab">
            <div class="left">创客微卡VIP1权益</div>
            <div class="right">
              <a href="javascript:;">全部权益</a>
            </div>
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
        <div class="fuwu jingli">
          <div class="fuwu_tab">
            <div class="left">您的专属客服经理</div>
            <div class="right">
              <a href="javascript:;">工作时间9:00-21:00</a>
            </div>
          </div>
          <div class="fuwu_con">
            <ul>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/vip1-1.png"></span>
                  <span>您的客服经理</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/vip1-2.png"></span>
                  <span>专属经理微信</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/vip1-3.png"></span>
                  <span>专属经理电话</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="fuwu duihuan">
          <div class="fuwu_tab">
            <div class="left">会员专享精品兑换</div>
            <div class="right">
              <a href="javascript:;">可用积分:500</a>
            </div>
          </div>
          <div class="fuwu_con">
            <scroller lock-y scrollbar-x>
              <div class="dhbox">
                <div class="dhbox-item" v-for="i in 7" :key="i">
                  <span>{{' ' + i + ' '}}</span>
                </div>
              </div>
            </scroller>
          </div>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
import { Scroller } from 'vux'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'vip',
  data () {
    return {
      flag: false
    }
  },
  computed: {
    ...mapGetters({ vip: 'getWkVipInfo' })
  },
  created () {
    this.Wk_Index().then(res => {
      this.updataVip(res.data)
      this.flag = true
    })
  },
  methods: {
    ...mapActions(['Wk_Index']),
    ...mapMutations({
      updataVip: 'UPDATE_VIP_INFO'
    }),
    routeBack () {
      this.$router.push({ path: '/home' })
    },
    copy_inviteid () {
      this.$vux.toast.text('复制成功')
    }
  },
  components: {
    Scroller
  }
}
</script>
<style lang="less" scoped>
.gold-color {
  color: #d1b358;
}

.wkbg {
  width: 100%;
  height: 3.6rem;
  background: url("../images/Microcard_bluebackground.png") no-repeat;
  background-color: #fff;
  background-size: 100% 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  padding: 0.2rem 0.2rem 0 0.2rem;
}

.wkbox {
  width: 7.1rem;
  height: 3.2rem;
  color: #fff;
  position: absolute;

  .box1 {
    width: 7.1rem;
    height: 1rem;
    position: absolute;
    margin-bottom: 0.6rem;
    .left {
      float: left;
      margin-top: 0.26rem;
      margin-left: 0.3rem;
      .tx {
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.2rem;
        float: left;
        img {
          border-radius: 50%;
        }
      }
      .uinfo {
        float: left;
        height: 0.7rem;
        .name {
          height: 0.4rem;
          margin-bottom: 0.1rem;
          .vip-name {
            font-size: 0.3rem;
            display: block;
            float: left;
          }

          .vip-lv {
            width: 0.34rem;
            height: 100%;
            margin-left: 0.1rem;
            display: block;
            float: left;
            img {
              width: 100%;
              height: 0.25rem;
              margin-top: 0.15rem;
              position: relative;
              bottom: 0;
            }
          }
        }
        .tips {
          height: 0.3rem;
          color: #8f8fb3;
          font-size: 0.2rem;
        }
      }
    }
    .right {
      width: 1.3rem;
      height: 0.6rem;
      float: right;
      background: #d1b358;
      border-radius: 1rem 0 0 1rem;
      text-align: center;
      margin-top: 0.4rem;
      margin-right: -1px;
      .right-text {
        width: 1.1rem;
        height: 100%;
        float: right;
        display: block;
        line-height: 1;
        margin-top: 0.015rem;
        .a1 {
          color: #333;
          font-size: 0.2rem;
          font-weight: 600;
        }
        .a2 {
          font-size: 0.28rem;
        }
      }
    }
  }

  .box2 {
    width: 100%;
    height: 1.5rem;
    // padding: 0 0.3rem;
    position: absolute;
    bottom: 0.2rem;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        position: relative;
        flex: 1;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          right: 0;
          top: 10%;
          content: "";
          width: 1px;
          background: #3d3d66;
          height: 80%;
        }

        span {
          display: block;
          text-align: center;
          &:nth-child(1) {
            font-size: 0.24rem;
            color: #8f8fb2;
            margin-bottom: 0.06rem;
          }
          &:nth-child(2) {
            font-size: 0.3rem;
            color: #fff;
            margin-bottom: 0.2rem;
          }
          &:nth-child(3) {
            display: table;
            margin: 0.1rem auto 0;
            border: #8f8fb3 solid 1px;
            padding: 0 0.2rem;
            border-radius: 1rem;
            line-height: 0.4rem;
            height: 0.4rem;
            color: #8f8fb3;
          }
        }
      }
    }
  }
}

.quanyi {
  /* 微卡权益 */
  margin-top: 0 !important;
}

.fuwu {
  background: #fff;
  margin-top: 0.2rem;
  text-align: center;
  .fuwu_tab {
    padding: 0.1rem 0.2rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #e7e7e7 dashed 1px;
    .left {
      position: relative;
      font-size: 0.32rem;
      &::before {
        display: inline-block;
        position: absolute;
        left: -0.2rem;
        top: 25%;
        content: "";
        width: 0.06rem;
        background: #d1b358;
        height: 50%;
      }
    }
    .right a {
      color: #999;
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
.jingli .fuwu_con ul li {
  flex: 3;
  border: #e6e6e6 solid 1px;
  margin-right: 0.12rem;
  &:nth-child(3) {
    margin-right: 0;
  }
}
.duihuan .fuwu_con ul li {
  flex: 3;
}
.dhbox {
  height: 100px;
  position: relative;
  width: 1490px;
}
.dhbox-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.dhbox-item:first-child {
  margin-left: 0;
}
</style>
