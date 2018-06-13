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
    <!-- <group gutter="0">
      <cell title="个人信息" is-link :border-intent="false"></cell>
      <cell title="实名认证" is-link :border-intent="false"></cell>
      <cell title="管理收货地址" is-link :border-intent="false"></cell>
      <cell title="社交账号绑定" is-link :border-intent="false"></cell>
      <cell title="换绑手机" is-link :border-intent="false"></cell>
      <cell title="支付设置" is-link :border-intent="false"></cell>
      <cell title="关于创客" is-link :border-intent="false"></cell>
    </group> -->
    <div class="option-footer">
      <span>退出登录</span>
    </div>
  </div>
</template>

<script>
import { Group, Cell, CellBox, Card } from 'vux'
export default {
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
