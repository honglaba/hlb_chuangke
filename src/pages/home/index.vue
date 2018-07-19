<template>
    <!-- <mt-loadmore ref="loadmore"  :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded"  > -->
    <div>
    <div id="mescroll" class="mescroll">
      <Headerx @result='result'></Headerx>
      <div id="allmap" class="allmap" style="display:none"></div>
      <section class="bgf bmar20 vux-1px-b bpad26 tpad27" key="1">
        <div class="swiper-container banner-swiper index">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
              <img :src="item.img_path" />
            </div>

          </div>
        </div>
        <div class="swiper-container nav-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <router-link :to="item.link_url" v-for="(item,index) in channel" :key="index">
                <!-- <div class="nav-ico type1"></div> -->
                <img :src="item.img_path" />
                <p>{{item.title}}</p>
              </router-link>
            </div>

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
          <router-link to="/home/recommend" class="fr"><span>更多</span><span class="littleArr"></span></router-link>
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
          <router-link class="fr" tag="a" to="/home/choice"><span>更多</span><span class="littleArr"></span></router-link>
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
          <router-link tag="li" :to="{path:'home/shop/',query:{id:item.id}}" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
            <ListInner :businessList="item"></ListInner>
          </router-link>
        </ul>
      </section>

      <!-- </mt-loadmore> -->

    </div>
    <Footerx></Footerx>
    </div>
</template>

<script>
import ListInner from '../../components/common/listInner/listInner'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from '@/../static/swiper/swiper-4.2.6.min.js'
import MeScroll from '@/../static/js/mescroll.min.js'
// import Swiper from '@/../static/swiper/swiper.min.js'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      banner: [],
      superme: [],
      channel: [],
      goods: [],
      transitionName: 'slide-right',
      businessList: [],
      allLoaded: false,
      mescroll: null,
      pdlist: [],
      page: null
      // businessList: []
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
  components: { ListInner, swiper, swiperSlide },
  methods: {
    ...mapActions(['APP_Banner']),
    result: function (result) {
      // 从子Headerx组件回传的值
      this.businessList = result
    },
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
        for (let i = 0, len = res.data.length; i < len; i++) { // 处理链接
          if (res.data[i].link_url != '') {
            res.data[i].link_url = res.data[i].link_url.split('http://t.hlbck.com/#/').join('')
          }
        }
        this.channel = res.data
      })
    },
    getGoods: function () {
      // 精选推荐
      this.axios.get('/api/weika/goods').then(res => {
        this.goods = res.data
        this.goods.length = 3// 限制数量为三个
      })
    },
    getCategoryShop: function (id) {
      // 分类下商店
      // this.HTTP_GetCategoryShop().then(res => {
      // id ? id = id : id = 0 // 0即为全部
      // id ? id = '&cid=' + id : id = ''
      this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&by=total_customers&order=desc').then(res => {
      // this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960').then(res => {

        this.page = res
        if (res.next_page_url != null) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('') + '&latitude=23.0148260&longitude=113.7451960'
        } else {
          this.nextPageUrl = null
        }
        delete res.data.result_state
        delete res.data.return_state
        // this.businessList = []
        for (let i in res.data) {
          // this.businessList.push(res.data[i])
          if (res.data[i].distance >= 1000) {
            // res.data[i].distance = res.data[i].distance / 1000 + 'Km'
            res.data[i].distance = (res.data[i].distance / 1000).toFixed(1) + 'Km'
          } else {
            res.data[i].distance = res.data[i].distance + 'm'
          }
        }
        this.businessList = res.data
      })
    },
    /* 联网加载列表数据
		 请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
		 实际项目以您服务器接口返回的数据为准,无需本地处理分页.
		 * */
    getListDataFromNet: function (pageNum, pageSize, successCallback, errorCallback) {
      // 延时一秒,模拟联网
      let that = this
      // setTimeout(function () {
      //   //          	axios.get("xxxxxx", {
      //   //					params: {
      //   //						num: pageNum, //页码
      //   //						size: pageSize //每页长度
      //   //					}
      //   //				})
      //   //				.then(function(response) {
      //   var data = pdlist1 // 模拟数据: ../res/pdlist1.js
      //           	var listData = []// 模拟分页数据
      //   for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
	    //         		if (i == data.length) break
	    //         		listData.push(data[i])
	    //         	}
      //           	successCallback && successCallback(listData)// 成功回调
      //   //				})
      //   //				.catch(function(error) {
      //   //					errorCallback&&errorCallback()//失败回调
      //   //				});
      // }, 500)
      let url
      this.nextPageUrl ? url = this.nextPageUrl : url = '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&by=total_customers&order=desc'
      console.log(this.nextPageUrl)
      this.axios.get(url).then(res => {
      // this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960').then(res => {

        this.page = res
        if (res.next_page_url != null) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('') + '&latitude=23.0148260&longitude=113.7451960'
        } else {
          this.nextPageUrl = null
        }
        delete res.data.result_state
        delete res.data.return_state
        // this.businessList = []
        for (let i in res.data) {
          // this.businessList.push(res.data[i])
          if (res.data[i].distance >= 1000) {
            res.data[i].distance = (res.data[i].distance / 1000).toFixed(1) + 'Km'
          } else {
            res.data[i].distance = res.data[i].distance + 'm'
          }
        }
        // this.businessList.length == 0 ? this.businessList = res.data : this.businessList = this.businessList.concat(res.data)
        // this.businessList = this.businessList.concat(res.data)
        successCallback && successCallback(res.data)
      })
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback: function (page) {
      // 联网加载数据
      var self = this
      self.getListDataFromNet(page.num, page.size, function (curPageData) {
        console.log(curPageData)
        // curPageData = [] //打开本行注释,可演示列表无任何数据empty的配置

        // 如果是第一页需手动制空列表 (代替clearId和clearEmptyId的配置)
        // if (page.num == 1) self.businessList = []

        // 更新列表数据
        self.businessList = self.businessList.concat(curPageData)
        console.log(self.businessList)
        // 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        // mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        console.log('page.num=' + page.num + ', page.size=' + page.size + ', curPageData.length=' + curPageData.length + ', self.pdlist.length==' + self.businessList.length)

        // 方法一(推荐): 后台接口有返回列表的总页数 totalPage
        // self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

        // 方法二(推荐): 后台接口有返回列表的总数据量 totalSize
        // self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

        // 方法三(推荐): 您有其他方式知道是否有下一页 hasNext
        // self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
        self.mescroll.endSuccess(curPageData.length, self.nextPageUrl)
        // 方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
        // self.mescroll.endSuccess(curPageData.length)
      }, function () {
        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        self.mescroll.endErr()
      })
    },
    mescrollInstantiation: function () {
      // 创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      // 解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      var self = this
      self.mescroll = new MeScroll('mescroll', { // 请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
        down: {
          // callback: function () {
          //   self.businessList = []
          // },
          use: false,
          auto: false
        },
        up: {
          // auto: false,
          callback: self.upCallback, // 上拉回调
          // 以下参数可删除,不配置
          isBounce: false, // 此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
          // page:{size:8}, //可配置每页8条数据,默认10
          toTop: { // 配置回到顶部按钮
            // src: '../../../static/images/mescroll-totop.png' // 默认滚动到1000px显示,可配置offset修改
            // html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
            // offset : 1000
          },
          empty: { // 配置列表无任何数据的提示
            // warpId: 'dataList',
            icon: '../res/img/mescroll-empty.png'
            //						  	tip : "亲,暂无相关数据哦~" ,
            //						  	btntext : "去逛逛 >" ,
            //						  	btnClick : function() {
            //						  		alert("点击了去逛逛按钮");
            //						  	}
          }
          // vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
          // vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
          //						clearId: "dataList",
          //						clearEmptyId: "dataList"
        }
      })
    }

  },
  created () {
    this.getBanner()
    this.getSuperme()
    this.getChannel()
    this.getGoods()
    // this.getCategoryShop()//默认的加载列表交由mescroll第一次执行负责
  },
  mounted () {
    this.mescrollInstantiation()
  },
  updated () {
    // 百度地图
    if (!sessionStorage.lng) { // 如果本地缓存中没有经纬度才获取经纬度
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
    }

    /* eslint-disable no-new */
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
@import url("../../../static/css/mescroll.min.css");
// @import url("../../../static/swiper/swiper.min.css");
.mescroll {
    position: fixed;
    top: 0;
    bottom: 1rem;
    height: auto;
    width: 7.5rem;
}
#app {
  // padding-bottom: 1rem;
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
    display: flex;
    align-items: center;
    font-size: 0.28rem;
    color: #666;
    .littleArr{
      width: .1rem;
      height: .19rem;
      background: url(../../../static/images/littleArr.png) no-repeat;
      background-size: 100%;
      margin-left: .08rem;
    }
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
