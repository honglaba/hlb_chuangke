<template>
  <div>
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'我的推荐'"></my-header>
    <div class="main2">
      <div class="content">
        <div class="txlist pd20" v-if="ChildList.length > 0">
          <ul>

            <li v-for="(item, index) in ChildList" :key="index">
              <div class="left">
                <div class="a1">
                  <span><img :src="item.headimgurl"></span>
                </div>
                <div class="a2">
                  <span>{{ item.nickname }}</span>
                  <span>{{ item.created_at }}</span>
                </div>
              </div>
              <div class="right">
                <span>{{ item.level_name }}</span>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'recommentdList',
  data () {
    return {
      ChildList: []
    }
  },
  created () {
    this.HTTP_Children()
      .then(res => {
        this.ChildList = res.data
      })
  },
  methods: {
    routeBack () {
      this.$router.push({path: '/weika/vip'})
    },
    ...mapActions(['HTTP_Children'])
  }
}
</script>
<style lang="less" scoped>
.txlist {
  background: #fff;
}
.txlist ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: #e6e6e6 dashed 1px;
  padding: 0.2rem 0;
  align-items: center;
  .left {
    position: relative;
    display: flex;
    align-items: center;
    .a1 {
      margin-right: 0.1rem;
      img {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.1rem;
        border-radius: 1rem;
      }
    }
    .a2 span {
      display: block;
      &:nth-child(1) {
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
      }
      &:nth-child(2) {
        color: #999;
      }
    }
  }
  .right {
    color: #d1b358;
  }
}
</style>
