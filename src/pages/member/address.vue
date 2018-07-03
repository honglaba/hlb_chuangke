<template>
  <div class="app">
    <x-header title="收货地址管理" :left-options="{backText: '', preventGoBack: true}"  @on-click-back="routeBack">
      <router-link :to="{path: '/member/address_add', query: {t: +new Date()}}" slot="right">添加地址</router-link>
    </x-header>
    <div class="main2">

      <div class="content" v-if="contentFlag">
        <div class="yjbd" v-if="!equal">
          <p><img src="./images/noaddress.png"></p>
          <p class="tips">您还没有添加收货地址~
          </p>
        </div>

        <div class="addresslist" v-else>
          <ul>
            <li v-for="item in receiverAddress" :key="item.id">
              <div class="info">
                <div class="left">
                  <div class="a1">
                    <span class="name">{{ item.name }}</span>
                    <span class="phone">{{ item.mobile_phone }}</span>
                  </div>
                  <div class="a2">
                    {{ item.true_name + ' ' + item.address }}
                  </div>
                </div>
                <div class="right">
                  <span class="edit" @click="_toEditor(item)">编辑</span>
                </div>
              </div>
              <div class="setting" @click="_toggleIsDefault(item)">
                <span class="on">{{item.is_default === 1 ? '默认地址' : '设为默认'}}
                  <i :class="item.is_default === 1 ? 'is-default' : 'un-default'"></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div v-if="contentFlag">fsdafsdafsdadsfsafsadfsa</div>
      <button @click="contentFlag = !contentFlag">aaaaaaaaaaaaaa</button> -->
    </div>
  </div>
</template>
<script>
import { Divider } from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      equal: false,
      contentFlag: false
    }
  },
  watch: {
    '$route' (to, from) {
      Object.assign(this.$data, this.$options.data())
      this.contentFlag = true
      console.log(this.contentFlag)
      if (this.receiverAddress.length > 0) {
        this.equal = true
      }
    }
  },
  computed: {
    ...mapState(['receiverAddress'])
  },
  methods: {
    ...mapActions(['HTTP_receiverAddress', 'HTTP_receiverAddressEditor', 'HTTP_receiverAddress']),
    _toggleIsDefault (item) {
      if (item.is_default === 0) {
        this.receiverAddressGetter.forEach(cb => {
          if (cb.is_default === 1) {
            cb.is_default = 0
          } else if (cb.id === item.id) {
            cb.is_default = 1
            this.HTTP_receiverAddressEditor(cb)
          }
        })
      }
    },
    _toEditor (item) {
      localStorage.setItem('ReadyEditorAddressItem', JSON.stringify(item))
      this.$router.push({path: '/member/address_add', query: {t: +new Date()}})
    },
    routeBack () {
      this.$router.push({path: '/member/settings'})
    }
  },
  created () {
    let flag = this.receiverAddress

    if (flag) {
      if (flag.length > 0) {
        this.equal = !this.equal
      }
      this.contentFlag = true
    } else {
      this.HTTP_receiverAddress().then(res => {
        if (res) this.equal = !this.equal
        this.contentFlag = true
      })
    }
  },
  components: {
    Divider
  }
}
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
    width: 1.2rem;
    height: 1.33rem;
  }
}
.addresslist {
  ul {
    li {
      background: #fff;
      padding: 0.3rem 0 0.3rem 0.3rem;
      border-bottom: #e6e6e6 solid 1px;
      &:last-child {
        border-bottom: none;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          flex: 1;
          .a1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .name {
              font-size: 0.3rem;
            }
            .phone {
              font-size: 0.24rem;
            }
          }
          .a2 {
            color: #999;
            margin-top: 0.16rem;
            font-size: 0.2rem;
          }
        }
        .right {
          position: relative;
          margin-left: 0.3rem;
          padding: 0 0.3rem;
          line-height: 0.6rem;
          .edit {
            color: #999;
            font-size: 0.24rem;
          }
          &::before {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 10%;
            content: "";
            width: 1px;
            background: #e6e6e6;
            height: 80%;
          }
        }
      }
      .setting {
        padding-top: 0.2rem;
        font-size: 0.2rem;
        span {
          display: flex;
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
            .is-default {
              background: url("../../assets/images/radio_on.png") no-repeat;
              background-size: cover;
            }
            .un-default{
              background: url("../../assets/images/radio_unon.png") no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
</style>
