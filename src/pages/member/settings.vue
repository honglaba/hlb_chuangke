<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="设置">
    </x-header>
    <div class="main2">
      <div class="content">
        <div class="settingbox base_box">
          <div class="shezhi">
            <router-link to="/member/myinfo">
              <div class="tit">
                <div class="l">个人设置</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link to="/member/realname">
              <div class="tit">
                <div class="l">实名认证</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link to="/member/address">
              <div class="tit">
                <div class="l">管理收货地址</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link to="/member/phone_update">
              <div class="tit">
                <div class="l">更绑手机</div>
                <div class="r">185****8185<img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link to="/member/paysettings">
              <div class="tit">
                <div class="l">支付设置</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
          </div>
          <div class="logoff" @click="_logout()">
            退出登录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions(['HTTP_logout', 'HTTP_UserInfo']),
    _logout () {
      this.HTTP_logout().then(res => {
        this.$router.push({path: '/'})
      })
    }
  }
}
</script>
<style lang="less" scoped>
.settingbox {
  background: transparent;
  .shezhi {
    background: #fff;
    a {
      padding: 0 0.2rem;
      display: block;
      border-bottom: #f0f0f0 solid 1px;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .logoff {
    margin-top: 0.2rem;
    background: #fff;
    color: #f5232e;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.8rem;
  }
}
</style>
