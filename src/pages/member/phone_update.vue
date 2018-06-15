<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="更改手机号">
    </x-header>
    <div class="main2">
      <div class="content">
        <divider>已经绑定显示样式</divider>
        <div class="yjbd">
          <p><img src="./images/phone_update.png"></p>
          <p class="tips">您的账户当前绑定的手机为
            <span>185****8585</span>
            如果需要修改绑定手机号，需要进行身份验证
          </p>
        </div>
        <div class="tijiao">
          <button class="btn-aoc">更换绑定</button>
        </div>

        <divider>未绑定或者更换绑定</divider>
        <group>
          <x-input label-width="4em" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" required></x-input>
          <x-input placeholder="请输入验证码" class="weui-vcode" required>
            <span slot="right" class="fasong">获取验证码</span>
          </x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc">确认绑定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    XInput,
    Group,
    Divider
  },
  methods: {}
};
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