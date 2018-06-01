<template>
    <tabbar>
      <tabbar-item link="/home/index" selected> 
        <img slot="icon" src="../assets/images/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/shop/index">
        <img slot="icon" src="../assets/images/fujin.png">
        <span slot="label">附近</span>
      </tabbar-item>
      <tabbar-item link="/weika/index">
        <img slot="icon" src="../assets/images/weika.png">
        <span slot="label">创客微卡</span>
      </tabbar-item>
      <tabbar-item link="/member/index">
        <img slot="icon" src="../assets/images/wode.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>