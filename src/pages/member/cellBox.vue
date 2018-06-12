<template>
  <div>
    <x-header :title="title" :left-options="{backText: ''}"></x-header>
    <group gutter="0">
      <cell :title="item.left" is-link v-for="(item, index) in defaultData" :key="index" :border-intent="false" class="afsdfasfads">
        <span>{{ item.right }}</span>
      </cell>
      <cell :title="item.left" is-link v-for="(item, index) in defaultData" :key="index" :border-intent="false" class="afsdfasfads">
        <span>{{ item.right }}</span>
      </cell>
      <cell :title="item.left" is-link v-for="(item, index) in defaultData" :key="index" :border-intent="false" class="afsdfasfads">
        <span>{{ item.right }}</span>
      </cell>
      <cell :title="item.left" is-link v-for="(item, index) in defaultData" :key="index" :border-intent="false" class="afsdfasfads">
        <span>{{ item.right }}</span>
      </cell>
      <cell :title="item.left" is-link v-for="(item, index) in defaultData" :key="index" :border-intent="false" class="afsdfasfads">
        <span>{{ item.right }}</span>
      </cell>
      <cell :title="item.left" is-link v-for="(item, index) in defaultData" :key="index" :border-intent="false" class="afsdfasfads">
        <span>{{ item.right }}</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellBox, XHeader } from 'vux'
export default {
  data () {
    return {
      title: '默认标题',
      link1: 'https://www.baidu.com',
      defaultData: [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }]
    }
  },
  created () {
    let type = this.$route.params.id
    if (type === 'shezhi') {
      this.title = '设置'
      this.defaultData = [
        {left: '个人信息', right: ''},
        {left: '实名认证', right: ''},
        {left: '管理收货地址', right: ''},
        {left: '社交账号绑定', right: ''},
        {left: '换绑手机', right: ''},
        {left: '支付设置', right: ''},
        {left: '关于创客', right: ''}
      ]
    }
  },
  components: {
    Group,
    Cell,
    CellBox,
    XHeader
  }
}
</script>

<style scoped>
</style>
