<template>
  <div class="app">
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
            <div class="r">提现规则<img src="~assets/images/you1.png"></div>
          </div>
          <div class="money-input">
            <span>¥</span>
            <input type="text" class="money-input-item" v-model="numberA" @keydown="_moneyOnchange">
          </div>
          <p class="mtb20 c999">可提现金额￥{{ VipInfoData.money }}</p>
          <p class="mb20">
            <button :class="'btn-aoc'" @click="_withDraw">立即提现</button>
          </p>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
import { Radio, XInput } from 'vux'
import { mapActions, mapGetters } from 'vuex'
import { MessageBox } from 'mint-ui'
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
      remark: ''
    }
  },
  computed: {
    ...mapGetters(['getWkVipInfo']),
    VipInfoData () {
      return this.getWkVipInfo
    }
  },
  watch: {
    numberA (val, oldval) {
      console.log(this.numberA)
      if (val - this.VipInfoData.money > 0) {
        this.numberA = this.VipInfoData.money
      }
    }
  },
  methods: {
    _moneyOnchange (e) {
      if (this.numberA - this.VipInfoData.money > 0) {
        // console.log(this.numberA)
        // console.log(this.numberA.split('.'))
        e.target.readOnly = true
        setTimeout(() => {
          e.target.readOnly = false
        }, 50)
      }
    },
    _withDraw () {
      let amount = this.numberA
      let remark = this.remark
      this.Vip_Withdraw({ amount, remark }).then(res => {
        MessageBox.alert('提现成功').then(action => {})
      })
    },
    ...mapActions(['Vip_Withdraw'])
  },
  components: {
    Radio,
    XInput
  }
}
</script>
<style lang="less" scoped>
.base_box .tit {
  height: auto;
  margin-bottom: 0.2rem;
}
// 提现输入框
.money-input {
  width: 100%;
  height: .9rem;
  font-size: .6rem;
  font-weight: 600;
  line-height: .9rem;
  border-bottom: 1px solid rgb(196, 190, 190);
  span {
    display: block;
    float: left;
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

.btn-aoc {
  background-image: -webkit-linear-gradient(225deg, #f97d81 0, #ffb084 94%);
  background-image: linear-gradient(225deg, #f97d81 0, #ffb084 94%);
}
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
    width: 0.48rem;
    height: 0.48rem;
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
      width: 0.48rem;
      height: 0.48rem;
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
