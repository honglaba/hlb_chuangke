<template>
  <div class="app">
          <my-header :Title="'我的积分'"> <router-link to="points_log" slot="right">
        <img src="../../assets/images/kefu.png" class="kefu">
      </router-link>
    </my-header>
    <div class="main2">
      <div class="content">
        <div class="jfbox">
          <div class="box2 base_box">
            <router-link :to="{ path:'/member/help_detail/1' }">
              <div class="tit">
                <div class="l">退换货/返修申请</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path:'/member/help_detail/2' }">
              <div class="tit">
                <div class="l">售货服务和运费规则</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path:'/member/help_detail/3' }">
              <div class="tit">
                <div class="l">其他常见问题</div>
                <div class="r"><img src="../../assets/images/you1.png"></div>
              </div>
            </router-link>
            <router-link :to="{ path:'/member/help_detail/4' }">
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
  data() {
    return {
    };
  },
  components: {
  },
  methods: {}
};
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
        .tit {
          border-bottom: none;
        }
      }
    }
    .tit {
      border-bottom: #e6e6e6 dashed 1px;
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