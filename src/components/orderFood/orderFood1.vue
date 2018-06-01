<template>
    <div>
        <!-- <div class="hotel-img-box swiper-container">
            <p class="hotel-name">背景橙子时尚快捷公寓首都机场店</p>
            <p class="hotel-img-num"><span class="activeIndex"></span>/15</p>
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/images/114.png" /></div>
                <div class="swiper-slide"><img src="../../../static/images/114.png" /></div>
                <div class="swiper-slide"><img src="../../../static/images/114.png" /></div>
                </div>
            <div class="hotel-img-mask">
                <ul>
                    <li class="cur"><span class="iconfont icon-gonggao yu-c40 yu-rmar10"></span>新世纪酒店</li>
                    <li><span class="iconfont icon-gonggao yu-c40 yu-rmar10"></span>海螺大酒店</li>
                    <li><span class="iconfont icon-gonggao yu-c40 yu-rmar10"></span>东方大酒店</li>
                </ul>
            </div>
        </div> -->

        <ul class="tab-nav type1">
            <li data-id="1" @click="tab" :class="{cur:tabNum==1}">订餐</li>
            <li data-id="2" @click="tab" :class="{cur:tabNum==2}">图片</li>
        </ul>
        <ul class="tab-inner">
            <li :class="{cur:tabNum==1}">这里是订餐页面</li>
            <li :class="{cur:tabNum==2}">这里是图片页面</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabNum: 1
    };
  },
  methods: {
    tab: function(e) {
      let app = this;
      //不算好方法
      this.tabNum = e.target.getAttribute("data-id");
      if (this.tabNum == 2) {
        app.axios
          .get("https://cnodejs.org/api/v1/topic_collect/alsotang")
          .then(function(res) {
            console.log(res);
          });
      }
    }
  },
  mounted() {
    let app = this;
    app
      .axios({
        url: "https://cnodejs.org/api/v1/topics",
        method: "get"
      })
      .then(function(res) {
        console.log(res);
      });
  }
};
</script>
<style lang="less" scoped>
.tab-nav {
  height: 0.84rem;
  text-align: center;
  line-height: 0.84rem;
  display: flex;
  font-size: 0.3rem;
  > li {
    flex: 1;
  }
  > .cur {
    color: #12b7f5;
  }
}
.tab-inner {
  > li {
    display: none;
  }
  > .cur {
    display: block;
  }
}
</style>



