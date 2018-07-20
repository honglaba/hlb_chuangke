<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'提现'">
      <span slot="right" @click="$router.push('/weika/withdraw_log')">提现记录</span>
    </my-header>
    <div class="main">
      <div class="content">
        <div class="base_box pd20 mt20">
          <div class="tit">
            <div class="l">选择到账户</div>
            <div class="r"></div>
          </div>
          <ul class="account">
            <li class="on">
              <div class="left">
                <img src="~assets/images/weixin.png">微信
              </div>
              <div class="right">
                <span>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="base_box pd20 mt20">
          <div class="tit">
            <div class="l">提现金额</div>
            <!-- <div class="r">提现规则<img src="~assets/images/you1.png"></div> -->
          </div>
          <div class="money-input">
            <!-- <span>¥</span> -->
            <span class="sign-withdraw"><img :src="require('../images/Withdrawal _ money sign@2x.png')" alt=""></span>
            <input type="number" class="money-input-item" v-model="numberA" @keydown="_onMoneyChange">
          </div>
          <p class="mtb20 c999">可提现金额￥{{ vipInfo.money }}</p>
          <p class="mb20">
            <button class="btn-aoc" :class="!clickAble ? 'btn-aoc-disble' : ''" @click="_withDraw">立即提现</button>
          </p>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
import { Radio, XInput } from 'vux'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      defaultAccount: '1',
      accountLists: [
        {
          icon: require('assets/images/weixin.png'),
          key: '1',
          value: '微信'
        }
      ],
      valid: {
        money () {
          return false
        }
      },
      numberA: '',
      remark: '',
      clickAble: true
    }
  },
  computed: {
    ...mapGetters({vipInfo: 'getWkVipInfo'})
  },
  methods: {
    _onMoneyChange (e) {
      if (e.keyCode === 8) {
        e.returnValue = true
        return
      }

      if (e.keyCode === 69) {
        e.preventDefault()
        return
      }

      if (this.numberA.split('.')[1]) {
        if (this.numberA.split('.')[1].length >= 2) e.preventDefault()
      }

      if (this.numberA > this.vipInfo.money) {

      }
    },
    _withDraw () {
      if (+this.numberA < 1) {
        this.$vux.toast.show({text: '提现金额要大于1元', width: '3rem'})
        return
      }
      if (+this.numberA > this.vipInfo.money) {
        this.$vux.toast.show({text: '请输入正确的金额', width: '3rem'})
        return
      }

      let amount = this.numberA
      let remark = this.remark
      let _this = this
      this.updateLoading({status: true})
      this.Vip_Withdraw({ amount, remark })
        .then(res => {
          this.Wk_Index()
            .then(vres => {
              this.updateLoading({status: false})
              this.$vux.toast.show(
                {
                  text: '提现申请成功',
                  type: 'success',
                  time: 2000,
                  onHide () {
                    _this.$router.push('/weika/vip')
                  }
                })
            })
        })
        .catch(erro => {
          this.$vux.toast.show(erro.message)
        })
    },
    routeBack () {
      this.$router.push({path: '/weika/vip'})
    },
    ...mapActions(['Vip_Withdraw', 'Wk_Index']),
    ...mapMutations({updateLoading: 'UPDATE_LOADING'})
  },
  components: {
    Radio,
    XInput
  }
}
</script>
<style lang="less" scoped>
.base_box .tit {
  height: .6rem;
  margin-bottom: 0.2rem;
}
// 提现输入框
.money-input {
  width: 100%;
  height: .9rem;
  font-size: .6rem;
  font-weight: 600;
  line-height: .9rem;
  border-bottom: .5px solid rgb(224, 224, 224);
  position: relative;
  span {
    display: block;
    float: left;
  }
  .sign-withdraw {
    width: .40rem;
    height: 100%;
    img {
      display: block;
      width: .40rem;
      height: .47rem;
      margin-top: 50%;
    }
  }
  .money-input-item {
    display: block;
    box-sizing: border-box;
    float: left;
    width: 80%;
    height: .9rem;
    font-size: .6rem;
    margin-left: .2rem;
    outline: none;
    border: none;
  }
}

// .btn-aoc {
//   background-image: -webkit-linear-gradient(225deg, #f97d81 0, #ffb084 94%);
//   background-image: linear-gradient(225deg, #f97d81 0, #ffb084 94%);
// }
.account li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  position: relative;
  .left {
    display: flex;
    align-items: center;
  }
  img {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.1rem;
  }
  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px dashed #e6e6e6;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 0.58rem;
  }
  &:first-child::before {
    width: 0;
  }
  a {
    color: #999;
  }
  .right {
    a {
      display: flex;
      align-items: center;
    }
    img {
      width: 0.16rem;
      height: 0.28rem;
      margin-left: 0.1rem;
      margin-right: 0;
    }
    span {
      width: 0.4rem;
      height: 0.4rem;
      background: url("~assets/images/radio_unon.png") no-repeat;
      display: block;
      background-size: cover;
    }
  }
  &.on {
    .right {
      span {
        background: url("~assets/images/radio_on.png") no-repeat;
        background-size: cover;
      }
    }
  }
}
.weui-cell {
  border-bottom: solid 1px #e6e6e6;
  padding-left: 0;
}
</style>
