<template>
  <div>
    <mt-loadmore ref="loadmore"  :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded"  >
    <Headerx></Headerx>
    <div id="allmap" class="allmap" style="display:none"></div>
    <section class="bgf bmar20 vux-1px-b bpad26 tpad27" key="1">
      <div class="swiper-container banner-swiper index">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide"><img src="./images/home-banner-img1.png" /></div>
          <div class="swiper-slide"><img src="./images/home-banner-img2.png" /></div>
          <div class="swiper-slide"><img src="./images/home-banner-img3.png" /></div> -->

          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item.img_path" />
          </div>

        </div>
      </div>

      <div class="swiper-container nav-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to="/home/food" v-for="(item,index) in channel" :key="index">
              <!-- <div class="nav-ico type1"></div> -->
              <img :src="item.img_path" />
              <p>{{item.title}}</p>
            </router-link>
          </div>

          <!-- <div class="swiper-slide">
            <router-link to="/home/food">
              <div class="nav-ico type1"></div>
              <p>美食</p>
            </router-link>
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
          </div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <div class="y-flex ad">
        <a href="#">
          <!-- <img src="./images/home-news-text.png" /> -->
        </a>
        <a href="javascript:;" class="vux-1px-l">小米儿溜溜，注册成为创客会员</a>
      </div>
    </section>

    <section class="vux-1px-tb bmar20 bgf tpad36" key="2">
      <div class="lrpad32 til-row bmar56">
        <h3 class="fl">精选推荐</h3>
        <router-link to="/home/recommend" class="fr">更多></router-link>
      </div>
      <div class="y-flex ad-type-one">
          <router-link tag="a" to="#" v-for="(item, index) in goods" :key="index">
          <img src="./images/home-recommend-img1.png" />
          <!-- <img :src="item.thumb" /> -->
            <div class="lpad26">
            <div class="txt1">
              <p>{{item.name}}</p>
              <p>送创客微卡</p>
            </div>
            <div class="txt2">
              <p>
                <span>￥</span>
                <span>{{item.price}}</span>
              </p>
              <p>特价</p>
            </div>
          </div>
        </router-link>
      </div>
      <!-- 以下是隐藏部分模板 有用 -->
      <!-- <div class="y-flex ad-type-one">
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
      </div> -->

    </section>

    <section class="vux-1px-tb bmar20 bgf tpad36" key="3">
      <div class="lrpad32 til-row bmar52">
        <h3 class="fl">精选商家</h3>
        <!-- <a class="fr" href="#">更多></a> -->
        <router-link class="fr" tag="a" to="/home/choice">更多></router-link>
      </div>
      <div class="y-flex business">
        <!-- <router-link tag="a" to="#" class="flex1">
          <div class="img-box">
            <img src="./images/home-seller-img1.png" />
            <img src="./images/home-seller-logo1.png" />
          </div>
          <p class="business-name">沙拉低卡</p>
        </router-link>
        <router-link tag="a" to="javascript:;" class="flex1">
          <div class="img-box">
            <img src="./images/home-seller-img2.png" />
            <img src="./images/home-seller-logo2.png" />
          </div>
          <p class="business-name">酱子（高级日料）</p>
        </router-link> -->

        <router-link tag="a" to="#" class="flex1 sp" v-for="(item, index) in superme" :key="index">
          <img :src='item.img_path'>
        </router-link>
      </div>
    </section>

    <section class="vux-1px-tb bmar20 bgf guess" key="4">
      <div class="til-row1 vux-1px-b">
        <h3>猜你喜欢</h3>
      </div>
      <ul class="guess-list">
        <router-link tag="li" :to="{path:'home/choice-details/',query:{id:item.id}}" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
          <ListInner :businessList="item"></ListInner>
        </router-link>
      </ul>
    </section>

    </mt-loadmore>
    <Footerx></Footerx>
  </div>
</template>

<script>
import ListInner from '../../components/common/listInner/listInner'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from '@/../static/swiper/swiper-4.2.6.min.js'
// import Swiper from '@/../static/swiper/swiper.min.js'
import { mapActions } from 'vuex'
import { Loadmore } from 'mint-ui'
export default {
  name: 'App',
  data () {
    return {
      banner: [],
      superme: [],
      channel: [],
      goods: [],
      transitionName: 'slide-right',
      businessList: []
      // businessList: [
      //   {
      //     name: '良记甜品',
      //     pic: '../../../static/images/nearby-label-img1.png'
      //   },
      //   {
      //     name: '肯德基宅急送',
      //     pic: '../../../static/images/nearby-label-img2.png'
      //   }
      // ]
    }
  },
  components: { ListInner, swiper, swiperSlide, 'mt-loadmore': Loadmore },
  methods: {
    ...mapActions(['APP_Banner']),
    // loadmore
    loadTop () {
      this.$refs.loadmore.onTopLoaded()
      this.axios.get(this.nextPageUrl).then(res => {
        console.log(res)
        console.log(this.businessList)
      })
    },
    loadBottom () {
      this.axios.get(this.nextPageUrl).then(res => {
        this.businessList = this.businessList.concat(res.data)// 添加数据
        this.$refs.loadmore.onBottomLoaded()// 加载过程
        if (res.next_page_url != null) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('') + '&latitude=23.0148260&longitude=113.7451960'
        } else {
          this.allLoaded = true// 若数据已全部获取完毕
          this.nextPageUrl = null
        }
      })
    },
    // loadmore end
    getBanner: function () {
      // 顶部banner
      this.axios.get('/api/banner?key=index').then(res => {
        this.banner = res.data
      })
    },
    getSuperme: function () {
      // 精选商家
      this.axios.get('/api/banner?key=superme').then(res => {
        this.superme = res.data
      })
    },
    getChannel: function () {
      // 分类导航
      this.axios.get('/api/banner?key=channel').then(res => {
        this.channel = res.data
      })
    },
    getGoods: function () {
      // 精选推荐
      this.axios.get('/api/weika/goods').then(res => {
        this.goods = res.data
      })
    },
    getCategoryShop: function (id) {
      // 分类下商店
      // this.HTTP_GetCategoryShop().then(res => {
      // id ? id = id : id = 0 // 0即为全部
      // id ? id = '&cid=' + id : id = ''
      this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&by=total_customers&order=desc').then(res => {
      // this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960').then(res => {
        if (res.next_page_url != null) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('') + '&latitude=23.0148260&longitude=113.7451960'
        } else {
          this.nextPageUrl = null
        }
        delete res.data.result_state
        delete res.data.return_state
        this.businessList = []
        for (let i in res.data) {
          this.businessList.push(res.data[i])
          console.log(this.businessList[i].id)
        }
      })
    }
  },
  created () {
    // this.APP_Banner('nearby').then(res => {
    //   console.log(res, 'nearby')
    // })
    // this.APP_Banner('index').then(res => {
    //   this.banner = res.data
    // })
    this.getBanner()
    this.getSuperme()
    this.getChannel()
    this.getGoods()
    this.getCategoryShop()
  },
  mounted () {
    // 百度地图API功能
    var map = new BMap.Map('allmap') // 创建Map实例
    // 获取自身定位并存入sessionStorage
    var my_point = []
    var geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition(
      function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
          // alert('您的位置：' + r.point.lng + ',' + r.point.lat)
          sessionStorage.lng = r.point.lng
          sessionStorage.lat = r.point.lat
        } else {
          alert('failed' + this.getStatus())
        }
      },
      { enableHighAccuracy: true }
    )
  },
  updated () {
    new Swiper('.banner-swiper', {// 顶部banner实例化
      autoplay: 8000,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto'
      // effect: 'coverflow',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true
      // }
    })
    new Swiper('.nav-swiper', {// 分类导航实例化
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
@import url("../../../static/swiper/swiper-4.2.6.min.css");
// @import url("../../../static/swiper/swiper.min.css");
#app {
  padding-bottom: 1rem;
}
.swiper-container {
  overflow-y: inherit;
}
.banner-swiper.index {
  height: 2.96rem;
  .swiper-slide {
    // width: 85%;
    width: 6.86rem;
    height: 2.56rem;
    overflow: hidden;
    margin:0 .1rem;
    border-radius: .12rem;
    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.2)
  }
  img {
    width: 100%;
    height: 2.56rem;
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
      > img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }
      .nav-ico {
        width: 0.84rem;
        height: 0.84rem;
        background: url(./images/navico2.png) no-repeat;
        background-size: 4.2rem;
        margin: 0 auto;
        margin-bottom: 0.2rem;
      }
      .nav-ico.type1 {
        background-position: 0 0;
      }
      .nav-ico.type2 {
        background-position: -0.84rem 0;
      }
      .nav-ico.type3 {
        background-position: -1.68rem 0;
      }
      .nav-ico.type4 {
        background-position: -2.52rem 0;
      }
      .nav-ico.type5 {
        background-position: -3.36rem 0;
      }
    }
  }
  .swiper-wrapper {
    height: 2rem;
  }
  .swiper-pagination {
    bottom: 0.2rem;
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
    background-size: 100%;
  }
  > a:nth-child(2) {
    font-size: 0.26rem;
    color: #222;
    padding-left: 0.24rem;
  }
}
.til-row {
  overflow: hidden;
  line-height: 0.4rem;
  h3 {
    font-size: 0.4rem;
    color: #333;
  }
  a {
    font-size: 0.28rem;
    color: #666;
  }
}
.ad-type-one {
  a {
    flex: 1;
  }
  img {
    width: 1.78rem;
    display: block;
    margin: 0 auto;
  }
}
.txt1 {
  margin-bottom: 0.26rem;
  > p:nth-child(1) {
    font-size: 0.28rem;
    color: #666;
    font-weight: bold;
    margin-bottom: 0.08rem;
  }
  > p:nth-child(2) {
    font-size: 0.24rem;
    color: #999;
  }
}
.txt2 {
  display: flex;
  align-items: center;
  font-size: 0.28rem;
  padding-bottom: 0.3rem;
  > p:nth-child(1) {
    color: #f60;
    font-family: Arial, Helvetica, sans-serif;
    span:nth-child(1) {
      font-size: 0.22rem;
    }
  }
  > p:nth-child(2) {
    color: #666;
  }
}
.ad-type-two {
  a {
    flex: 1;
  }
  img {
    width: 1.7rem;
    height: 1.7rem;
    margin: 0 auto;
    margin-bottom: 0.28rem;
    display: block;
  }
}
.business {
  padding: 0 0.2rem;
  padding-bottom: 0.15rem;
  > a {
    color: #333;
    font-size: 0.28rem;
  }
  > a:nth-child(1) {
    margin-right: 0.2rem;
  }
  > .sp {
    > img {
      width: 100%;
    }
  }
}
.img-box {
  position: relative;
  width: 3.44rem;
  height: 1.7rem;
  > img:nth-child(1) {
    width: 3.44rem;
    height: 1.7rem;
  }
  > img:nth-child(2) {
    width: 1.06rem;
    height: 1.06rem;
    position: absolute;
    bottom: -0.56rem;
    left: 0;
  }
}
.business-name {
  padding-left: 1.14rem;
  height: 0.53rem;
  line-height: 0.53rem;
  font-weight: bold;
}
.guess {
  .til-row1 {
    height: 0.94rem;
    padding-top: 0.3rem;
    box-sizing: border-box;
    h3 {
      width: 2.25rem;
      height: 0.34rem;
      background: url(./images/home-like-background.png) no-repeat;
      background-size: 100%;
      font-size: 0.34rem;
      margin: 0 auto;
      text-align: center;
      color: #333;
    }
  }
  .guess-list {
    padding-left: 0.3rem;
    > li {
      padding: 0.32rem 0.24rem 0.32rem 0;
    }
  }
}
.swiper-pagination-bullet {
  width: 0.1rem !important;
  height: 0.1rem !important;
  background: #f1f1f1;
  opacity: 1;
  margin-right: 0.12rem !important;
}
.swiper-pagination-bullet-active {
  background: #ccc;
}
</style>
