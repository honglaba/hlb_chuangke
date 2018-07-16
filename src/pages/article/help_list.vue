<template>
  <div class="app">
        <my-header @left-action="routeBack" :Title="'帮助中心'">
      <router-link to="#" slot="right"><img src="../../assets/images/kefu.png" class="kefu"></router-link>
    </my-header>
    <div class="main2">
      <div class="content">
        <div class="jfbox">
          <div class="box2 base_box">
            <router-link :to="{ path:'/article/help_detail/1' }">
              <div class="tit">
                <div class="l">退换货/返修申请</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path:'/article/help_detail/2' }">
              <div class="tit">
                <div class="l">售货服务和运费规则</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path:'/article/help_detail/3' }">
              <div class="tit">
                <div class="l">其他常见问题</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path:'/article/feedback' }">
              <div class="tit">
                <div class="l">反馈问题</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    routeBack () {
      this.$router.push({path: '/member'})
    }
  }
}
</script>
<style lang="less" scoped>
.kefu {
  width: 0.36rem;
  height: 0.36rem;
}
.jfbox {
  .box2 {
    margin-top: 0.2rem;
    padding: 0 0.4rem;
    a {
      &:last-child {
        .tit::after{
          border-bottom: none;
        }
      }
    }
    .tit {
      .l {
        img {
          width: 0.34rem;
          height: 0.34rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>
