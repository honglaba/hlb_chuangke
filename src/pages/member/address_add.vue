<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="新增收货地址">
      <img src="./images/shanchu.png" class="shanchu" slot="right">
    </x-header>
    <div class="main2">
      <div class="content">
        <group>
          <x-input title='收货人姓名' type="text" required v-model="userInput.name" ref="refcode1" :is-type="validator.name" @on-change="keyDown"></x-input>
          <x-input title='手机号码' type="text" required v-model="userInput.phone" ref="refcode2" :is-type="validator.phone" @on-change="keyDown"></x-input>
          <popup-picker title="所在地" :data="areaList" :columns="3" v-model="userInput.areaDefault" @on-change="keyDown"></popup-picker>
          <x-input title='街道地址' type="text" required v-model="userInput.address" ref="refcode3" :is-type="validator.address" @on-change="keyDown"></x-input>
        </group>
        <div class="setting">
          <span class="on">设为默认
            <img src="../../assets/images/radio_on.png" class="switch-img" v-if="userInput.switchDefault">
            <img src="../../assets/images/radio_unon.png" class="switch-img" v-else>
          </span>
        </div>
        <div class="tijiao">
          <button class="btn-aoc" @click="_saveEditor()">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider, PopupPicker } from 'vux'
export default {
  data () {
    return {
      userInput: {
        name: '',
        phone: '',
        areaDefault: [],
        address: '',
        switchDefault: true
      },
      disabled: true,
      areaList: [
        {
          name: '中国',
          value: 'china',
          parent: 0
        },
        {
          name: '美国',
          value: 'USA',
          parent: 0
        },
        {
          name: '广东',
          value: 'china001',
          parent: 'china'
        },
        {
          name: '广西',
          value: 'china002',
          parent: 'china'
        },
        {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        },
        {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        },
        {
          name: '广州',
          value: 'gz',
          parent: 'china001'
        },
        {
          name: '深圳',
          value: 'sz',
          parent: 'china001'
        },
        {
          name: '广西001',
          value: 'gx001',
          parent: 'china002'
        },
        {
          name: '广西002',
          value: 'gx002',
          parent: 'china002'
        },
        {
          name: '美国001_001',
          value: '0003',
          parent: 'usa001'
        },
        {
          name: '美国001_002',
          value: '0004',
          parent: 'usa001'
        },
        {
          name: '美国002_001',
          value: '0005',
          parent: 'usa002'
        },
        {
          name: '美国002_002',
          value: '0006',
          parent: 'usa002'
        }
      ],
      validator: /* 收货地址 */{
        name (val) {
          return {
            valid: val === 'name',
            msg: '姓名格式不正确'
          }
        },
        phone (val) {
          return {
            valid: val.length === 11,
            msg: '!!'
          }
        },
        areaDefault (val) {
          return {
            valid: val !== '',
            msg: '!!'
          }
        },
        address (val) {
          return {
            valid: val !== '',
            msg: '!!'
          }
        }
      }
    }
  },
  methods: {
    keyDown () {
      let refc = this.$refs
      if (refc.refcode1.valid && refc.refcode2.valid && refc.refcode3.valid && this.userInput.areaDefault.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    _saveEditor () {
      console.log(this.userInput)
    }
  },
  components: {
    XInput,
    Group,
    Divider,
    PopupPicker
  }
}
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
      position: relative;
      img {
        position: absolute;
        width: .28rem;
        height: .28rem;
        padding: .1rem;
        display: block;
        right: 0;
      }
    }
  }
}
.tijiao {
  margin-top: 0.2rem;
  padding: 0.3rem;
}
</style>
