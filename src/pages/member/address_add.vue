<template>
  <div class="app">
      <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :title="isEditor ? '修改收货地址' : '新增收货地址'">
      <img src="./images/shanchu.png" class="shanchu" slot="right" v-if="isEditor" @click="_delMsg()">
    </my-header>

    <div class="main2">
      <div class="content" v-if="winLock">
        <group>
          <x-input title='收货人姓名' type="text" required v-model="userInput.name" ref="refcode1" :is-type="validator.name" @on-change="keyDown"></x-input>
          <x-input title='手机号码' type="text" required v-model="userInput.mobile_phone" ref="refcode2" is-type="china-mobile" @on-change="keyDown"></x-input>
          <popup-picker title="所在地" :show-name="true" :data="areaList" :columns="3" v-model="areaDefault" @on-change="keyDown"></popup-picker>
          <x-input title='街道地址' type="text" required v-model="userInput.address" ref="refcode3" :is-type="validator.address" @on-change="keyDown"></x-input>
        </group>
        <div class="setting">
          <span class="on">设为默认
            <img src="../../assets/images/radio_on.png" class="switch-img" @click="_switchIsDefault" v-if="userInput.is_default === 1">
            <img src="../../assets/images/radio_unon.png" class="switch-img" @click="_switchIsDefault" v-else>
          </span>
        </div>
        <div class="tijiao">
          <button class="btn-aoc" :class="!clickAble ? 'btn-aoc-disble' : ''" @click="clickAble ? _saveEditor($event) : ''">{{isEditor ? '保存修改' : '保存'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider, PopupPicker } from 'vux'
import regionJson from '../../../static/js/region'
import { mapActions, mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
export default {
  components: {
    XInput,
    Group,
    Divider,
    PopupPicker
  },
  data () {
    return {
      winLock: false,
      isEditor: /* 是否为编辑状态 */false,
      clickAble: /* 提交按钮是否激活 */ false,
      userInput: {
        name: '',
        mobile_phone: '',
        province_id: /* -> area */'',
        city_id: /* -> area */'',
        borough_id: /* -> area */'',
        address: /* 详细地址 */ '',
        is_default: 0
      },
      areaDefault: [],
      areaList: regionJson,
      validator: {
        // 验证
        name (val) {
          let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]")
          // 收货人姓名
          let realVal = val.replace(' ', '')
          return {
            valid: !pattern.test(realVal),
            msg: '姓名格式不正确'
          }
        },
        address (val) /* 收货地址 */ {
          let realVal = val.replace(' ', '')
          return {
            valid: realVal !== '',
            msg: '地址不能为空'
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['receiverAddressGetter'])
  },
  watch: {
    '$route' (to, from) {
      Object.assign(this.$data, this.$options.data())
      this.$loadInit()
    }
  },
  created () {
    this.$loadInit()
  },
  methods: {
    ...mapActions(['HTTP_receiverAddressAdd', 'HTTP_receiverAddressEditor', 'HTTP_receiverAddress', 'HTTP_receiverAddressDel']),
    _switchIsDefault () {
      this.keyDown()
      this.userInput.is_default = this.userInput.is_default === 0 ? 1 : 0
    },
    _delMsg () {
      let _this = this
      this.$vux.confirm.show({
        title: '提示',
        content: '确定执行此操作?',
        // 组件除show外的属性
        onConfirm () {
          _this.HTTP_receiverAddressDel(_this.userInput.id)
            .then(res => {
              _this.HTTP_receiverAddress()
                .then(res => {
                  _this.$vux.toast.show('删除成功')
                  _this.$router.push({path: '/member/address'})
                })
            })
        }
      })
    },
    _saveEditor (e) {
      let stack = this.userInput
      let area = this.areaDefault
      stack.province_id = +area[0]
      stack.city_id = +area[1]
      stack.borough_id = +area[2]

      if (this.isEditor) {
        this.HTTP_receiverAddressEditor(this.userInput)
          .then(res => {
            this.HTTP_receiverAddress()
              .then(res => {
                this.$vux.toast.show('修改成功')
                this.$router.push({path: '/member/address'})
              })
          })
      } else {
        this.HTTP_receiverAddressAdd(this.userInput)
          .then(res => {
            this.HTTP_receiverAddress().then(res => {
              this.$vux.toast.show('添加成功')
              this.$router.push({path: '/member/address'})
            })
          })
      }
    },
    keyDown () {
      let refc = this.$refs
      if (
        refc.refcode1.valid &&
        refc.refcode2.valid &&
        refc.refcode3.valid &&
        this.areaDefault.length > 0
      ) {
        this.clickAble = true
      }
    },
    $loadInit () {
      let item = localStorage.getItem('beingEditorAddress')
      this.winLock = true
      if (item) {
        let x = JSON.parse(item)
        this.isEditor = true
        this.userInput = x
        this.areaDefault = ['' + x.province_id, '' + x.city_id, '' + x.borough_id]
        localStorage.removeItem('beingEditorAddress')
      }
    },
    routeBack () {
      this.$router.push({path: '/member/address'})
    }
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
  .on {
    line-height: 0.9rem;
    display: block;
    font-size: 0.28rem;
    align-items: center;
    position: relative;
    .switch-img {
      position: absolute;
      width: 0.28rem;
      height: 0.28rem;
      padding: 0.1rem;
      display: block;
      right: 0;
      top: .2rem;
    }
  }
}
.tijiao {
  margin-top: 0.2rem;
  padding: 0.3rem;
}
</style>
