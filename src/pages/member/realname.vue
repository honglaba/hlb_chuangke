<template>
  <div class="app">
    <x-header title="实名认证" :left-options="{backText: '', preventGoBack: true}" @on-click-back="routeBack">
    </x-header>
    <div class="main2">
      <div class="content">
        <group>
          <x-input title='真实姓名' type="text" ref="name" v-model="value.name" :is-type="valid.name" @on-change="_keydown" required></x-input>
          <x-input title='身份证号码' type="text" ref="identCard" v-model="value.identCard" :is-type="valid.identCard" @on-change="_keydown" required></x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc" :class="!clickAble ? 'btn-aoc-disble' : ''" @click="_submit">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider } from 'vux'
import { mapActions } from 'vuex'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      clickAble: false,
      valid: {
        name (val) {
          return {
            valid: !!val.match(/^[\u4e00-\u9fa5]{2,5}$/),
            msg: '格式不正确'
          }
        },
        identCard (val) {
          return {
            valid: !!val.match(
              /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/
            ),
            msg: '格式不正确'
          }
        }
      },
      value: {
        name: '',
        identCard: ''
      }
    }
  },
  components: {
    XInput,
    Group,
    Divider
  },
  methods: {
    ...mapActions(['HTTP_realNameRegistration', 'HTTP_UserInfo']),
    _keydown () {
      this.clickAble = this.$refs.name.valid && this.$refs.identCard.valid
    },
    _submit () {
      let _this = this
      if (!this.$refs.name.valid || !this.$refs.identCard.valid) {
        Toast('请填写正确的信息')
        return
      }

      this.HTTP_realNameRegistration({
        name: this.value.name,
        id_card: this.value.identCard
      })
        .then(res => {
          if (res.result_state === 'success') {
            this.HTTP_UserInfo().then(res1 => {
              this.$store.commit('SET_USER_INFO', res1.data)
              this.$vux.confirm.show({
                showCancelButton: false,
                title: '提示',
                content: '实名认证成功',
                onHide () {
                  if (this.$route.query.type) {
                    _this.$router.push({name: 'step1'})
                  } else {
                    _this.$router.push({path: '/member/settings'})
                  }
                }
              })
            })
          } else {
            this.$vux.confirm.show({
              showCancelButton: false,
              title: '提示',
              content: res.message
            })
          }
        })
    },
    routeBack () {
      if (this.$route.query.type) {
        this.$router.push({name: 'step1'})
      } else {
        this.$router.push({path: '/member/settings'})
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tijiao {
  margin-top: 0.2rem;
  padding: 0.3rem;
}
</style>
