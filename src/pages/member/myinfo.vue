<template>
  <div class="app">
    <my-header :left-options="{preventGoBack: true}" :Title="'个人信息'" @on-click-back="routeBack" @on-click-right="_save">
      <span slot="right">保存</span>
    </my-header>

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
              <datetime title="生日" placeholder="请选择" :min-year="1900" :max-year="new Date().getFullYear()" :end-date="birthDay" v-model="birthDay"></datetime>
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
import { mapActions, mapMutations } from 'vuex'
import { formatDateTime } from 'tools/util'
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
        ['北京', '广东', '山东', '江苏', '河南', '上海', '河北', '浙江', '香港特别行政区', '陕西', '湖南', '重庆', '福建', '天津', '云南', '四川', '广西壮族自治区', '安徽', '海南', '江西', '湖北', '山西', '辽宁', '台湾', '黑龙江', '内蒙古自治区', '澳门特别行政区', '贵州', '甘肃', '青海', '新疆维吾尔自治区', '西藏', '吉林', '宁夏回族自治区']
      ],
      sex: ['男'],
      sexList: [['男', '女', '保密']],
      birthDay: ''
    }
  },
  created () {
    if (this.DataTree.sex === 0) {
      this.sex = ['保密']
    } else if (this.DataTree.sex === 1) {
      this.sex = ['男']
    } else {
      this.sex = ['女']
    }
    this.birthDay = this.DataTree.birthday ? this.DataTree.birthday : formatDateTime(new Date())
    this.jiguan = this.DataTree.address ? [this.DataTree.address] : ['北京']
  },
  methods: {
    _save () {
      let birthday = this.birthDay
      let sex = this.sex
      let address = this.jiguan[0]

      switch (sex[0]) {
        case '男':
          sex = 1
          break
        case '女':
          sex = 2
          break
        case '保密':
          sex = 0
          break
      }

      this.updataLoading({status: true})
      this.configUser({birthday, sex, address})
        .then(res => {
          this.updataLoading({status: false})
          this.$vux.toast.show({text: '信息修改成功', type: 'text', time: 1000})
        })
        .then(res1 => {
          this.getUser()
            .then(res => {
              this.$router.push({path: '/member/settings'})
            })
        })
    },
    routeBack () {
      this.$router.push({path: '/member/settings'})
    },
    ...mapActions({configUser: 'User_InfoConfig', getUser: 'HTTP_UserInfo'}),
    ...mapMutations({updataLoading: 'UPDATE_LOADING'})
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
