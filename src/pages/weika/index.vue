<template>
  <div class="app">
    <Header></Header>
    <div class="main">
      <div class="content">
        <div class="banner pd20">
          <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
          <div class="kaitong">
            <span>立即开通</span>
          </div>
        </div>
        <div class="fuwu">
          sadasdasd
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { Swiper } from "vux";
const baseList = [
  {
    url: "javascript:",
    img: "./images/weika/temp/banner01.jpg",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img: "./images/weika/temp/banner01.jpg",
    title: "送你一辆车"
  },
  {
    url: "javascript:",
    img: "./images/weika/temp/banner01.jpg", // 404
    title: "送你一次旅行"
  }
];
export default {
  data() {
    return {
      demo01_list: baseList
    };
  },
  components: {
    Swiper
  },
  methods: {
    onSwiperItemIndexChange(index) {
      console.log("demo item change", index);
    },
    demo01_onIndexChange(index) {
      this.demo01_index = index;
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  background: #f0f0f0;
}
.banner {
  background: #fff;
  .kaitong {
    margin-top: 0.2rem;
    span {
      display: block;
      background: #d1b358;
      height: 0.9rem;
      color: #fff;
      font-size: 0.32rem;
      border-radius: 1rem;
      text-align: center;
      line-height: 0.9rem;
      box-shadow: 0 4px 10px rgba(209, 179, 88, 0.5);
    }
  }
}
.fuwu {
  background: #fff;
  margin-top: 0.2rem;
  text-align: center;
}
</style>

