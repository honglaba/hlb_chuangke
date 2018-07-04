<template>
  <div>
    <div class="copy-block" v-if="seen">
      <Headerx></Headerx>
      <section class="screen-row">
          <ul class="screen-tab">
            <li v-for="(tab, index) in screenTab" @click="screenTap(index)" :class="{cur:tab.active}" :key="index">
              <p>{{tab.name}}</p>
              <span></span>
            </li>
          </ul>
          <section class="screen-inner"  @click.self="maskTap">
            <ul v-if="tabTemp==0" class="screen-li">
              <!-- <li>全部</li>
              <li>甜品饮品</li>
              <li>火锅</li>
              <li>生日蛋糕</li>
              <li class="cur">自助餐</li>
              <li>小吃快餐</li>
              <li>日韩料理</li>
              <li>西餐</li>
              <li>聚餐宴席</li>
              <li>烧烤烤肉</li>
              <li>小吃快餐</li>
              <li>日韩料理</li>
              <li>西餐</li>
              <li>聚餐宴席</li>
              <li>烧烤烤肉</li> -->
              <li v-for="(item, index) in category" :data-category="item.id" @click="switchCategory(index,$event)" :key="index" :class="{cur:item.active}">{{item.title}}</li>
            </ul>
            <div v-if="tabTemp==1" class="lr-part">
              <ul class="left-nav">
                <!-- <li class="cur">
                  <span>附近</span>
                  <span></span>
                </li>
                <li>
                  <span>推荐商圈</span>
                  <span></span>
                </li>
                <li>
                  <span>南城区</span>
                  <span></span>
                </li>
                <li>
                  <span>东城区</span>
                  <span></span>
                </li> -->

                <li v-for="(item,index) in region" :class="{cur:item.active}" @click="switchRegion(index)">
                  <span>{{item.region_name}}</span>
                  <span></span>
                </li>
              </ul>
              <ul class="right-inner">
                <!-- <li>全部</li>
                <li class="cur">第一国际/汇一城</li>
                <li>富民步行街</li>
                <li>洪福路口</li>
                <li>景湖时代城</li> -->

                <li v-for="(item,index) in areas">
                  {{item.region_name}}
                </li>
              </ul>
            </div>
            <ul v-if="tabTemp==2" class="screen-li sort">
              <!-- <li>智能排序</li>
              <li>离我最近</li>
              <li>好评优先</li>
              <li>人气最高</li> -->

              <li v-for="(item,index) in sortTxt" :class="{cur:item.active}" @click="sort(index)">{{item.title}}</li>
            </ul>
          </section>
        </section>
    </div>
    <scroller :on-infinite="infinite" ref="myscroller" >
      <Headerx></Headerx>
      <div class="swiper-container banner-swiper" v-if="!seen">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./images/1_02.jpg" /></div>
          <div class="swiper-slide"><img src="./images/1_02.jpg" /></div>
          <div class="swiper-slide"><img src="./images/1_02.jpg" /></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <section class="screen-row">
        <ul class="screen-tab">
          <li v-for="(tab, index) in screenTab" @click="bindTap(index)" :key="index">
            <p>{{tab.name}}</p>
            <span></span>
          </li>
        </ul>
        <!-- <section class="screen-inner" v-if="seen" @click.self="maskTap">
          <ul v-if="tabTemp==0" class="screen-li">
            <li v-for="(item, index) in category" :data-category="item.id" @click="switchCategory(index,$event)" :key="index" :class="{cur:item.active}">{{item.title}}</li>
          </ul>
          <div v-if="tabTemp==1" class="lr-part">
            <ul class="left-nav">
              <li v-for="(item,index) in region">
                <span>{{item.region_name}}</span>
                <span></span>
              </li>
            </ul>
            <ul class="right-inner">
              <li v-for="(item,index) in areas">
                {{item.region_name}}
              </li>
            </ul>
          </div>
          <ul v-if="tabTemp==2" class="screen-li sort">
            <li v-for="(item,index) in sortTxt" :class="{cur:item.active}" @click="sort(index)">{{item.title}}</li>
          </ul>
        </section> -->
      </section>
      <section class="business-list">

        <ul>
          <!-- <router-link tag="li" to="#" class="vux-1px-b" v-for="(item,index) in businessList">
          <ListInner :businessList="item"></ListInner>
          <Other></Other>
        </router-link> -->

          <router-link tag="li" to="#" class="vux-1px-b" v-for="(item,index) in shopList" :key="index">
            <ListInner :businessList="item"></ListInner>
            <Other></Other>
          </router-link>
        </ul>

      </section>
    </scroller>
    </div>
</template>
<script>
import Swiper from '@/../static/swiper/swiper-4.2.6.min.js'
import Other from '../../components/common/other/other'
import ListInner from '../../components/common/listInner/listInner'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      businessList: [
        {
          name: '良记甜品',
          pic: '../../../static/images/nearby-label-img1.png'
        },
        {
          name: '肯德基宅急送',
          pic: '../../../static/images/nearby-label-img2.png'
        }
      ],
      seen: false,
      screenTab: [
        {
          name: '全部分类',
          active: false
        },
        {
          name: '附近商家',
          active: false
        },
        {
          name: '智能排序',
          active: false
        }
      ],
      tabTemp: null,
      category: [],
      shopList: [],
      nextPageUrl: '',
      tempArr: [],
      sortTxt: [
        {title: '智能排序', active: true},
        {title: '离我最近', active: false},
        {title: '好评优先', active: false},
        {title: '人气最高', active: false}
      ]
    }
  },
  components: { ListInner, Other },
  methods: {
    ...mapActions(['HTTP_GetCategory', 'HTTP_GetCategoryShop', 'HTTP_SwitchCategory']),
    bindTap: function (index) { // 模拟绑定点击
      this.screenTap(index)
    },
    screenTap: function (index) { // 顶部筛选切换
      // let screenTab = document.querySelectorAll('.screen-tab>li')
      if (this.tabTemp == null || this.tabTemp !== index) {
        this.tabTemp = index
        for (let i = 0, len = this.screenTab.length; i < len; i++) {
          this.screenTab[i].active = false
        }
        this.screenTab[index].active = true
        this.seen = true
      } else if (this.tabTemp === index) {
        for (let i = 0, len = this.screenTab.length; i < len; i++) {
          this.screenTab[i].active = false
        }
        this.tabTemp = null
        this.seen = false
      }
    },
    maskTap: function () { // 遮罩层点击
      this.seen = false
      this.tabTemp = null
      let screenTab = document.querySelectorAll('.screen-tab>li')
      for (let i = 0, len = screenTab.length; i < len; i++) {
        this.screenTab[i].active = false
      }
    },
    getCategory: function () {
      // 分类
      this.axios.get('/api/shop-category?parent=1').then(res => {
        for (let i = 0, len = res.data.length; i < len; i++) {
          res.data[i].active = false
        }
        this.category = res.data
      })
      // this.HTTP_GetCategory().then(res => {
      //   this.category = res.data
      // })
    },
    getCategoryShop: function (id) {
      // 分类下商店
      // this.HTTP_GetCategoryShop().then(res => {
      id ? id = id : id = 0
      this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&cid=' + id).then(res => {
        if (res.next_page_url != null) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('')
        } else {
          this.nextPageUrl = null
        }

        delete res.data.result_state
        delete res.data.return_state
        this.shopList = []
        for (let i in res.data) {
          this.shopList.push(res.data[i])
        }
      })
    },
    switchCategory: function (index, event) { // 切换分类
      let categoryId = event.target.getAttribute('data-category')
      // this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&cid=' + categoryId).then(res => {
      //   console.log(res)
      // })
      this.getCategoryShop(categoryId)
      // this.HTTP_SwitchCategory(categoryId).then(res => {
      //   console.log(res)
      // })

      // 点击改变样式
      for (let i = 0, len = this.category.length; i < len; i++) {
        this.category[i].active = false
      }
      this.category[index].active = true
      this.screenTab[0].name = this.category[index].title
      this.maskTap()// 相同逻辑收起下拉
    },
    getRegion: function () { // 附近筛选
      this.axios.get('/api/region?parent=79').then(res => { // 79是东莞
        // console.log(res.data)
        this.areas = res.data
      })
    },
    getArea: function () {
      this.axios.get('/api/areas?latitude=23.0148260&longitude=113.7451960').then(res => {
        // console.log(res.data)

        for (let i = 0, len = res.data.length; i < len; i++) {
          res.data[i].active = false
        }
        res.data[0].active = true
        this.region = res.data
        this.areas = res.data[0].children
        // console.log(this.region)
      })
    },
    sort: function (index) { // 排序
      for (let i = 0, len = this.sortTxt.length; i < len; i++) {
        this.sortTxt[i].active = false
      }
      this.sortTxt[index].active = true
      this.screenTab[2].name = this.sortTxt[index].title
      this.maskTap()
    },
    switchRegion: function (index) {
      for (let i = 0, len = this.region.length; i < len; i++) {
        this.region[i].active = false
      }
      this.region[index].active = true
      console.log(this.region)
    },
    infinite (done) {
      // 下拉加载vue-scroll
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2)
        })
        return
      }
      let self = this // this指向问题
      setTimeout(() => {
        this.axios.get(this.nextPageUrl + '&cid=1').then(res => {
          this.tempArr = []
          res.next_page_url == null
            ? (this.nextPageUrl = null)
            : (this.nextPageUrl = res.next_page_url
              .split('http://api.hlbck.com')
              .join(''))
          delete res.data.result_state
          delete res.data.return_state
          for (let i in res.data) {
            this.tempArr.push(res.data[i])
          }
        })
        this.shopList = this.shopList.concat(this.tempArr)
        if (this.nextPageUrl == null) {
          self.noData = '没有更多数据'
        }
        // self.$refs.myscroller.resize()
        done()
      }, 500)
    },
    // done()表示这次异步加载数据完成，加载下一次
    // 因为这个是同步的，加了setTimeout就是异步加载数据；
    // 因为涉及到this指向问题，所以将他放在一个变量里。
    refresh () {}
  },
  mounted () {
    /* eslint-disable */
    new Swiper('.banner-swiper', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
    this.getCategory()
    this.getCategoryShop()
    // this.getRegion()
    this.getArea()
  }
}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
@import url("../../../static/swiper/swiper-4.2.6.min.css");
.banner-swiper {
  width: 7.5rem;
  height: 2.6rem;
  img {
    width: 7.5rem;
    height: 2.6rem;
  }
}
.swiper-pagination.swiper-pagination-bullets {
  bottom: 0.16rem;
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
.screen-row {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  margin-bottom: 0.2rem;
  position: relative;
  z-index: 999;
  > ul {
    display: flex;
    > li {
      flex: 1;
      text-align: center;
      line-height: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        border-top: 0.08rem solid #888;
        border-left: 0.07rem solid #fff;
        border-right: 0.07rem solid #fff;
      }
      > p {
        color: #333;
        margin-right: 0.07rem;
      }
    }
    > .cur {
      > span {
        border-top: none;
        border-bottom: 0.08rem solid #f60;
        border-left: 0.07rem solid #fff;
        border-right: 0.07rem solid #fff;
      }
      > p {
        color: #f60;
      }
    }
  }
  .screen-inner {
    position: absolute;
    width: 100%;
    height:calc(100vh - 1.68rem);
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    > ul {
      background: #fff;
      padding-left: 0.6rem;
      box-sizing: border-box;
       max-height:70%;
      overflow-y: scroll;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.28rem;
      }
      .cur {
        color: #f60;
      }
    }
    .lr-part{
      background: #fff;
      padding-left: 0.6rem;
      box-sizing: border-box;
      display: flex;
      max-height: 70%;
      overflow: hidden;
        > ul {
        background: #fff;
        box-sizing: border-box;
        overflow-y: scroll;
        li {
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.28rem;
        }
        .cur {
          color: #f60;
          display: flex;
          align-items: center;
          >span:nth-child(1){
            margin-right: .08rem
          }
          >span:nth-child(2){
            display: block;
            width:.1rem;
            height: .19rem;
            background: url(./images/icon_opt_into.png) no-repeat;
            background-size:.1rem;
          }
        }
      }
      .left-nav{
        width: 3.05rem;
      }
      .right-inner{
        flex: 1
      }
    }
  }
}
.business-list {
  background: #fff;
  padding: 0 0.3rem;
  > ul > li {
    padding-top: 0.32rem;
  }
}
</style>
