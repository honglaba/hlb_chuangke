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
      <div class="h-do" @click="onClickRight">
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
    },
    onClickRight () {
      this.$emit('on-click-right')
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
    position: relative;
    text-align: center;
    font-size: 0.4rem;
    .h-back {
      position: absolute;
      text-align: left;
      top: 0;
      padding: 0 0.3rem;
      img {
        width: 0.2rem;
        height: 0.34rem;
      }
    }
    .h-title {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .h-do {
      position: absolute;
      right: 0.3rem;
      top: 0;
      font-size: 0.3rem;
      color: #666;
      a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
