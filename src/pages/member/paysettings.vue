<template>
  <div class="app">
    <loading :show="isWaiting" text=""></loading>
    <x-header :left-options="{backText: ''}" :title="!!DataTree.is_set_pay_password ? '重置支付密码' : '设置支付密码'"></x-header>
    <group v-if="isReset">
      <span class="ident-title">身份验证</span>
      <cell title="手机验证" @click="checkType(1)"></cell>
      <cell title="支付密码验证" @click="checkType(2)"></cell>
    </group>
    <div class="pay-contain" v-else>
      <div class="pay-num">
        <span class="pay-text">{{paytitle}}</span>
        <ul class="pay-num-group">
          <li class="pay-num-item">{{ numVal.length > 0 ? '·' : ''}}</li>
          <li class="pay-num-item">{{ numVal.length > 1 ? '·' : ''}}</li>
          <li class="pay-num-item">{{ numVal.length > 2 ? '·' : ''}}</li>
          <li class="pay-num-item">{{ numVal.length > 3 ? '·' : ''}}</li>
          <li class="pay-num-item">{{ numVal.length > 4 ? '·' : ''}}</li>
          <li class="pay-num-item">{{ numVal.length > 5 ? '·' : ''}}</li>
        </ul>
      </div>
      <div class="pay-keymap">
        <div @click="kayval(1)">
          <span>1</span>
        </div>
        <div @click="kayval(2)">
          <span>2</span>
        </div>
        <div @click="kayval(3)">
          <span>3</span>
        </div>
        <div @click="kayval(4)">
          <span>4</span>
        </div>
        <div @click="kayval(5)">
          <span>5</span>
        </div>
        <div @click="kayval(6)">
          <span>6</span>
        </div>
        <div @click="kayval(7)">
          <span>7</span>
        </div>
        <div @click="kayval(8)">
          <span>8</span>
        </div>
        <div @click="kayval(9)">
          <span>9</span>
        </div>
        <div class="othkey"></div>
        <div @click="kayval(0)">
          <span>0</span>
        </div>
        <div class="othkey" @click="kayval('back')">
          <span><img :src="paybackspace"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { Loading, Cell, Group } from 'vux'
export default {
  props: {
    DataTree: {
      type: Object
    }
  },
  components: {
    Loading,
    Group,
    Cell
  },
  data () {
    return {
      paytitle: '请设置密码,用于支付验证',
      paybackspace: require('../../../static/images/paycutbtn.png'),
      numVal: [],
      numComfirm: [],
      isWaiting: false,
      isReset: true, // 是否为重置密码
      resetType: 'first' // 验证身份的方式
    }
  },
  created () {
    this.isReset = !!this.DataTree.is_set_pay_password
  },
  methods: {
    ...mapActions([
      'User_PayPwdconf',
      'HTTP_UserInfo',
      'User_PayResetPhoneVerificationGet',
      'User_PayResetPhoneVerificationPass'
    ]),
    kayval (val) {
      if (this.paytitle === '两次输入不一致') this.paytitle = '请再次输入,以确认密码'
      let numlist = this.numVal
      if (val !== 'back') {
        if (numlist.length !== 5) {
          this.numVal.push(val)
        } else {
          this.numVal.push(val)
          if (this.numComfirm.length > 0) {
            this._checkoutCode() // 开始检查两次的结果
          } else {
            this.numComfirm = numlist
            this.paytitle = '请再次输入,以确认密码'
            this.numVal = []
          }
        }
      } else {
        if (numlist.length > 0) {
          this.numVal.pop()
        }
      }
    },
    _checkoutCode () {
      let flag = true
      this.numVal.forEach((n, index) => {
        if (n !== this.numComfirm[index]) {
          flag = false
        }
      })
      if (flag) {
        let str1 = ''
        let str2 = ''
        for (let i = 0; i < this.numVal.length; i++) {
          str1 += this.numVal[i]
          str2 += this.numComfirm[i]
        }
        this.isWaiting = true
        this.User_PayPwdConf(
          [str1, str2, this.resetType] /* type is important */
        ).then(res => {
          this.isWaiting = false
          this.HTTP_UserInfo().then(res => {
            this.$Store.commit('SAVE_USER_INFO', res.data)
          })
        })
      } else {
        this.paytitle = '两次输入不一致'
        this.numVal = []
      }
    },
    checkType (c) {
      console.log(c)
      let _this = this
      if (c === 1) {
        this.resetType = 'phone'
        this.User_PayResetPhoneVerificationGet()
        this.$vux.confirm.show({
          title: '验证码已发送至' + this.DataTree.mobile_phone.slice(0, 3) + '****' + this.DataTree.mobile_phone.slice(7, 12),
          showInput: true,
          closeOnConfirm: false,
          onConfirm (val) {
            if (val.match(/^[0-9]{5}$/)) {
              _this.User_PayResetPhoneVerificationPass(val).then(res => {
                if (res.result_state === 'success') {
                  _this.$vux.confirm.hide()
                  _this.isReset = false
                }
              })
            }
          }
        })
      } else if (c === 2) {
        this.resetType = 'paypwd'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.ident-title {
  padding-left: 14px;
  font-size: .18rem;
  color: #666;
}
.pay-contain {
  .pay-num {
    width: 80%;
    height: 1.7rem;
    text-align: center;
    margin: 2.7rem auto;
    position: relative;
    font-size: 0.4rem;
    .pay-num-group {
      background-color: #fff;
      position: absolute;
      bottom: 0;
      .pay-num-item {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        box-sizing: border-box;
        border: 1px solid #f0f0f0;
        display: block;
        background-color: #fff;
        float: left;
      }
    }
  }
  .pay-keymap {
    width: 100%;
    height: 4.56rem;
    flex-wrap: wrap;
    display: flex;
    position: fixed;
    bottom: 0;
    .othkey {
      background-color: #f0f0f0;
      text-align: center;
      img {
        width: 0.8rem;
        height: 0.5rem;
        margin-top: 50%;
        transform: translateY(-50%);
      }
    }
    div {
      width: 33.3%;
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      background-color: #fff;
      font-size: 0.4rem;
      position: relative;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
