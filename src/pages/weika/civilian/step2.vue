<template>
  <div class="app">
    <div class="main2">
      <div class="content pd20">
        <div class="logo"><img src="../images/b1.png"><br>填写推荐人信息</div>
        <group>
          <x-input label-width="4em" placeholder="邀请码" ref="yqm" :is-type="validator_verification" v-model="invCode" required></x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc" @click="_invCodePass">下一步</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { XInput, Group } from 'vux'
import { Toast } from 'mint-ui'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      invCode: '',
      validator_verification: val => {
        return {
          valid: val.length >= 6 ? new RegExp(/^[A-Z0-9]{6}$/).test(val) : new RegExp(/^[A-Z0-9]{0,6}$/).test(val),
          msg: '格式不正确!'
        }
      }
    }
  },
  methods: {
    ...mapActions(['Wk_CheckInv']),
    _invCodePass () {
      if (this.$refs.yqm.valid && this.invCode.length === 6) {
        this.$store.commit('SET_WEIKA_INVID', this.invCode)
        localStorage.setItem('invite_id', this.invCode)
        this.Wk_CheckInv(this.invCode).then(res => {
          Toast({
            message: '验证通过',
            iconClass: 'icon icon-success',
            duration: 1500
          })
          setTimeout(e => {
            this.$router.push({path: '/weika/choose_products'})
          }, 1500)
        })
      } else {
        Toast({
          message: '格式不正确',
          position: 'top',
          duration: 1500
        })
      }
    }
  },
  components: {
    XInput,
    Group
  }
}
</script>
<style lang="less" scoped>
.logo {
  margin-top: .5rem;
  margin-bottom: .4rem;
  text-align: center;
  img {
    height: 1.1rem;
  }
}
.tijiao {
  padding: 0.4rem 0.3rem;
  button {
    display: block;
    width: 100%;
    border: none;
  }
}
</style>
