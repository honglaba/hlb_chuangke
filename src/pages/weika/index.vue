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
          <div class="fuwu_tab vux-1px-b">
            <div class="left">创客微卡特权服务</div>
            <div class="right"><a href="#">如何获得创客微卡</a></div>
          </div>
          <div class="fuwu_con">
            <ul>
              <li>
                <a href="#">
                  <span><img src="./images/a1.png"></span>
                  <span>优惠购物</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a2.png"></span>
                  <span>线下消费</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a3.png"></span>
                  <span>分享赚钱</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a4.png"></span>
                  <span>1元疯抢</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a5.png"></span>
                  <span>免费体验</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a6.png"></span>
                  <span>我要领券</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a7.png"></span>
                  <span>专享活动</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><img src="./images/a8.png"></span>
                  <span>邀请有礼</span>
                </a>
              </li>
            </ul>
          </div>
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
    img: "./images/temp/banner01.jpg",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img: "./images/temp/banner01.jpg",
    title: "送你一辆车"
  },
  {
    url: "javascript:",
    img: "./images/temp/banner01.jpg", // 404
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
    margin-bottom: .2rem;
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
  .fuwu_tab {
    padding:.1rem .2rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #e7e7e7 dashed 1px;
    .left {
      position: relative;
      font-size: 0.32rem;
      &::before {
        display: inline-block;
        position: absolute;
        left: -0.2rem;
        top: 25%;
        content: "";
        width: 0.06rem;
        background: #d1b358;
        height: 50%;
      }
    }
    .right a {
      color: #999;
    }
  }
  .fuwu_con {
    padding: 0.2rem;
    text-align: center;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 0.4rem 0;
        a {
          display: block;
          color: #333;
          span {
            display: block;
            img {
              width: 0.48rem;
              height: 0.48rem;
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>

