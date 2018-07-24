<template>
  <!-- <div class="tit">
    <div class="l">退换货/返修申请</div>
    <div class="r"><img src="../../assets/images/you1.png"></div>
  </div>

  <div class="tit">
    <div class="l">售货服务和运费规则</div>
    <div class="r"><img src="../../assets/images/you1.png"></div>
  </div>

  <div class="tit">
    <div class="l">其他常见问题</div>
    <div class="r"><img src="../../assets/images/you1.png"></div>
  </div>

  <router-link :to="{ path:'/article/feedback' }">
    <div class="tit">
      <div class="l">反馈问题</div>
      <div class="r"><img src="../../assets/images/you1.png"></div>
    </div>
  </router-link> -->
  <div class="app">

    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="Title">
      <router-link to="javascript:;" slot="right">
        <img src="../../assets/images/kefu.png" class="kefu">
      </router-link>
    </my-header>

    <div class="main2">

      <!-- nav -->
      <div class="content base_box" v-if="!isDetail">
        <div class="tit" v-for="(item, key) in GenerCup" :key="key" @click="_toDetail(key)">
          <div class="l">{{ item.title }}</div>
          <div class="r">
            <img src="../../assets/images/you1.png">
          </div>
        </div>
      </div>

      <!-- - -->
      <div class="article-detail" v-else>
        <detail :Cup="Cup"></detail>
      </div>

    </div>
  </div>
</template>
<script>
import detail from "./detail";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      Title: "帮助中心",
      Cup: {},
      GenerCup: [],
      isDetail: false
    };
  },
  created() {
    this.getArticle({ cid: 6, page: 1 }).then(res => {
      this.GenerCup = res.data.data;
    });
  },
  methods: {
    async _toDetail(face) {
      this.Title = '文章详情'

      if (face === 3) {
        this.$router.push({ path: "/article/feedback" });
        return;
      }

      await this.getDetail({ id: this.GenerCup[face].id }).then(res => {
        this.Cup = res.data;
      });

      this.isDetail = !this.isDetail;
    },
    routeBack() {
      if (this.isDetail) {
        this.Title = "帮助中心";
        this.isDetail = !this.isDetail;
        return;
      }

      this.$router.push({ path: "/member" });
    },
    ...mapActions({ getArticle: "Art_Category", getDetail: "Art_normalDetail" })
  },
  components: {
    detail
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 0 0.2rem;
}
.kefu {
  width: 0.36rem;
  height: 0.36rem;
}
.article-detail {
  height: 100%;
  padding: 0.3rem;
  line-height: 0.52rem;
}
</style>
