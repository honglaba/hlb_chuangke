<template>
  <div class="app">
    <Header></Header>
    <div class="main">
      <div class="content pd20">
        <div class="logo"><img src="../../assets/images/logo.png"></div>
        <group>
          <x-input label-width="4em" placeholder="请输入手机号码" required></x-input>
          <x-input placeholder="请输入验证码" class="weui-vcode">
            <x-button slot="right" type="primary" mini>发送验证码</x-button>
          </x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc">立即登录</button>
        </div>
        <div class="tips">
          <p>登录即视为同意
            <span>
              <<用户使用协议>></span>
          </p>
        </div>
        <div class="tongdao">
          <divider>第三方登录</divider>
          <div class="weixin"><img src="../../assets/images/common/weixin.png"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { XInput, Group, XButton, Cell, Divider } from "vux";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Divider,
    Header,
    Footer
  }
};
</script>
<style lang="less" scoped>
.main{bottom: 0;}
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
  button{display: block; width: 100%; border: none;}
}

.btn-aoc {
  box-sizing: border-box;
  display: inline-block;
  margin: 0 auto;
  height: .9rem;
  width: 1.6rem;
  line-height: .9rem;
  font-weight: 700;
  font-size: .32rem;
  text-align: center;
  color: #fff;
  background-image: -webkit-linear-gradient(225deg, #f5252d 0, #ff7d32 94%);
  background-image: linear-gradient(225deg, #f5252d 0, #ff7d32 94%);
  border-radius: .04rem;
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>

