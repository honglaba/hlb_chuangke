<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="支付设置">
    </x-header>
    <div class="main2">
      <div class="content">
        <group>
          <x-input title='原密码' type="text" required></x-input>
          <x-input title='新密码' type="text" required></x-input>
          <x-input placeholder="请输入验证码" class="weui-vcode" required>
            <span slot="right" class="fasong">获取验证码</span>
          </x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider } from 'vux'
export default {
  data () {
    return {}
  },
  components: {
    XInput,
    Group,
    Divider
  },
  methods: {}
}
</script>
<style lang="less" scoped>
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
