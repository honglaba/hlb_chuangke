<template>
  <div class="app">
    <div class="main2">
      <div class="content pd20">
        <div class="logo"><img src="../images/b1.png"><br>填写推荐人信息</div>
        <group>
          <!-- <x-input label-width="4em" placeholder="推荐人信息" required></x-input>
          <x-input label-width="4em" placeholder="推荐人手机" required></x-input> -->
          <x-input label-width="4em" placeholder="邀请码" required></x-input>
          <!-- <x-input placeholder="请输入验证码" class="weui-vcode" required>
            <span slot="right" class="fasong">获取验证码</span>
          </x-input> -->
        </group>
        <div class="tijiao">
          <button class="btn-aoc">下一步</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group } from 'vux'
export default {
  data () {
    return {}
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
