<template>
  <div class="app">
    <my-header @left-action="routeBack" :left-options="{preventGoBack: true}" :Title="'设置'"></my-header>
    <div class="main2">
      <div class="content">
        <div class="settingbox base_box">
          <div class="shezhi">
            <router-link to="/member/myinfo">
              <div class="tit">
                <div class="l">个人设置</div>
                <div class="r"><img :src="rightArrow"></div>
              </div>
            </router-link>
            <router-link :to="{path: '/member/realname', query: {status: false}}">
              <div class="tit">
                <div class="l">实名认证</div>
                <div class="r">
                  <span v-if="DataTree.real_name">已认证</span>
                  <span v-else class="disable-font">未认证</span>
                  <img :src="rightArrow" v-if="!DataTree.real_name">
                </div>
              </div>
            </router-link>
            <router-link to="/member/address">
              <div class="tit">
                <div class="l">管理收货地址</div>
                <div class="r">
                  <img :src="rightArrow">
                </div>
              </div>
            </router-link>
            <router-link to="/member/phone_update">
              <div class="tit">
                <div class="l">{{ DataTree.mobile_phone ? '已绑定手机号' : '绑定手机号' }}</div>
                <div class="r">{{ DataTree.mobile_phone | mobilePhoneFilter }}<img :src="rightArrow"></div>
              </div>
            </router-link>
            <router-link :to="{path: '/member/paysetting/1', query: {t: +new Date()}}">
              <div class="tit">
                <div class="l">支付设置</div>
                <div class="r"><img :src="rightArrow"></div>
              </div>
            </router-link>
             <router-link to="/member/version">
              <div class="tit">
                <div class="l">关于我们</div>
                <div class="r"><img :src="rightArrow"></div>
              </div>
            </router-link>
          </div>
          <div class="logoff" v-if="userAgenForButton" @click="_logout()">
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
    return {
      userAgenForButton: false,
      rightArrow: require('../../assets/images/you1.png')
    }
  },
  props: {
    DataTree: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['HTTP_logout', 'HTTP_UserInfo']),
    _logout () {
      this.HTTP_logout().then(res => {
        this.$router.push({path: '/'})
      })
    },
    routeBack () { // 顶部返回按钮事件
      this.$router.push({path: '/member'})
    }
  }
}
</script>
<style lang="less" scoped>
.disable-font {
  color: #f5222d;
  font-size: .24rem;
}
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
