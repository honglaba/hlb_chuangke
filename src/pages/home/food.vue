<template>
  <scroller :on-infinite="infinite" ref="myscroller">
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
        <li v-for="(tab,index) in screenTab" @click="screenTap(index)" :class="{cur:tab.active}" :key="index">
          <p>{{tab.name}}</p>
          <span></span>
        </li>
      </ul>
      <section class="screen-inner" v-if="seen" @click.self="maskTap">
        <ul>
          <!-- <li>全部</li>
          <li>甜品饮品</li>
          <li>火锅</li>
          <li>生日蛋糕</li>
          <li class="cur">自助餐</li>
          <li>小吃快餐</li>
          <li>日韩料理</li>
          <li>西餐</li>
          <li>聚餐宴席</li>
          <li>烧烤烤肉</li> -->

           <li v-for="(item,index) in category" :data-category="item.id" @click="switchCategory">{{item.title}}</li>
        </ul>
      </section>
    </section>
    <section class="business-list">
      <ul>
        <!-- <router-link tag="li" to="#" class="vux-1px-b" v-for="(item,index) in businessList">
          <ListInner :businessList="item"></ListInner>
          <Other></Other>
        </router-link> -->

        <router-link tag="li" to="#" class="vux-1px-b" v-for="(item,index) in shopList">
          <ListInner :businessList="item"></ListInner>
          <Other></Other>
        </router-link>
      </ul>
    </section>
  </scroller>
</template>
<script>
import Swiper from '@/../static/swiper/swiper-4.2.6.min.js'
import Other from '../../components/common/other/other'
import ListInner from '../../components/common/listInner/listInner'
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
      lastPage: null,
      nextPageUrl: '',
      currentPage: null,
      shopTotal: null,
      offset: 0,
      tempArr: [],
      moveList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  },
  components: { ListInner, Other },
  methods: {
    screenTap: function (index) {
      let screenTab = document.querySelectorAll('.screen-tab>li')
      if (this.tabTemp == null || this.tabTemp != index) {
        this.tabTemp = index
        for (let i = 0, len = screenTab.length; i < len; i++) {
          this.screenTab[i].active = false
        }
        this.screenTab[index].active = true
        this.seen = true
      } else if (this.tabTemp == index) {
        for (let i = 0, len = screenTab.length; i < len; i++) {
          this.screenTab[i].active = false
        }
        this.tabTemp = null
        this.seen = false
      }
    },
    maskTap: function () {
      this.seen = false
      this.tabTemp = null
      let screenTab = document.querySelectorAll('.screen-tab>li')
      for (let i = 0, len = screenTab.length; i < len; i++) {
        this.screenTab[i].active = false
      }
    },
    getCategory: function () { // 分类
      this.axios.get(' /api/shop-category/children?id=1').then(res => {
        console.log(res)
        this.category = res.data
      })
    },
    getCategoryShop: function () { // 分类下商店
      this.axios.get('/api/shop-category/shops?cid=1').then(res => {
        console.log(res)
        this.lastPage = res.last_page
        this.nextPageUrl = res.next_page_url.split('http://api.ck.honglaba.com').join('')
        this.currentPage = res.current_page
        this.shopTotal = res.total
        delete res.data.result_state
        delete res.data.return_state
        for (let i in res.data) {
          this.shopList.push(res.data[i])
        }
      })
    },
    switchCategory: function (e) { // 切换分类
      let categoryId = e.target.getAttribute('data-category')
      this.axios.get('/api/shop-category/shops?cid=' + categoryId).then(res => {
        console.log(res)
      })
    },

    infinite (done) {
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2)
        })
        return
      }
      let self = this// this指向问题
      let start = this.shopList.length
      // let start = this.moveList.length

      setTimeout(() => {
        console.log(this.nextPageUrl)
        this.axios.get(this.nextPageUrl + '&cid=1').then(res => {
          this.tempArr = []
          console.log(res.next_page_url)

          this.nextPageUrl = res.next_page_url.split('http://api.ck.honglaba.com').join('')
          delete res.data.result_state
          delete res.data.return_state
          for (let i in res.data) {
            this.tempArr.push(res.data[i])
          }
          // this.shopList = this.shopList.concat(tempArr)
        })
        console.log(this.tempArr)
        // for (let i = start + 1; i < start + 10; i++) {
        //   self.moveList.push(i)
        // }
        this.shopList = this.shopList.concat(this.tempArr)
        if (start > this.shopTotal) {
          self.noData = '没有更多数据'
        }
        self.$refs.myscroller.resize()
        done()
      }, 500)
    },
    // infinite (done) {
    //   if (this.noData) {
    //     setTimeout(() => {
    //       this.$refs.myscroller.finishInfinite(2)
    //     })
    //     return
    //   }
    //   let self = this// this指向问题
    //   let start = this.moveList.length

    //   setTimeout(() => {
    //     for (let i = start + 1; i < start + 10; i++) {
    //       self.moveList.push(i)
    //     }
    //     if (start > 30) {
    //       self.noData = '没有更多数据'

    //       this.axios.get(this.nextPageUrl + '&cid=1').then(res => {
    //         this.nextPageUrl = res.next_page_url.split('http://api.ck.honglaba.com').join('')
    //         delete res.data.result_state
    //         delete res.data.return_state
    //         let tempArr = []
    //         for (let i in res.data) {
    //           tempArr.push(res.data[i])
    //         }
    //         this.shopList = this.shopList.concat(tempArr)
    //       })
    //     }
    //     self.$refs.myscroller.resize()
    //     done()
    //   }, 500)
    // },

    // done()表示这次异步加载数据完成，加载下一次
    // 因为这个是同步的，加了setTimeout就是异步加载数据；
    // 因为涉及到this指向问题，所以将他放在一个变量里。
    refresh () {
      console.log('refresh')
    }
  },
  mounted () {
    var newSwiper = new Swiper('.banner-swiper', {
      pagination: {
        el: '.swiper-pagination'
      }
    })

    this.getCategory()
    this.getCategoryShop()

    this.axios.get('/api/shop-category?id=1').then(res => {
      console.log(res)
    })
    this.axios.get('/api/shop?id=1').then(function (res) {
      console.log(res)
    })
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
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    > ul {
      background: #fff;
      padding-left: 0.6rem;
      box-sizing: border-box;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.28rem;
      }
      .cur {
        color: #f60;
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
