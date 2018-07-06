<template>
  <!-- <mt-loadmore id="app" :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore"> -->
<div class="app">
  <mt-loadmore ref="loadmore"  :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false">
    <headerx></headerx>
    <section class="banner">
      <p>今日推荐</p>
      <img src="./images/nearby-banner.png" />
    </section>
    <section class="tab">
      <ul class="tab-nav">
        <li v-for="(tab,index) in tabNavs" @click="tabTap(index)" :class="{cur:tab.active}" :key="index">
          {{tab.title}}
        </li>
      </ul>
      <div class="tab-con">
        <ul>
          <li v-for="(nav,index) in navs" @click="navTap(index)" :class="{cur:nav.active}" :key="index">
            {{nav.title}}
          </li>
        </ul>
      </div>
    </section>
    <section class="business-list">
      <ul>
        <router-link tag="li" to="javascript:;" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
          <ListInner :businessList="item"></ListInner>
          <Other></Other>
        </router-link>
      </ul>
    </section>
  </mt-loadmore>
  <Footerx></Footerx>
  </div>
</template>
<script>
import ListInner from '../../components/common/listInner/listInner'
import Other from '../../components/common/other/other'
import { Loadmore } from 'mint-ui'
export default {
  watch: {
    '$route' (val, oldval) {

    }
  },
  data () {
    return {
      transitionName: '',
      tabNavs: [
        {
          title: '附近商家',
          active: true
        },
        {
          title: '美食',
          active: false
        },
        {
          title: '酒店',
          active: false
        },
        {
          title: '娱乐',
          active: false
        },
        {
          title: '电影',
          active: false
        },
        {
          title: '丽人',
          active: false
        },
        {
          title: '附近商家',
          active: false
        },
        {
          title: '美食',
          active: false
        },
        {
          title: '酒店',
          active: false
        },
        {
          title: '娱乐',
          active: false
        },
        {
          title: '电影',
          active: false
        },
        {
          title: '丽人',
          active: false
        }
      ],
      navs: [
        {
          title: '全部',
          active: true
        },
        {
          title: '甜点饮品',
          active: false
        },
        {
          title: '生日蛋糕',
          active: false
        },
        {
          title: '火锅',
          active: false
        },
        {
          title: '自助餐',
          active: false
        },
        {
          title: '小吃快餐',
          active: false
        },
        {
          title: '日韩料理',
          active: false
        }
      ],
      businessList: [],
      allLoaded: false
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
    loadTop () {
      this.$refs.loadmore.onTopLoaded()
      this.axios.get(this.nextPageUrl).then(res => {
        console.log(res)
        console.log(this.businessList)
      })
    },
    loadBottom () {
      this.allLoaded = true// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
      this.axios.get(this.nextPageUrl).then(res => {
        this.businessList = this.businessList.concat(res.data)
      })
    },
    // loadmore
    /// ////////////////////
    handleTopChange (status) {
      this.topStatus = status
    },
    tabTap: function (index) {
      // 1级分类切换
      let tabNavs = document.querySelectorAll('.tab-nav>li')
      for (let i = 0, len = tabNavs.length; i < len; i++) {
        this.tabNavs[i].active = false
      }
      this.tabNavs[index].active = true
      this.getCategoryChildren(this.tabNavs[index].id) // 获取对应的二级分类
      this.getCategoryShop(this.tabNavs[index].id)
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
        // console.log(res)
        for (let i = 0, len = res.data.length; i < len; i++) {
          res.data[i].active = false
        }
        // res.data[0].active = true
        this.navs = res.data
        this.navs.unshift({title: '全部', active: true, id: 0})
      })
    },
    getCategoryShop: function (id) {
      // 分类下商店
      // this.HTTP_GetCategoryShop().then(res => {
      // id ? id = id : id = 0 // 0即为全部
      id ? id = '&cid=' + id : id = ''
      this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960' + id).then(res => {
      // this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960').then(res => {
        console.log(res)
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
        }

        console.log(this.nextPageUrl)
      })
    }
  },
  components: { ListInner, Other, 'mt-loadmore': Loadmore},
  mounted () {
    this.getCategory()
    this.getCategoryChildren()
    this.getCategoryShop()

    // window.addEventListener('scroll', function () {
    //   console.log(window.scrollY)
    // })
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
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
</style>
