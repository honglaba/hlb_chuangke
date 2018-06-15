<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="收货地址管理">
      <router-link to="address_add" slot="right">添加地址</router-link>
    </x-header>
    <div class="main2">
      <div class="content">
        <divider>未添加显示样式</divider>
        <div class="yjbd">
          <p><img src="./images/noaddress.png"></p>
          <p class="tips">您还没有添加收货地址~
          </p>
        </div>

        <divider>已经添加显示样式</divider>
        <div class="addresslist">
          <ul>
            <li>
              <div class="info">
                <div class="left">
                  <div class="a1">
                    <span class="name">创客小妮</span>
                    <span class="phone">18503088185</span>
                  </div>
                  <div class="a2">
                    东莞市南城区鸿禧中心a606
                  </div>
                </div>
                <div class="right">
                  <span class="edit">编辑</span>
                </div>
              </div>
              <div class="setting">
                <span class="on">设为默认
                  <i></i>
                </span>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="left">
                  <div class="a1">
                    <span class="name">创客小妮</span>
                    <span class="phone">18503088185</span>
                  </div>
                  <div class="a2">
                    东莞市南城区鸿禧中心a606
                  </div>
                </div>
                <div class="right">
                  <span class="edit">编辑</span>
                </div>
              </div>
              <div class="setting">
                <span class="">设为默认
                  <i></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Divider } from "vux";
export default {
  data() {
    return {};
  },
  components: {
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
            i {
              background: url("../../assets/images/radio_on.png") no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
</style>