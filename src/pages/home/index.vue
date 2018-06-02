<template>
  <div id="app">
    <Headerx></Headerx>

   
    <section class="bgf bmar20 vux-1px-b bpad26 tpad27">

    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./images/home-banner-img1.png" /></div>
          <div class="swiper-slide"><img src="./images/home-banner-img2.png" /></div>
          <div class="swiper-slide"><img src="./images/home-banner-img3.png" /></div>
      </div>
    </div>

  <div class="swiper-container nav-swiper">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>美食</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>酒店</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>休闲娱乐</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>美容丽人</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>生活服务</p>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>美食</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>酒店</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>休闲娱乐</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>美容丽人</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>生活服务</p>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>美食</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>酒店</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>休闲娱乐</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>美容丽人</p>
            </a>
            <a href="#">
              <div class="nav-ico type1"></div>
              <p>生活服务</p>
            </a>
          </div>
      </div>
       <div class="swiper-pagination"></div>
  </div>

  <div class="y-flex ad">
    <a href="#">
      <!-- <img src="./images/home-news-text.png" /> -->
    </a>
    <a href="#"  class="vux-1px-l">小米儿溜溜，注册成为创客会员</a>
  </div>
</section>

<section class="vux-1px-tb bmar20 bgf tpad36">
  <div class="lrpad32 til-row bmar56">
    <h3 class="fl">精选推荐</h3>
    <a class="fr" href="#">更多></a>
  </div>
  <div class="y-flex ad-type-one">
    <router-link tag="a" to="#">
      <img src="./images/home-recommend-img1.png" />
      <div class="lpad26">
        <div class="txt1">
          <p>蓝牙耳机</p>
          <p>送创客微卡</p>
        </div>
        <div class="txt2">
          <p>
            <span>￥</span>
            <span>980</span>
          </p>
          <p>特价</p>
        </div>
      </div>
    </router-link>
    <router-link tag="a" to="#">
      <img src="./images/home-recommend-img2.png" />
      <div class="lpad26">
        <div class="txt1">
          <p>Midea洗衣机</p>
          <p>送创客微卡</p>
        </div>
        <div class="txt2">
          <p>
            <span>￥</span>
            <span>980</span>
          </p>
          <p>特价</p>
        </div>
      </div>
    </router-link>
    <router-link tag="a" to="#">
      <img src="./images/home-recommend-img3.png" />
      <div class="lpad26">
        <div class="txt1">
          <p>九阳电饭煲</p>
          <p>送创客微卡</p>
        </div>
        <div class="txt2">
          <p>
            <span>￥</span>
            <span>980</span>
          </p>
          <p>特价</p>
        </div>
      </div>
    </router-link>
  </div>
  <div class="lrpad30 bmar26">
    <div class="vux-1px-t"></div>
  </div>
  <div class="y-flex ad-type-two">
    <router-link tag="a" to="#">
      <img src="./images/home-recommend-img4.png" />
      <div class="lpad26">
        <div class="txt1">
          <p>车厘子</p>
          <p>送创客微卡</p>
        </div>
        <div class="txt2">
          <p>
            <span>￥</span>
            <span>580</span>
          </p>
          <p>特价</p>
        </div>
      </div>
    </router-link>
    <router-link tag="a" to="#">
      <img src="./images/home-recommend-img5.png" />
      <div class="lpad26">
        <div class="txt1">
          <p>桂花糕</p>
          <p>送创客微卡</p>
        </div>
        <div class="txt2">
          <p>
            <span>￥</span>
            <span>580</span>
          </p>
          <p>特价</p>
        </div>
      </div>
    </router-link>
    <router-link tag="a" to="#">
      <img src="./images/home-recommend-img6.png" />
      <div class="lpad26">
        <div class="txt1">
          <p>坚果大礼包</p>
          <p>送创客微卡</p>
        </div>
        <div class="txt2">
          <p>
            <span>￥</span>
            <span>580</span>
          </p>
          <p>特价</p>
        </div>
      </div>
    </router-link>
  </div>
  

</section>
    <Footerx></Footerx>
  </div>
</template>

<script>
// import headerx from "../../components/common/headerx/headerx.vue";
// import footerx from "../../components/common/footerx/footerx.vue";
import { Swiper } from "vux";



export default {
  name: "App",
  data() {
    return {
    };
  },
  // components: { headerx, footerx }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
#app{
  padding-bottom: 1rem;
}
.swiper-container {
  overflow-y: inherit;
}
.banner-swiper {
  .swiper-slide {
    width: 85%;
  }
  img {
    width: 100%;
  }
}
.nav-swiper {
  .swiper-slide {
    display: flex;
    > a {
      flex: 1;
      color: #666;
      font-size: 0.24rem;
      text-align: center;
      .nav-ico {
        width: 0.84rem;
        height: 0.84rem;
        background: url(./images/home-tab-icon1.png) no-repeat;
        background-size: 100%;
        margin: 0 auto;
        margin-bottom: 0.2rem;
      }
    }
  }
  .swiper-wrapper {
    height: 2rem;
  }
  .swiper-pagination {
    bottom: 0;
  }
}
.ad {
  padding-left: 0.34rem;
  height: 0.35rem; 
  > a:nth-child(1) {
    width: 1.26rem;
    display: block;
    margin-right: 0.24rem;
    background: url(./images/home-news-text.png) no-repeat center;
    background-size:100%; 
  }
  > a:nth-child(2) {
    font-size: 0.26rem;
    color: #222;
    padding-left:.24rem;
  }
}
.til-row{
  overflow: hidden;
  line-height: .4rem;
  h3{
    font-size: .4rem;
    color:#333;
  }
  a{
    font-size: .28rem;
    color:#666;
  }
}
 .ad-type-one{
   a{
     flex: 1
   }
   img{
     width: 1.78rem;
     display: block;
     margin: 0 auto;
   }
 }
 .txt1{
   margin-bottom: .26rem;
   >p:nth-child(1){
     font-size: .28rem;
     color:#666;
     font-weight: bold;
     margin-bottom: .08rem;
   }
   >p:nth-child(2){
     font-size: .24rem;
     color:#999;
   }
 }
 .txt2{
   display: flex;
   align-items: center;
   font-size: .28rem;
   padding-bottom: .3rem;
   >p:nth-child(1){
     color: #f60;
     font-family: Arial, Helvetica, sans-serif;
     span:nth-child(1){
       font-size: .22rem;
     }
   }
   >p:nth-child(2){
     color:#666;
   }
 }
 .ad-type-two{
   a{
     flex: 1
   }
   img{
     width: 1.7rem;
     height: 1.7rem;
     margin: 0 auto;
     margin-bottom:.28rem; 
     display: block;
   }
 }
 .swiper-pagination-bullet-active{
   background: #ccc;
 }
</style>
