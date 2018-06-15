<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="新增收货地址">
      <img src="./images/shanchu.png" class="shanchu" slot="right">
    </x-header>
    <div class="main2">
      <div class="content">
        <group>
          <x-input title='收货人姓名' type="text" required></x-input>
          <x-input title='手机号码' type="text" required></x-input>
          <popup-picker title="所在地" :data="areaList" :columns="3" v-model="areaDefault"></popup-picker>
          <x-input title='街道地址' type="text" required></x-input>
        </group>
        <div class="setting">
          <span class="on">设为默认
            <i></i>
          </span>
        </div>
        <div class="tijiao">
          <button class="btn-aoc">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider, PopupPicker } from "vux";
export default {
  data() {
    return {
      areaDefault: [],
      areaList: [
        {
          name: "中国",
          value: "china",
          parent: 0
        },
        {
          name: "美国",
          value: "USA",
          parent: 0
        },
        {
          name: "广东",
          value: "china001",
          parent: "china"
        },
        {
          name: "广西",
          value: "china002",
          parent: "china"
        },
        {
          name: "美国001",
          value: "usa001",
          parent: "USA"
        },
        {
          name: "美国002",
          value: "usa002",
          parent: "USA"
        },
        {
          name: "广州",
          value: "gz",
          parent: "china001"
        },
        {
          name: "深圳",
          value: "sz",
          parent: "china001"
        },
        {
          name: "广西001",
          value: "gx001",
          parent: "china002"
        },
        {
          name: "广西002",
          value: "gx002",
          parent: "china002"
        },
        {
          name: "美国001_001",
          value: "0003",
          parent: "usa001"
        },
        {
          name: "美国001_002",
          value: "0004",
          parent: "usa001"
        },
        {
          name: "美国002_001",
          value: "0005",
          parent: "usa002"
        },
        {
          name: "美国002_002",
          value: "0006",
          parent: "usa002"
        }
      ]
    };
  },
  components: {
    XInput,
    Group,
    Divider,
    PopupPicker
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.shanchu {
  width: 0.29rem;
  height: 0.36rem;
}
.setting {
  padding: 0 0.3rem;
  font-size: 0.2rem;
  margin: 0.3rem 0;
  background: #fff;
  span {
    line-height: 0.9rem;
    display: flex;
    font-size: 0.28rem;
    align-items: center;
    i {
      margin-left: 0.1rem;
      width: 0.28rem;
      height: 0.28rem;
      background: url("../../assets/images/radio_unon.png") no-repeat;
      display: block;
      background-size: cover;
    }
    &.on {
      i {
        background: url("../../assets/images/radio_on.png") no-repeat;
        background-size: cover;
      }
    }
  }
}
.tijiao {
  margin-top: 0.2rem;
  padding: 0.3rem;
}
</style>