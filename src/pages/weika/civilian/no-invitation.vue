<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'免邀请码注册微卡'"></my-header>
    <div class="main2">
      <div class="content pd20">
        <div class="boack1">
          <div class="bg">
            <p class="tit">创客微卡·精选优质服务</p>
            <ul>
              <li>
                <a href="javascript:;">
                  <span><img src="../images/a8.png"></span>
                  <span>邀请有礼</span>
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
                  <span><img src="../images/a7.png"></span>
                  <span>专享活动</span>
                </a>
              </li>
            </ul>
          </div>
          <p class="tit">赚钱消费取现三不误</p>
          <p class="mb60">在创客获得的所有奖励我们都希望不仅仅是如此</p>
          <p><img src="../images/vip_logo.png" style="width:1.93rem;"></p>
          <p class="mb60 mt20">创客微卡暂时只能通过<br> 其他创客用户邀请，或向创客平台申请
          </p>
          <p class="c999" v-if="Object.keys(people).length > 0">创客平台申请剩余人数
            <span class="c333">{{ people.quota }}</span>人（共{{ people.total }}人）</p>
          <p>
            <button class="btn-aoc" @click="_invCodePass">去申请</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      people: []
    }
  },
  created () {
    this.setLoding({status: true})
    this.invId(null) // 进入删除邀请码
    this.Wk_Quota()
      .then(res => {
        this.setLoding({status: false})
        this.people = res.data
      })
  },
  methods: {
    _invCodePass () {
      this.setLoding({status: true})
      setTimeout(() => {
        this.setLoding({status: false})
        this.$router.push({path: '/weika/choose_products'})
      }, 100)
    },
    routeBack () {
      this.$router.push({path: '/weika/step1'})
    },
    ...mapMutations({invId: 'SET_WEIKA_INVID', setLoding: 'UPDATE_LOADING'}),
    ...mapActions(['Wk_Quota'])
  }
}
</script>
<style lang="less" scoped>
body {
  background: #fff;
}
.tit {
  font-size: 0.4rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}
.boack1 {
  padding: 0.2rem;
  text-align: center;
  .bg {
    background: #f0f0f0;
    border-radius: 5px;
    padding: 0.5rem 0 0.1rem;
    margin-bottom: 0.5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.33%;
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
  .btn-aoc {
    margin-top: 0.3rem;
  }
}
</style>
