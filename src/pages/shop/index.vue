<template>
  <!-- <mt-loadmore id="app" :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore"> -->
  <div class="shop-index">
    <!-- pc触发loadmore辅助容器 -->
    <!-- <div class="main" style="top:0"> -->
      <mt-loadmore ref="loadmore"  :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded"  class="bpad100">
        <Headerx @result='result'></Headerx>
        <section class="banner">
          <p>今日推荐</p>
          <img src="./images/nearby-banner.png" />
        </section>
        <section :class="['tab',tabFixed?'sp':'']">
          <!-- 原始tab -->
          <!-- <ul class="tab-nav">
            <li v-for="(tab,index) in tabNavs" @click="tabTap(index)" :class="{cur:tab.active}" :key="index">
              {{tab.title}}
            </li>
          </ul> -->
          <tab bar-active-color="#f60" active-color="#f60" custom-bar-width=".34rem">
            <tab-item v-for="(tab, index) in tabNavs" @click.native="tabTap(index)" :selected="index === 0" :key="index"> {{tab.title}}</tab-item>
          </tab>
          <div class="tab-con">
            <ul>
              <li v-for="(nav,index) in navs" @click="navTap(index)" :class="{cur:nav.active}" :key="index">
                {{nav.title}}
              </li>
            </ul>
          </div>
        </section>
        <section class="business-list">
          <!-- 用于占位的dom -->
          <!-- <div v-if="tabFixed" :style="{height:tabH+'px'}"></div> -->
          <ul>
            <router-link tag="li" :to="{path:'home/choice-details/',query:{id:item.id}}" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
              <ListInner :businessList="item"></ListInner>
              <Other></Other>
            </router-link>
          </ul>
        </section>

      </mt-loadmore>
      <Footerx></Footerx>
    <!-- </div> -->
  </div>
</template>
<script>
import ListInner from '../../components/common/listInner/listInner'
import Other from '../../components/common/other/other'
import { Loadmore } from 'mint-ui'
import { Tab, TabItem } from 'vux'
import { setTimeout } from 'timers'
export default {
  watch: {
    '$route' (val, oldval) {

    }
  },
  data () {
    return {
      transitionName: '',
      tabNavs: [
        // {
        //   title: '附近商家',
        //   active: true
        // },
        // {
        //   title: '美食',
        //   active: false
        // },
        // {
        //   title: '酒店',
        //   active: false
        // },
        // {
        //   title: '娱乐',
        //   active: false
        // },
        // {
        //   title: '电影',
        //   active: false
        // },
        // {
        //   title: '丽人',
        //   active: false
        // },
        // {
        //   title: '附近商家',
        //   active: false
        // },
        // {
        //   title: '美食',
        //   active: false
        // },
        // {
        //   title: '酒店',
        //   active: false
        // },
        // {
        //   title: '娱乐',
        //   active: false
        // },
        // {
        //   title: '电影',
        //   active: false
        // },
        // {
        //   title: '丽人',
        //   active: false
        // }
      ],
      navs: [
        // {
        //   title: '全部',
        //   active: true
        // },
        // {
        //   title: '甜点饮品',
        //   active: false
        // },
        // {
        //   title: '生日蛋糕',
        //   active: false
        // },
        // {
        //   title: '火锅',
        //   active: false
        // },
        // {
        //   title: '自助餐',
        //   active: false
        // },
        // {
        //   title: '小吃快餐',
        //   active: false
        // },
        // {
        //   title: '日韩料理',
        //   active: false
        // }
      ],
      businessList: [],
      allLoaded: false,
      tabFixed: false,
      tabH: ''
      // businessList: [
      //   {
      //     // name: '良记甜品',
      //     // pic: '../../../static/images/nearby-label-img1.png'
      //     title: '良记甜品',
      //     logo: '../../../static/images/nearby-label-img1.png'
      //   },
      //   {
      //     // name: '肯德基宅急送',
      //     // pic: '../../../static/images/nearby-label-img2.png'
      //     title: '肯德基宅急送',
      //     logo: '../../../static/images/nearby-label-img2.png'
      //   }
      // ]
    }
  },
  methods: {
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
    result: function (result) {
      // 从子Headerx组件回传的值
      this.businessList = result
    },
    tabTap: function (index) {
      // 1级分类切换
      let that = this
      let tabNavs = document.querySelectorAll('.tab-nav>li')
      for (let i = 0, len = tabNavs.length; i < len; i++) {
        this.tabNavs[i].active = false
      }
      this.tabNavs[index].active = true
      this.getCategoryChildren(this.tabNavs[index].id) // 获取对应的二级分类
      this.getCategoryShop(this.tabNavs[index].id)

      setTimeout(function () {
        that.tabH = document.getElementsByClassName('tab')[0].offsetHeight// 将tab的高度保存到变量
        console.log(that.tabH)
      }, 500)
    },
    navTap: function (index) {
      // 2级分类切换
      let navs = document.querySelectorAll('.tab-con li')
      for (let i = 0, len = navs.length; i < len; i++) {
        this.navs[i].active = false
      }
      this.navs[index].active = true
      this.getCategoryShop(this.navs[index].id)
    },
    getCategory: function () {
      // 获取1级分类
      this.axios.get('/api/shop-category?parent=0').then(res => {
        for (let i = 0, len = res.data.length; i < len; i++) {
          res.data[i].active = false
        }
        res.data[0].active = true
        this.tabNavs = res.data
      })
    },
    getCategoryChildren: function (id) {
      // 获取2级分类
      id ? id = id : id = 1
      this.axios.get('/api/shop-category?parent=' + id).then(res => {
        for (let i = 0, len = res.data.length; i < len; i++) {
          res.data[i].active = false
        }
        this.navs = res.data
        this.navs.unshift({title: '全部', active: true, id: id})
      })
    },
    getCategoryShop: function (id) {
      // 分类下商店
      // this.HTTP_GetCategoryShop().then(res => {
      // id ? id = id : id = 0 // 0即为全部
      // id ? id = '&cid=' + id : id = ''// 这里应该默认为‘美食’id即id应该为1 但为了测试下拉加载所以设置为空
      id ? id = '&cid=' + id : id = '&cid=1'
      this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960' + id).then(res => {
      // this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960').then(res => {
        console.log(id)
        if (res.next_page_url != null) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('') + '&latitude=23.0148260&longitude=113.7451960'
          this.allLoaded = false// 重新设置loadmore可触发
        } else {
          this.nextPageUrl = null
          this.allLoaded = true
        }
        delete res.data.result_state
        delete res.data.return_state
        this.businessList = []
        for (let i in res.data) {
          // this.businessList.push(res.data[i])
          if (res.data[i].distance >= 1000) {
            res.data[i].distance = res.data[i].distance / 1000 + 'Km'
          } else {
            res.data[i].distance = res.data[i].distance + 'm'
          }
        }
        this.businessList = res.data
        console.log(this.nextPageUrl)
      })
    },
    getHeight: function () { // 获取吸顶高度
      let that = this
      let h = document.getElementsByClassName('banner')[0].offsetHeight + document.getElementsByTagName('header')[0].offsetHeight
      window.addEventListener('scroll', function () {
        // let tabH = document.getElementsByClassName('tab')[0].offsetHeight// 将tab的高度保存到变量
        // this.tabH = tabH
        if (window.scrollY >= h) {
          that.tabFixed = true
        } else {
          that.tabFixed = false
        }
      })
    }
  },
  components: { ListInner, Other, 'mt-loadmore': Loadmore, Tab, TabItem},
  mounted () {
    this.getCategory()
    this.getCategoryChildren()
    this.getCategoryShop()
    this.getHeight()
  }
}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
.shop-index{
  .vux-tab-wrap{
  padding-top:.8rem;
}
.vux-tab-wrap .vux-tab-container{
 height:.8rem;
}
.vux-tab{
  height: .8rem !important;
}
.vux-tab .vux-tab-item{
  line-height: .8rem !important;
  font-size: .28rem !important;
  flex: 0 0 20% !important;
}
.vux-tab-wrap .vux-tab-container .vux-tab .vux-tab-ink-bar {
    height: 0.06rem !important;
}
.app {
  padding-bottom: 1.2rem;
}
.banner {
  width: 100%;
  height: 4.5rem;
  background: url(./images/nearby-banner-background.png) no-repeat;
  background-size: 100%;
  > img {
    width: 7.5rem;
    margin-top: -0.12rem;
  }
  > p {
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 0.4rem;
    padding-top: 0.35rem;
  }
}
.tab.sp{
  position: fixed;
  width: 7.5rem;
  top: 0;
  left: 50%;
  margin-left: -3.75rem;
  z-index: 99;
}
.tab-nav {
  background: #fff;
  height: 0.8rem;
  font-size: 0.28rem;
  color: #333;
  width: 100%;
  // display: inline;
  white-space: nowrap;
  overflow-x: scroll;
  float: left;
  overflow-y: hidden;
  > li {
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    position: relative;
    display: inline-block;
    margin: 0 0.3rem;
  }
  > .cur {
    color: #f60;
  }
  > .cur:before {
    content: "";
    width: 0.72rem;
    height: 0.04rem;
    background: #f60;
    border-radius: 0.02rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -0.36rem;
  }
}
.tab-con {
  background: #f5f5f5;
  padding: 0.24rem 0 0.06rem 0.24rem;
  overflow: hidden;
  li {
    width: 1.6rem;
    height: 0.52rem;
    border: 0.01rem solid #eee;
    border-radius: 0.26rem;
    font-size: 0.26rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.52rem;
    background: #fff;
    float: left;
    margin-right: 0.2rem;
    margin-bottom: 0.18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cur {
    color: #f60;
    border: 0.01rem solid #f60;
    background: #ffe7d7;
  }
}
.business-list {
  background: #fff;
  padding: 0 0.3rem;
  > ul > li {
    padding-top: 0.32rem;
  }
}
}
</style>
