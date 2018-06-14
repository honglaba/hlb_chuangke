<template>
  <div>
    <div class="ck-head"></div>
    <div class="ck-content">
      <ul>
        <li>
          <span class="item-left">管理收货地址</span>
          <span></span>
        </li>
        <li>
          <span class="item-left">管理收货地址</span>
        </li>
        <li>
          <span class="item-left">管理收货地址</span>
        </li>
        <li>
          <span class="item-left">管理收货地址</span>
        </li>
        <li>
          <span class="item-left">管理收货地址</span>
        </li>
        <li>
          <span class="item-left">管理收货地址</span>
        </li>
      </ul>
    </div>
    <div class="option-footer" @click="logout()">
      <span>退出登录</span>
    </div>
  </div>
</template>

<script>
import { Group, Cell, CellBox, Card } from 'vux'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['HTTP_logout', 'HTTP_UserInfo', 'HTTP_UpReferrer']),
    logout () {
      // this.HTTP_UserInfo()
      this.HTTP_logout()
    }
  },
  components: {
    Group,
    Cell,
    CellBox,
    Card
  }
}
</script>

<style scoped lang="less">
.ck-head {
  width: 100%;
  height: 1rem;
  background-color: #fff;
}

.ck-content {
  background-color: #fff;
  li {
    width: 100%;
    height: 1rem;
    border-top: 1px solid #f0f0f0;
    line-height: 1rem;
    .item-left {
      font-size: 0.3rem;
      color: #333333;
      margin-left: 0.26rem;
    }
  }
}
.option-footer {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  margin-top: 0.2rem;
  text-align: center;
  line-height: 1rem;
  span {
    font-size: 0.3rem;
    color: #f5232e;
  }
}
</style>
