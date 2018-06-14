<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="问题反馈">
    </x-header>
    <div class="main2">
      <div class="content">
        <div class="feedback base_box">
          <group>
            <p class="name">描述您遇到的问题</p>
            <x-textarea :max="200" placeholder="详细描述遇到的问题" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
            <p class="name">上传凭证
              <span>(不超过3张)</span>
            </p>
            <div class="upload">
              <div class="icon"><img src="../../assets/images/upload.png"></div>
            </div>
            <x-input title='联系人' type="text" required></x-input>
            <x-input title='联系方式' type="text" required></x-input>
          </group>
        </div>
        <div class="tijiao">
          <span class="btn-aoc">立即提交</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XTextarea, Group, XInput } from "vux";

export default {
  components: {
    XTextarea,
    Group,
    XInput
  },
  methods: {
    onEvent(event) {
      console.log("on", event);
    }
  }
};
</script>
<style lang="less" scoped>
.feedback {
  .name {
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    span {
      color: #999;
      font-size: 0.24rem;
    }
  }
  .upload {
    padding: 0 0.3rem;
    margin-bottom: 0.3rem;
    .icon {
      background: #f7f7f7;
      display: inline-block;
    }
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}
.tijiao {
  margin-top: 0.2rem;
  padding: 0.2rem;
}
</style>