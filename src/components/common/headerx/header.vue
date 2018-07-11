<template>
  <div class="hlbheader">
    <div class="h-wrapper">

      <!-- left -->
      <div class="h-back" @click="onClickBack"><img src="~static/images/top-return-icon.png"></div>

      <!-- title -->
      <div class="h-title" @click="$emit('on-click-title')">
        <slot>
          <span v-show="Title">{{ Title || '标题' }}</span>
        </slot>
      </div>

      <!-- right -->
      <div class="h-do">
        <slot name="right"></slot>
      </div>

    </div>
  </div>
</template>

<script>
import objectAssign from 'object-assign'
export default {
  name: 'x-header',
  props: {
    leftOptions: Object,
    Title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  computed: {
    _leftOptions () {
      return objectAssign(
        {
          showBack: true,
          preventGoBack: false
        },
        this.leftOptions || {}
      )
    }
  },
  methods: {
    onClickBack () {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.hlbheader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background: #fff;
  &::after {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    background-size: contain;
  }
  .h-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 0.4rem;
    .h-back {
      padding-left: 0.3rem;
      width: 0.58rem;
      margin-right: 0.62rem;
      text-align: left;
      img {
        width: 0.2rem;
        height: 0.34rem;
      }
    }
    .h-title {
      flex: 2;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .h-do {
      margin-right: 0.3rem;
      width: 1.2rem;
      font-size: 0.3rem;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
    }
  }
}
</style>
