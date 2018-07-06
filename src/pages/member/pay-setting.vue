<template>
  <div class="app">
    <x-header
      :left-options="{backText: '', preventGoBack: true}"
      :title="!!DataTree.is_set_pay_password ? '重置支付密码' : '设置支付密码'"
      @on-click-back="routeBack"
      ></x-header>
    <div class="pay-ident" v-if="interFaceToggle">
      <span class="pay-ident-item" @click="checkType(2)">
        忘记6位数字支付密码
        <img class="pay-ident-icon" src="static/images/enter.png">
      </span>
      <span class="pay-ident-item" @click="checkType(3)">
        修改6位数字支付密码
        <img class="pay-ident-icon" src="static/images/enter.png">
      </span>
    </div>

    <div class="pay-contain" v-else>
      <div class="pay-num">
        <span class="pay-text">{{ paytitle }}</span>
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
import { Loading } from 'vux'
export default {
  props: {
    DataTree: {
      type: Object
    }
  },
  watch: {
    '$route' (to, from) {
      Object.assign(this.$data, this.$options.data())
      this.resetType = this.$route.params.id
    },
    resetType (val, oldval) {
      switch (val) {
        case '1':
          // console.log('1')
          break
        case '2':
          // console.log('2')
          break
        case '3':
          this.paytitle = '请输入原支付密码,验证身份'
          break
        case '4':
          // console.log('4')
          break
        default:
          return false
      }
    }
  },
  components: {
    Loading
  },
  computed: {
    interFaceToggle () {
      return this.isReset && this.resetType === '1'
    }
  },
  data () {
    return {
      paytitle: '请设置密码,用于支付验证',
      paybackspace: require('static/images/paycutbtn.png'),
      numVal: [],
      numComfirm: [],
      isWaiting: false,
      isReset: true, // 是否为重置密码
      resetType: '1' // 目前界面所处的状态
    }
  },
  created () {
    this.isReset = !!this.DataTree.is_set_pay_password
  },
  methods: {
    ...mapActions([
      'HTTP_UserInfo',
      'User_PayPwdConf',
      'User_PayPwdPass',
      'User_PayResetPhoneVerificationGet',
      'User_PayResetPhoneVerificationPass'
    ]),
    kayval (val) { // 筛选不同的按键类型,假设有多种,目前只有两种
      let numlist = this.numVal
      switch (val) {
        case 'back':
          if (numlist.length > 0) this.numVal.pop()
          break
        default:
          this.keyMapHandle(val)
      }
    },
    keyMapHandle (val) {
      let _this = this
      let numlist = this.numVal
      if (numlist.length !== 5) {
        this.numVal.push(val)
      } else {
        this.numVal.push(val)
        if (this.resetType === '3') { // 如果当前是在进行身份认证(支付密码), 则在第一次确认后直接请求
          // this.$vux.loading.show()
          let str = ''
          this.numVal.map(r => {
            str += r
          })
          this.User_PayPwdPass({pay_password: str, action: 'modify_pay_password'}).then(res => {
            if (res) {
              this.$vux.loading.hide()
              this.$router.push({path: '/member/paysetting/4'})
            } else {
              // this.$vux.loading.hide()
              this.$vux.confirm.show({
                showCancelButton: false,
                title: '提示',
                content: '请输入正确的原支付密码',
                onHide () {
                  _this.numVal = []
                }
              })
            }
          })
        } else {
          if (this.numComfirm.length > 0) {
            this._checkoutCode() // 开始检查两次的结果
          } else {
            this.$vux.loading.show()
            this.numComfirm = numlist
            this.paytitle = '请再次输入,以确认密码'
            this.numVal = []
            setTimeout(() => {
              this.$vux.loading.hide()
            })
          }
        }
      }
    },
    _checkoutCode () { // (最后确认的一步)--将数组转化为字符串并发送请求
      let flag = true
      let str1 = ''
      let str2 = ''
      let _this = this
      this.numVal.forEach((n, index) => { // 判断两次结果是否相等
        str1 += this.numVal[index]
        str2 += this.numComfirm[index]
        if (n !== this.numComfirm[index]) {
          flag = false
        }
      })
      if (flag) {
        this.isWaiting = true
        this.$vux.loading.show()
        this.User_PayPwdConf(
          [str1, str2, this.resetType] /* type is important */
        ).then(res => {
          this.isWaiting = false
          this.HTTP_UserInfo().then(res => {
            this.$vux.loading.hide()
            // show-cancel-button
            this.$vux.confirm.show({
              showCancelButton: false,
              title: '提示',
              content: '支付密码修改成功!'
            })
            this.$store.commit('SET_USER_INFO', res.data)
            this.$router.push({path: '/member/settings'})
          })
        })
      } else {
        this.$vux.loading.show()
        setTimeout(() => {
          this.numVal = []
          this.$vux.loading.hide()
        }, 300)
        this.$vux.confirm.show({
          showCancelButton: false,
          title: '提示',
          content: '两次输入不一致!',
          onHide () {
            _this.numVal = []
          }
        })
      }
    },
    checkType (c) { // 选择验证身份的方式
      let _this = this
      if (c === 2) {
        if (!this.DataTree.mobile_phone) {
          this.$vux.confirm.show({
            title: '提示',
            content: '请先绑定手机号!',
            onConfirm (val) {
              _this.$router.push({path: '/member/phone_update'})
            }
          })
          return
        }
        this.User_PayResetPhoneVerificationGet()
        this.$vux.confirm.show({
          title: '验证码已发送至' + this.DataTree.mobile_phone.slice(0, 3) + '****' + this.DataTree.mobile_phone.slice(7, 12),
          showInput: true,
          closeOnConfirm: false,
          onConfirm (val) {
            if (val.match(/^[0-9]{5}$/)) {
              _this.$vux.loading.show()
              _this.User_PayResetPhoneVerificationPass(val).then(res => {
                _this.resetType = '2'
                if (res.result_state === 'success') {
                  _this.$vux.confirm.hide()
                  _this.$vux.loading.hide()
                }
              })
            }
          }
        })
      } else if (c === 3) {
        this.$vux.loading.show()
        setTimeout(() => {
          this.resetType = '3'
          this.$vux.loading.hide()
        }, 500)
      }
    },
    routeBack () { // 顶部返回按钮事件
      this.$router.push({path: '/member/settings'})
    }
  }
}
</script>
<style lang="less" scoped>
.ident-title {
  padding-left: 14px;
  font-size: 0.18rem;
  color: #666;
}
.pay-ident {
  .pay-ident-item {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    padding-left: 0.2rem;
    background-color: #fff;
    display: block;
  }
  .pay-ident-icon {
    width: .6rem;
    height: .6rem;
    float: right;
    margin-top: .2rem;
    margin-right: .2rem;
  }
  .pay-ident-item:nth-child(2) {
  border-top: 2px solid #f0f0f0;
}
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
