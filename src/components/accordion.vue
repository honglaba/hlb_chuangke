<template>
  <div>
    <div class="accWrapper" :class="isDisplay ? 'up' : 'down'" v-for="(item, index) in list" :key="index">
      <div class="accTitle" @click="toggleList">
        <div class="left">{{ item.date }}</div>
        <div class="right">
          <span></span>
          <span class="ico"></span>
        </div>
      </div>
      <ul class="accList">
        <li v-if="item.consumption">消费佣金
          <span>{{item.consumption}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isDisplay: false
    }
  },
  props: {
    title: {
      type: Object,
      default () {
        return {}
      }
    },
    list: {
      type: Array,
      required: true
    }
  },
  created () {
    console.log(this.list)
  },
  methods: {
    toggleList (e) {
      this.isDisplay = !this.isDisplay
    }
  }
}
</script>
<style lang="less" scoped >
.accWrapper {
  .accTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    line-height: 0.8rem;
    font-size: 0.3rem;
    padding: 0 0.2rem;
    border-bottom: #e6e6e6 solid 1px;
    .right {
      display: flex;
      align-items: center;
      .ico {
        margin-left: 0.1rem;
        width: 0.21rem;
        height: 0.23rem;
      }
    }
  }
  .accList {
    padding: 0.1rem 0.2rem;
    background: #f0f0f0;
    li {
      line-height: 0.5rem;
      display: flex;
      justify-content: space-between;
      color: #999999;
    }
  }
  &.down {
    .ico {
      background: url("../assets/images/up.png") center no-repeat;
      background-size: contain;
    }
    ul {
      display: block;
    }
  }
  &.up {
    .ico {
      background: url("../assets/images/down.png") center no-repeat;
      background-size: contain;
    }
    ul {
      display: none;
    }
  }
}
</style>
