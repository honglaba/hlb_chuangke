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
              <div class="nav-ico type2"></div>
              <p>酒店</p>
            </a>
            <a href="#">
              <div class="nav-ico type3"></div>
              <p>休闲娱乐</p>
            </a>
            <a href="#">
              <div class="nav-ico type4"></div>
              <p>美容丽人</p>
            </a>
            <a href="#">
              <div class="nav-ico type5"></div>
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
    <router-link to="/home/recommend" class="fr">更多></router-link>
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

<section class="vux-1px-tb bmar20 bgf tpad36">
  <div class="lrpad32 til-row bmar52">
    <h3 class="fl">精选商家</h3>
    <a class="fr" href="#">更多></a>
  </div>
  <div class="y-flex business">
    <router-link tag="a" to="#" class="flex1">
      <div class="img-box">
         <img src="./images/home-seller-img1.png" />
         <img src="./images/home-seller-logo1.png" />
      </div>
      <p class="business-name">沙拉低卡</p>
    </router-link>
    <router-link tag="a" to="#" class="flex1">
      <div class="img-box">
         <img src="./images/home-seller-img2.png" />
         <img src="./images/home-seller-logo2.png" />
      </div>
      <p class="business-name">酱子（高级日料）</p>
    </router-link>
  </div>
</section>

<section class="vux-1px-tb bmar20 bgf guess">
  <div class="til-row vux-1px-b">
    <h3>猜你喜欢</h3>
  </div>
  <ul class="guess-list">
    <li class="vux-1px-b">
      <div class="guess-img"><img src="./images/home-like-img1.png"></div>
      <div class="txt flex1">
        <div class="til-row2">
          <h4>良记甜品</h4>
          <p>创客推荐</p>
        </div>
        <span class="mark">到店直换</span>
        <p class="tsc">特色菜</p>
        <div class="price-row">
          <div><span>4.9</span>分</div>
          <p>(118条评价)</p>
        </div>
      </div>
      <p>16km</p>
    </li>
    <li class="vux-1px-b">
      <div class="guess-img"><img src="./images/home-like-img2.png"></div>
      <div class="txt flex1">
        <div class="til-row2">
          <h4>肯德基宅急送</h4>
          <p>创客推荐</p>
        </div>
        <span class="mark">到店直换</span>
        <p class="tsc">特色菜</p>
        <div class="price-row">
          <div><span>4.9</span>分</div>
          <p>(118条评价)</p>
        </div>
      </div>
      <p>16km</p>
    </li>
  </ul>
</section>
<Footerx></Footerx>
  </div>
</template>

<script>
// import headerx from "../../components/common/headerx/headerx.vue";
// import footerx from "../../components/common/footerx/footerx.vue";
// import { Swiper } from "vux";
  import Swiper from '@/../static/swiper/swiper-4.2.6.min.js'


export default {
  name: "App",
  data() {
    return {
    };
  },
  methods:{
  },
  mounted(){
    // //首页swiper
    var bannerSwiper = new Swiper ('.banner-swiper', {
      // loop:true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    })  
    var navSwiper=new Swiper ('.nav-swiper',{
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
  // components: { headerx, footerx }
};
</script>

<style lang="less" >
@import "~vux/src/styles/1px.less";
@import url("../../../static/swiper/swiper-4.2.6.min.css");
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
        background: url(./images/navico2.png) no-repeat;
        background-size: 4.2rem;
        margin: 0 auto;
        margin-bottom: 0.2rem;
      }
      .nav-ico.type1{
        background-position:0 0; 
      }
      .nav-ico.type2{
        background-position:-.84rem 0; 
      }
      .nav-ico.type3{
        background-position:-1.68rem 0; 
      }
      .nav-ico.type4{
        background-position:-2.52rem 0; 
      }
      .nav-ico.type5{
        background-position:-3.36rem 0; 
      }
    }
  }
  .swiper-wrapper {
    height: 2rem;
  }
  .swiper-pagination {
    bottom: .2rem;
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
.business{
  padding: 0 .2rem;
  padding-bottom: .15rem;
  >a{
    color: #333;
    font-size: .28rem;
  }
  >a:nth-child(1){
    margin-right: .2rem;
  }
}
.img-box{
    position: relative;
    width: 3.44rem;
    height: 1.7rem;
    >img:nth-child(1){
      width: 3.44rem;
      height: 1.7rem;
    }
    >img:nth-child(2){
      width:1.06rem;
      height:1.06rem;
      position: absolute;
      bottom: -.56rem;
      left:0 ;
    }
  }
  .business-name{
    padding-left: 1.14rem;
    height: .53rem;
    line-height: .53rem;
    font-weight: bold;
  }
  .guess{
    .til-row{
      height: .94rem;
      padding-top: .3rem;
      box-sizing: border-box;
      h3{
        width: 2.25rem;
        height: .34rem;
        background: url(./images/home-like-background.png) no-repeat;
        background-size:100%; 
        font-size: .34rem;
        margin: 0 auto;
        text-align: center;
        color: #333;
      }
    }
    .guess-list{
      padding-left: .3rem;
      >li{
        padding: .32rem .24rem .32rem 0;
        display: flex;
        .guess-img{
          width: 2.02rem;
          height: 2.02rem;
          overflow: hidden;
          margin-right: .32rem;
          img{
            height:100%;
            margin: 0 auto;
          }
        }
        .txt{
          .til-row2{
            display: flex;
            align-items: center;
            height: .36rem;
            margin-bottom: .1rem;
            >p{
              font-size: .2rem;
              color: #333;
              width: .9rem;
              height: .3rem;
              text-align: center;
              line-height: .3rem;
              border-radius: .02rem;
              background: linear-gradient(left,#ffd05f,#ffb51d);
              border: .01rem solid #ffecb0;
            }
          }
          h4{
            font-size: .36rem;
            color: #333;
            margin-right: .16rem;
          }
          .mark{
            font-size: .22rem;
            color: #fa443a;
            background: #fff5f4;
            border: 1px solid #fededc;
            width: 1.11rem;
            // height: .32rem;
            box-sizing: border-box;
            display: block;
            text-align: center;
            line-height: .32rem;
            border-radius: .04rem;
            margin-bottom: .42rem;
          }
          // .mark.vue-1px:before{
          //   border: 1px solid #fededc;
          //   border-radius: .04rem;
          // }
          .tsc{
            font-size: .28rem;
            color: #666;
            margin-bottom: .1rem;
          }
          .price-row{
            overflow: hidden;
            font-size: .28rem;
            color: #666;
            >div{
              float: left;
              margin-right:.4rem;
              span{
                color: #f00;
                font-size: .3rem;
                
              }
            }
            >p{
              float: left;
            }
          }
        }
        >p{
          font-size: .24rem;
          color: #666;
        }
      }
    }
  }
  .swiper-pagination-bullet{
    width: .1rem !important;
    height: .1rem !important;
    background: #f1f1f1;
    opacity: 1;
    margin-right: .12rem !important;
  }
  .swiper-pagination-bullet-active{
    background: #ccc;
  }
</style>
