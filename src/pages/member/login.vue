<template>
  <div class="app">
    <my-header @left-action="routeBack" :Title="'登录'"></my-header>
    <div class="main2">
      <div class="content pd20">
        <div class="logo"><img src="../../assets/images/logo.png"></div>
        <group>
          <x-input label-width="4em" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" required></x-input>
          <x-input placeholder="请输入验证码" class="weui-vcode" required>
            <span slot="right" class="fasong">获取验证码</span>
          </x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc">立即登录</button>
        </div>
        <div class="tips">
          <p>登录即视为同意
            <span>
              用户使用协议</span>
          </p>
        </div>
        <div class="tongdao">
          <divider>第三方登录</divider>
          <div class="weixin"><img src="../../assets/images/weixin.png" @click="loginWX()"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider } from 'vux'
import HTTP from '@/api'
export default {
  data () {
    return {}
  },
  methods: {
    loginWX () {
      // 微信登录
      HTTP.HTTP_GET_wxident().then(res => {
        window.location = res.redirect
      })
    },
    routeBack () {
      this.$router.push({path: '/member/settings'})
    }
  },
  components: {
    XInput,
    Group,
    Divider
  }
}
</script>
<style lang="less" scoped>
.main {
  bottom: 0;
}
.logo {
  height: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  img {
    height: 1.1rem;
  }
}
.tips {
  font-size: 0.28rem;
  text-align: center;
  color: #333;
  span {
    color: #f5232e;
  }
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
.tongdao {
  font-size: 0.28rem;
  height: 1.1rem;
  margin-top: 0.5rem;
  text-align: center;
  img {
    margin-top: 0.6rem;
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
