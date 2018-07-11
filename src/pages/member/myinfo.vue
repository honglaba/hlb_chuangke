<template>
  <div class="app">
    <my-header  @on-click-back="routeBack"  :left-options="{preventGoBack: true}" :Title="'个人信息'"></my-header>
    <div class="main2">
      <div class="content">
        <div class="myinfo">
          <div class="box1">
            <div class="tx"><img :src="DataTree.headimgurl"></div>
            <div class="id">ID:{{ DataTree.id }}</div>
          </div>
          <div class="box2">
            <group>
              <cell title="昵称" :value="DataTree.nickname"></cell>
              <popup-picker title="性别" :data="sexList" v-model="sex" placeholder="请选择"></popup-picker>
              <datetime title="生日" v-model="DataTree.birthday" placeholder="请选择"></datetime>
              <popup-picker title="籍贯" :data="jiguanList" v-model="jiguan" placeholder="请选择"></popup-picker>
              <cell title="注册日期" value="2018-5-16"></cell>
            </group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  XInput,
  Selector,
  Group,
  PopupPicker,
  Datetime,
  Picker,
  Cell
} from 'vux'
export default {
  props: {
    DataTree: {
      type: Object
    }
  },
  data () {
    return {
      jiguan: ['广东'],
      jiguanList: [
        ['广东', '广西', '华为', '情怀', '三星', '其他', '不告诉你']
      ],
      sex: ['男'],
      sexList: [['男', '女', '保密']]
    }
  },
  methods: {
    routeBack () {
      this.$router.push({path: '/member/settings'})
    }
  },
  components: {
    XInput,
    Group,
    Selector,
    PopupPicker,
    Datetime,
    Picker,
    Cell
  }
}
</script>
<style lang="less" scoped>
.myinfo {
  .box1 {
    padding: 0.4rem 0.2rem;
    background: #fff;
    display: flex;
    align-items: center;
    .tx {
      width: 0.9rem;
      height: 0.9rem;
      margin-right: 0.2rem;
      img {
        border-radius: 1rem;
      }
    }
    .id {
      font-size: 0.3rem;
      font-weight: bold;
    }
  }
}
</style>
