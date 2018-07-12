<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="DataTree.mobile_phone ? '更改手机号' : '绑定手机号'"></my-header>
    <div class="main2">

      <div class="content-a" v-if="switchWindow">

        <div class="yjbd" v-if="switchWindow">
          <p><img src="./images/phone_update.png"></p>
          <p class="tips">您的账户当前绑定的手机为
            <span>{{ DataTree.mobile_phone | mobilePhoneFilter }}</span>
            如果需要修改绑定手机号，需要进行身份验证
          </p>
        </div>
        <div class="tijiao" v-if="switchWindow">
          <button class="btn-aoc" @click="_changePhone">
            <span v-if="!isLoading">更换绑定</span>
            <spinner type="ripple" size="40px" v-else></spinner>
          </button>
        </div>
      </div>

      <div class="content-b" v-else>
        <group>
          <x-input label-width="4em" name="mobile" v-model="my_mobile_phone" placeholder="请输入手机号码" ref="refPhone" keyboard="number" @on-change="keydown" is-type="china-mobile" required></x-input>
          <x-input placeholder="请输入验证码" class="weui-vcode" ref="refValidator" v-model="verification_code" @on-change="keydown" :is-type="validator_verification" required>
            <span slot="right" class="fasong" @click="_getVerificationCode">
              {{ countDown ? `&nbsp;&nbsp;${countDown}&nbsp;&nbsp;` : '获取验证码' }}
            </span>
          </x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc" :class="!clickAble ? 'btn-aoc-disble' : ''" @click="_lastToBind">
            {{ DataTree.mobile_phone ? '确认绑定' : '验证后绑定新手机'}}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { XInput, Group, Divider, Spinner } from 'vux'
import { mapActions } from 'vuex'
import { Toast } from 'mint-ui'
export default {
  props: {
    DataTree: {
      type: Object
    }
  },
  data () {
    return {
      isLoading: false,
      switchWindow: false,
      clickAble: /* 提交按钮是否可点击 */ false,
      sendAble: /* 验证码是否可发送 */ false,
      isGetVerificationCode: /* 验证码是否已发送 */false,
      countDown: /* 验证码倒计时 */ null,
      my_mobile_phone: '',
      verification_code: '',
      validator_verification: val => {
        return {
          valid: !!val.match(/^[0-9]/),
          msg: '格式不正确!'
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      Object.assign(this.$data, this.$options.data())
      if (this.DataTree.mobile_phone) {
        this.switchWindow = true
      }
    }
  },
  components: {
    XInput,
    Group,
    Divider,
    Spinner
  },
  created () {
    this.switchWindow = !!this.DataTree.mobile_phone
  },
  methods: {
    ...mapActions([
      'HTTP_verification',
      'HTTP_bindPhone',
      'HTTP_UserInfo',
      'HTTP_resetPhonePassIdentity',
      'HTTP_resetPhonePassIdentityDrop',
      'HTTP_resetPhone'
    ]),
    keydown () {
      this.sendAble = this.$refs.refPhone.valid
      this.clickAble = this.$refs.refValidator.valid && this.isGetVerificationCode
    },
    _getVerificationCode () { // 获取验证码
      this.isGetVerificationCode = true
      if (this.sendAble) {
        Toast('验证码已发送!')
        this.countDown = 60
        let timer = setInterval(() => {
          if (this.countDown === 0) {
            this.countDown = null
            clearInterval(timer)
          } else {
            this.countDown--
          }
        }, 1000)
        this.HTTP_verification(this.my_mobile_phone)
      } else {
        Toast('请填写正确的手机号!')
      }
    },
    _lastToBind () {
      if (!this.$refs.refPhone.valid || !this.$refs.refValidator.valid) {
        Toast('请填写正确的格式!')
        return
      }

      if (this.clickAble && this.sendAble && this.isGetVerificationCode) {
        if (this.DataTree.mobile_phone) {
          this.HTTP_resetPhone({
            mobile_phone: this.my_mobile_phone,
            captcha: this.verification_code
          })
            .then(res => {
              if (res.result_state === 'success') {
                this.HTTP_UserInfo().then(res => {
                  this.$store.commit('SET_USER_INFO', res.data)
                  this.$router.push({path: '/member/settings'})
                  this.$vux.toast.show({
                    text: '更换手机号完成',
                    type: 'text',
                    time: 1000
                  })
                })
              }
            })
        } else {
          this.HTTP_bindPhone({
            phone: this.my_mobile_phone,
            code: this.verification_code
          })
            .then(res => {
              if (res.result_state === 'success') {
                this.HTTP_UserInfo().then(res => {
                  this.$store.commit('SET_USER_INFO', res.data)
                  this.$router.push({path: '/member/settings'})
                  this.$vux.toast.show({
                    text: '成功绑定手机号',
                    type: 'text',
                    time: 1500
                  })
                })
              } else {
                this.verification_code = ''
                this.$vux.toast.show({
                  text: res.message,
                  type: 'text'
                })
              }
            })
        }
      }
    },
    _changePhone () {
      const _this = this
      this.HTTP_resetPhonePassIdentity()
        .then(res => {
          this.isLoading = true

          this.$vux.toast.show({
            text: '验证码已发送',
            type: 'text',
            time: 1000
          })

          this.$vux.confirm.show({
            title: '验证码已发送至' + this.DataTree.mobile_phone.slice(0, 3) + '****' + this.DataTree.mobile_phone.slice(7, 12),
            showInput: true,
            closeOnConfirm: false,
            onConfirm (val) {
              if (val.match(/^[0-9]{5}$/)) {
                this.$vux.loading.show()
                _this.HTTP_resetPhonePassIdentityDrop(val)
                  .then(res => {
                    this.$vux.loading.hide()
                    if (res.result_state === 'success') {
                      _this.$vux.toast.show({
                        text: '验证成功',
                        type: 'text'
                      })
                      _this.$vux.confirm.hide()
                      _this.switchWindow = false
                    }
                  })
              }
            }
          })
        })
    },
    routeBack () {
      this.$router.push({path: '/member/settings'})
    }
  }
}
</script>

<style lang="less" scoped>
.yjbd {
  background: #ffffff;
  padding: 0.4rem 0.7rem;
  text-align: center;
  .tips {
    margin-top: 0.2rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
    color: #666666;
    span {
      color: #f5222d;
    }
  }
  img {
    width: 0.56rem;
    height: 1rem;
  }
}
.tijiao {
  margin-top: 0.2rem;
  padding: 0.3rem;
}
.fasong {
  color: #333;
  &::before {
    content: "|";
    width: 1px;
    color: #d9d9d9;
    padding-right: 0.2rem;
  }
}
.fasong_active {
  color: #666;
}
</style>
