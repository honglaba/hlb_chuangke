<template>
  <div id="app">
    <section class="banner-box">
      <!-- <img src="./images/choicepic.png"> -->
      <img :src="details.banner">

      <div class="top-row">
        <span class="back"></span>
        <div class="y-flex y-ac">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="bottom-row">
        <div class="y-flex y-ac">
          <span></span>
          <p>店铺详情</p>
        </div>
        <div>22张</div>
      </div>
    </section>

    <section class="info-box">
      <div class="til-row">
        <div class="til">
          <h3>{{details.title}}</h3>
          <div>评分
            <span class="c60">5.0</span>
          </div>
        </div>
        <div class="follow" v-if="!following" @click="followTap">
          <img src="./images/icon_details_btn_normal.png" />
          <span>关注</span>
        </div>
        <div class="follow select" v-else @click="followTap">
          <img src="./images/icon_details_btn_selected.png" />
          <span>已关注</span>
        </div>
      </div>
      <!-- 活动推荐 -->
      <div class="action-box">
        <div class="y-flex bmar24" v-if="!actionDetail">
          <div class="small-card">2</div>
          <div class="small-card">5</div>
        </div>
        <div class="big-card-row" v-else>
          <ul>
            <li>
              <div>
                <span>￥</span>2
              </div>
              <p>满35可用</p>
              <p>有效期至2018.06.04</p>
            </li>
            <li>
              <div>
                <span>￥</span>5
              </div>
              <p>满50可用</p>
              <p>有效期至2018.06.04</p>
            </li>
          </ul>
        </div>

        <div class="slide-tap y-flex y-ac">
          <div class="action-info y-flex y-ac">
            <span class="ico type1"></span>
            <p>折扣商品7.5折起（不与其他折扣优惠叠加）</p>
          </div>
          <div class="btn y-flex y-ac" :class="[{cur:actionDetail}]" @click="slideTap">
            <p>3个活动</p>
            <img src="./images/icon_details_open.png" />
          </div>
        </div>

        <div class="other-info" v-if="actionDetail">
          <div class="action-info y-flex y-ac">
            <span class="ico type2"></span>
            <p>新用户首单立减5元</p>

          </div>
          <div class="action-info y-flex y-ac">
            <span class="ico type3"></span>
            <p>满30减3元 满60减6元</p>
          </div>
          <div class="action-info y-flex y-ac">
            <span class="ico type4"></span>
            <p>满一百赠送王老吉一罐</p>
          </div>
        </div>

      </div>

      <!-- 活动推荐end -->
      <div class="other-info bmar16">
        <div class="y-flex y-ac bmar16">
          <p class="rmar25 c666">特色菜</p>
          <p class="c999">人均消费{{details.average_cost}}￥/人</p>
        </div>
        <div class="y-flex y-ac y-jc-b">
          <div class="y-flex y-ac">
            <p class="rmar25 c666">营业时间：</p>
            <p class="c999">{{details.start_time}}~{{details.end_time}}</p>
          </div>
          <div class="c999" v-if="!actionDetail">已有
            <span class="cf00">{{details.total_customers}}</span>人消费</div>
        </div>
        <div class="c666 tpad60" v-if="actionDetail">已有
          <span class="cf00">{{details.total_customers}}</span>人消费</div>
        <div class="padding-b" v-if="actionDetail">
          <div class="slide-up" @click="slideTap"></div>
        </div>
      </div>

      <div class="vux-1px-t h80 y-flex y-ac add-row" v-if="!actionDetail">
        <router-link class="y-flex y-ac vux-1px-r flex1 h44" tag="div" to="/home/map">
          <span class="add-ico"></span>
          <p class="c666">{{details.address}}</p>
        </router-link>
        <div class="call-btn" @click="showMask">
          <img src="./images/icon_details_iphone.png" />
        </div>
      </div>
    </section>

    <section class="exchange" v-if="!actionDetail">
      <div class="y-flex y-jc-b til-row">
        <h3>本店兑换</h3>
        <router-link to="#" tag="a">更多
          <span class="lpad8">></span>
        </router-link>
      </div>
      <div class="exchange-list">
        <ul>
          <router-link tag="li" to="/aaaaa" v-for="(item,index) in exchange">
            <div><img :src="item.thumb" /></div>
            <div class="name">{{item.title}}</div>
          </router-link>
        </ul>
      </div>
    </section>

    <section class="comment">
      <div class="top-row y-flex y-jc-b y-ac">
        <div class="y-flex y-ac">
          <h3>用户评论</h3>
          <span>({{details.total_comments}})</span>
        </div>
        <router-link to="#" tag="a">
          评分
          <span>{{details.score}}</span> 去评论
          <span class="lpad8">></span>
        </router-link>
      </div>

      <ul class="comment-list">
        <li class="vux-1px-b">
          <div class="y-flex y-jc-b">
            <div class="y-flex y-ac">
              <div class="comment-img"><img src="./images/home-like-img2.png" /></div>
              <div class="s">
                <p>小米儿溜溜</p>
                <div class="star">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <p class="time">2018-05-22</p>
          </div>
          <div class="comment-content">
            很好，优惠很多，非常好
          </div>
        </li>
        <li class="vux-1px-b">
          <div class="y-flex y-jc-b">
            <div class="y-flex y-ac">
              <div class="comment-img"><img src="./images/home-like-img2.png" /></div>
              <div class="s">
                <p>小米儿溜溜</p>
                <div class="star">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <p class="time">2018-05-22</p>
          </div>
          <div class="comment-content">
            很好，优惠很多，非常好
          </div>
        </li>
        <li class="vux-1px-b">
          <div class="y-flex y-jc-b">
            <div class="y-flex y-ac">
              <div class="comment-img"><img src="./images/home-like-img2.png" /></div>
              <div class="s">
                <p>小米儿溜溜</p>
                <div class="star">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <p class="time">2018-05-22</p>
          </div>
          <div class="comment-content">
            很好，优惠很多，非常好
          </div>
        </li>
      </ul>
      <div class="more">
        <router-link tag="a" to="#">查看更多评论</router-link>
      </div>
      <router-link to="#" class="buy-btn">消费买单</router-link>
    </section>

    <div v-transfer-dom>
      <confirm v-model="show"  @on-confirm="onConfirm('(0769)2221 4618')" confirm-text="呼叫">
        <p style="text-align:center;">{{details.phone}}</p>
      </confirm>
    </div>
  </div>
</template>
<script>
import { Confirm, TransferDomDirective as TransferDom } from 'vux'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      ...mapState(['choiceDetails', 'exchange', 'comments']),
      actionDetail: false,
      following: false,
      show: false
    }
  },
  methods: {
    showMask: function () {
      this.show = true
    },
    slideTap: function () {
      this.actionDetail = !this.actionDetail
    },
    followTap: function () {
      this.following = !this.following
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        // window.location.href = msg
        alert('拨打电话')
      }
    },
    // 商家信息
    getInfo () {
      // console.log(this.$store.state)
      let that = this
      this.axios.get('/api/shop?id=1').then(function (res) {
        that.$store.commit('CHOICE_DETAILS', res.data)
      })
    },
    // 兑换商品列表
    getExchange () {
      let that = this
      this.axios.get('/api/shop/commodities?sid=1').then(function (res) {
        that.$store.commit('EXCHANHE', res.data)
      })
    },
    // 评论
    getComments () {
      let that = this
      this.axios.get('/api/shop/comments?sid=1').then(function (res) {
        console.log(res)
        that.$store.commit('COMMENTS', res.data)
      })
    }
  },
  computed: {
    details () {
      return this.$store.state.choiceDetails
    },
    exchange () {
      return this.$store.state.exchange
    },
    comments () {
      return this.$store.state.comments
    }
  },
  mounted () {
    this.getInfo()
    this.getExchange()
    this.getComments()
  },
  directives: {
    TransferDom
  },
  components: {
    Confirm
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
.banner-box {
  width: 7.5rem;
  height: 4rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .top-row {
    position: absolute;
    top: 0.4rem;
    left: 0;
    width: 100%;
    height: 0.46rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.3rem;
    padding-right: 0.35rem;
    box-sizing: border-box;
    > span {
      width: 0.2rem;
      height: 0.34rem;
      background: url(./images/icon_details_ruturn.png) no-repeat;
      background-size: 100%;
    }
    > div {
      > span:nth-child(1) {
        width: 0.46rem;
        height: 0.46rem;
        background: url(./images/icon_details_Sweep.png) no-repeat;
        background-size: 100%;
        margin-right: 0.32rem;
      }
      > span:nth-child(2) {
        width: 0.48rem;
        height: 0.12rem;
        background: url(./images/icon_details_more.png) no-repeat;
        background-size: 100%;
      }
    }
  }
  .bottom-row {
    position: absolute;
    width: 100%;
    height: 0.69rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0.15rem;
    padding: 0 0.26rem;
    box-sizing: border-box;
    > div:nth-child(1) {
      color: #fff;
      font-size: 0.28rem;
      > span {
        width: 0.68rem;
        height: 0.69rem;
        background: url(./images/icon_details_shop.png) no-repeat;
        background-size: 100%;
        margin-right: 0.16rem;
      }
    }
    > div:nth-child(2) {
      width: 1.16rem;
      height: 0.48rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.24rem;
      text-align: center;
      line-height: 0.48rem;
      color: #fff;
      font-size: 0.24rem;
    }
  }
}
.info-box {
  background: #fff;
  padding: 0 0.24rem;
  margin-bottom: 0.2rem;
  .til-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.2rem;
    margin-bottom: 0.12rem;
    .til {
      display: flex;
      align-items: center;
      > h3 {
        font-size: 0.44rem;
        margin-right: 0.08rem;
      }
      > div {
        font-size: 0.28rem;
        color: 0.666rem;
        > span {
          color: #f00;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }
    .follow {
      width: 1.3rem;
      height: 0.52rem;
      border-radius: 0.52rem;
      background: linear-gradient(45deg, #f86a1d, #f5222d);
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 0.26rem;
        height: 0.26rem;
        margin-right: 0.1rem;
      }
      > span {
        color: #fff;
        font-size: 0.26rem;
      }
    }
    .follow.select {
      background: #cacaca;
    }
  }
  .add-row {
    .add-ico {
      width: 0.31rem;
      height: 0.36rem;
      background: url(./images/icon_details_position.png) no-repeat;
      background-size: 100%;
      margin-right: 0.1rem;
    }
    .call-btn {
      width: 1rem;
      padding-left: 0.4rem;
      box-sizing: border-box;
      > img {
        width: 0.38rem;
        display: block;
      }
    }
  }
}
.action-box {
  padding-bottom: 0.38rem;
  .small-card {
    width: 0.98rem;
    height: 0.42rem;
    background: url(./images/icon2_details_certificate.png) no-repeat;
    background-size: 100%;
    color: #fb4e44;
    line-height: 0.42rem;
    font-size: 0.3rem;
    font-weight: bold;
    text-indent: 0.62rem;
    margin-right: 0.16rem;
  }
  .big-card-row {
    height: 1.48rem;
    overflow: hidden;
    margin-bottom: 0.4rem;
    > ul {
      width: 100%;
      white-space: nowrap;
      overflow-x: scroll;
      float: left;
      overflow-y: hidden;
      > li {
        width: 3.64rem;
        height: 1.48rem;
        background: url(./images/btn1_details_photo.png) no-repeat;
        background-size: 100%;
        margin-right: 0.2rem;
        position: relative;
        display: inline-block;
        color: #fff;
        padding: 0.2rem 0 0 0.3rem;
        box-sizing: border-box;
        vertical-align: middle;
        > div {
          font-size: 0.56rem;
          font-family: Arial, Helvetica, sans-serif;
          > span {
            font-size: 0.38rem;
          }
        }
        > p {
          font-size: 0.22rem;
        }
      }
    }
  }
  .slide-tap {
    justify-content: space-between;
    .btn {
      color: #999;
      font-size: 0.24rem;
      > p {
        margin-right: 0.08rem;
      }
      > img {
        width: 0.17rem;
      }
    }
    .btn.cur {
      > img {
        transform: rotate(180deg);
      }
    }
  }
  .other-info {
    margin-top: 0.22rem;
    > .action-info {
      margin-bottom: 0.22rem;
    }
  }
  .action-info {
    .ico {
      display: block;
      width: 0.28rem;
      height: 0.28rem;
      background: url(./images/otherico.png) no-repeat;
      background-size: 1.18rem;
      margin-right: 0.16rem;
    }
    .ico.type1 {
      background-position: 0 0;
    }
    .ico.type2 {
      background-position: -0.3rem 0;
    }
    .ico.type3 {
      background-position: -0.6rem 0;
    }
    .ico.type4 {
      background-position: -0.9rem 0;
    }
    > p {
      font-size: 0.24rem;
    }
  }
}
.padding-b {
  height: 2.14rem;
  position: relative;
  .slide-up {
    width: 0.42rem;
    height: 0.27rem;
    background: url(./images/btn_details_bottom_put.png) no-repeat;
    background-size: 100%;
    position: absolute;
    left: 50%;
    margin-left: -0.21rem;
    bottom: 0.6rem;
  }
}
.exchange {
  background: #fff;
  margin-bottom: 0.2rem;
  .til-row {
    height: 1.15rem;
    padding: 0 0.24rem;
    line-height: 1.15rem;
    h3 {
      font-weight: normal;
      font-size: 0.36rem;
    }
    a {
      color: #999;
      font-size: 0.28rem;
    }
  }
  .exchange-list {
    padding-left: 0.24rem;
    height: 2.3rem;
    > ul {
      width: 100%;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      float: left;
      > li {
        width: 2.4rem;
        height: 2.5rem;
        position: relative;
        margin-right: 0.16rem;
        display: inline-block;
        > div {
          width: 2.4rem;
          height: 1.88rem;
          border-radius: 0.08rem;
          overflow: hidden;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        > .name {
          width: 2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          background: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 0.05rem 0.1rem rgba(255, 102, 0, 0.1);
          padding: 0 0.2rem;
          box-sizing: border-box;
          text-align: center;
          position: absolute;
          left: 50%;
          margin-left: -1rem;
          top: 1.63rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          box-sizing: border-box;
          font-size: 0.24rem;
        }
      }
    }
  }
}
.comment {
  background: #fff;
  padding: 0.2rem 0.24rem 0.4rem 0.2rem;
  .top-row {
    height: 0.75rem;
    > div {
      h3 {
        font-size: 0.36rem;
      }
      span {
        font-size: 0.28rem;
        color: #999;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    > a {
      color: #999;
      > span:nth-child(1) {
        color: #f00;
        margin-right: 0.16rem;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  .comment-list {
    margin-bottom: 0.6rem;
    > li {
      padding-top: 0.32rem;
      padding-bottom: 0.3rem;
      .comment-img {
        width: 0.8rem;
        height: 0.8rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 0.2rem;
        img {
          height: 0.8rem;
          display: block;
          margin: 0 auto;
        }
      }
      .s {
        > p {
          margin: 0.1rem 0;
        }
        .star {
          overflow: hidden;
          span {
            display: block;
            float: left;
            width: 0.25rem;
            height: 0.24rem;
            background: url(./images/icon_details_good.png) no-repeat;
            background-size: 100%;
          }
        }
      }
      .time {
        color: #999;
        font-family: Arial, Helvetica, sans-serif;
      }
      .comment-content {
        padding: 0.3rem 0 0 1rem;
      }
    }
  }
  .more {
    text-align: center;
    margin-bottom: 0.28rem;
    a {
      color: #666;
    }
  }
  .buy-btn {
    width: 7.02rem;
    height: 0.9rem;
    border-radius: 0.9rem;
    background: linear-gradient(to right, #ff7f32, #f5222d);
    color: #fff;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.32rem;
    display: block;
  }
}
// 弹窗控件样式
.weui-dialog__btn_primary{
  color: #f60 !important;
}
.weui-dialog{
  width: 5.9rem !important;
  border-radius: .06rem !important;
  max-width: none !important;
}
.weui-dialog__bd:first-child{
  padding: 0 !important;
  color: #333 !important;
  font-size: .38rem !important;
  height: 3rem !important;
  line-height: 3rem !important;

}
.weui-dialog__ft{
  height: 1rem !important;
  line-height: 1rem !important;
  font-size: .38rem !important;
}
.weui-dialog__btn_default{
  color: #999 !important;
}
</style>
