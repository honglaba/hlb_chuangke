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
      <div class="content" v-if="!isDetail">

          <ul class="opt-box" v-if="GenerCup.length > 0">
            <li class="opt-child" v-for="(item, key) in GenerCup" :key="key" @click="_toDetail(key)">
              <span class="opt-child-text">{{ item.title }}</span>
              <span class="opt-child-img"><img src="../../assets/images/you1.png"></span>
            </li>
          </ul>

      </div>

      <!-- - -->
      <div class="article-detail" v-else>
        <detail :Cup="Cup"></detail>
      </div>

    </div>
  </div>
</template>
<script>
import detail from './detail'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      Title: '帮助中心',
      Cup: {},
      GenerCup: [],
      isDetail: false
    }
  },
  created () {
    this.getArticle({cid: 6, page: 1})
      .then(res => {
        this.GenerCup = res.data.data
      })
  },
  methods: {
    async _toDetail (face) {
      this.Title = this.GenerCup[face].title

      if (face === 3) {
        this.$router.push({path: '/article/feedback'})
        return
      }

      await this.getDetail({id: this.GenerCup[face].id})
        .then(res => {
          this.Cup = res.data
        })

      this.isDetail = !this.isDetail
    },
    routeBack () {
      if (this.isDetail) {
        this.Title = '帮助中心'
        this.isDetail = !this.isDetail
        return
      }

      this.$router.push({path: '/member'})
    },
    ...mapActions({getArticle: 'Art_Category', getDetail: 'Art_normalDetail'})
  },
  components: {
    detail
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  .opt-box {
    width: 100%;
    background-color: #FFF;
    .opt-child {
      height: .9rem;
      font-size: .3rem;
      border-bottom: 1px solid #F0F0F0;
      padding: 0 .3rem;
      span {
        display: block;
        height: 100%;
      }
      .opt-child-text {
        float: left;
        line-height: .9rem;
      }
      .opt-child-img {
        float: right;
        line-height: .9rem;
      }
    }
  }
}

.article-detail {
  width: 100%;
  height: 100%;
}
</style>
