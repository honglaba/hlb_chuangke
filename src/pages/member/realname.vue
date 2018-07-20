<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'实名认证'"></my-header>
    <div class="main2">
      <div class="content">
        <group>
          <x-input title='真实姓名' type="text" ref="name" v-model="value.real_name" :disabled="WriteDisable" :is-type="valid.name" @on-change="_keydown" required></x-input>
          <x-input title='身份证号码' type="text" ref="identCard" v-model="value.id_card" :disabled="WriteDisable" :is-type="valid.identCard" @on-change="_keydown" required></x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc" v-if="!getUser.real_name" :class="!clickAble ? 'btn-aoc-disble' : ''" @click="_submit">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider } from 'vux'
import { mapActions, mapGetters } from 'vuex'
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
        real_name: '',
        id_card: ''
      },
      WriteDisable: false
    }
  },
  components: {
    XInput,
    Group,
    Divider
  },
  computed: {
    ...mapGetters({getUser: 'userInfoGetter'})
  },
  created () {
    if (this.getUser.real_name && this.getUser.id_card) {
      this.value.real_name = this.getUser.real_name
      this.value.id_card = this.getUser.id_card
      this.WriteDisable = true
    }
  },
  methods: {
    ...mapActions(['HTTP_realNameRegistration', 'HTTP_UserInfo']),
    _keydown () {
      this.clickAble = this.$refs.name.valid && this.$refs.identCard.valid
    },
    _submit () {
      if (!this.$refs.name.valid || !this.$refs.identCard.valid) {
        this.$vux.toast.hide()
        this.$vux.toast.text('请填写正确的信息')
        return
      }

      this.HTTP_realNameRegistration({
        name: this.value.real_name,
        id_card: this.value.id_card
      })
        .then(res => {
          this.HTTP_UserInfo()
            .then(res1 => {
              this.$store.commit('SET_USER_INFO', res1.data)
              this.$vux.toast.show('实名认证成功')
              this.WriteDisable = true
              if (this.$route.query.status) this.$router.push({name: 'step1'})
            })
        })
        .catch(erro => {
          this.$vux.confirm.show({
            showCancelButton: false,
            title: '提示',
            content: erro.message
          })
        })
    },
    routeBack () {
      if (this.$route.query.status) {
        this.$router.push({path: '/weika'})
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
