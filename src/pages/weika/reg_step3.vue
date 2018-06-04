<template>
    <div class="app">
        <Header></Header>
        <div class="main2">
            <div class="content pd20">
                <group>
                    <x-input title="真实姓名" label-width="6em" placeholder="请填写真实姓名" required></x-input>
                    <x-input title="身份证号码" label-width="6em" placeholder="请填写身份证号码" required></x-input>
                    <popup-picker title="籍贯" :data="jiguanList" v-model="jiguan" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
                    <popup-picker title="性别" :data="sexList" v-model="sex"  @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
                    <datetime title="生日" v-model="birthday" placeholder="请选择"></datetime>
                    <!-- <x-input placeholder="请输入验证码" class="weui-vcode" required>
            <span slot="right" class="fasong">获取验证码</span>
          </x-input> -->
                    <div class="tijiao">
                        <button class="btn-aoc">下一步</button>
                    </div>
                </group>
            </div>
        </div>
    </div>
</template>
<script>
import { XInput, Selector, Group, PopupPicker, Datetime, Picker } from "vux";
export default {
  data() {
    return {
      jiguan: ['广东'],
      jiguanList: [["广东", "广西", "华为", "情怀", "三星", "其他", "不告诉你"]],
      sex: ['男'],
      sexList: [["男", "女", "保密"]],
    };
  },
  components: {
    XInput,
    Group,
    Selector,
    PopupPicker,
    Datetime,
    Picker
  }
};
</script>
<style lang="less" scoped>
.tijiao {
  padding: 0.4rem 0.3rem;
  button {
    display: block;
    width: 100%;
    border: none;
  }
}
</style>

