<template>
  <div>
    <div class="shop-index mescroll" id="mescroll">
      <div>
        <Headerx @result='result'></Headerx>
        <section class="banner">
          <p>今日推荐</p>
          <img src="./images/nearby-banner.png" />
        </section>
        <section class="business-list">
          <section class="tab">
            <div class="slide-btn" :class="{cur:slideTap}" @click="slideTap=!slideTap"></div>
            <tab bar-active-color="#f60" active-color="#f60" custom-bar-width=".34rem">
              <tab-item v-for="(tab, index) in tabNavs"  :selected="index === fixIndex" :key="index" @on-item-click="tabTap(index)" @click.native="fixIndex=index"> {{tab.title}}</tab-item>
            </tab>
            <div class="tab-con" v-show="slideTap">
              <ul>
                <li v-for="(nav,index) in navs" @click="navTap(index)" :class="{cur:nav.active}" :key="index">
                  {{nav.title}}
                </li>
              </ul>
            </div>
          </section>
          <ul id="dataList" class="data-list">
            <router-link tag="li" :to="{path:'home/shop/',query:{id:item.id}}" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
              <ListInner :businessList="item"></ListInner>
              <Other></Other>
            </router-link>
          </ul>
        </section>
      </div>
  </div>
  <!-- mescroll外的固定定位  解决苹果跟随抖动的bug -->
  <transition name="fade">
    <section class="tab sp" v-if="tabFixed">
          <div class="slide-btn" :class="{cur:slideTap}"  @click="slideTap=!slideTap"></div>
          <tab bar-active-color="#f60" active-color="#f60" custom-bar-width=".34rem">
            <tab-item v-for="(tab, index) in tabNavs"  :selected="index === fixIndex" :key="index" @on-item-click="tabTap(index)" @click.native="fixIndex=index"> {{tab.title}}</tab-item>
          </tab>
          <div class="tab-con" v-show="slideTap">
            <ul>
              <li v-for="(nav,index) in navs" @click="navTap(index)" :class="{cur:nav.active}" :key="index">
                {{nav.title}}
              </li>
            </ul>
          </div>
        </section>
      </transition>
        <!-- end -->
  <Footerx></Footerx>
  </div>
</template>
<script>
import ListInner from '../../components/common/listInner/listInner'
import Other from '../../components/common/other/other'
import { Loadmore } from 'mint-ui'
import { Tab, TabItem } from 'vux'
import MeScroll from '@/../static/js/mescroll.min.js'
export default {
  data () {
    return {
      transitionName: '',
      tabNavs: [],
      navs: [],
      businessList: [],
      allLoaded: false,
      tabFixed: false,
      selectId: '',
      nextPageUrl: null,
      fixIndex: 0,
      times: 0, // 加载次数
      tempId: 1, // 旧id,默认为1
      page: '',
      slideTap: true
    }
  },
  methods: {
    // 检测高度
    getScrollTop: function () {
      let mescroll = document.getElementById('mescroll')
      let scrollTop = mescroll.pageYOffset || mescroll.scrollTop
      sessionStorage.setItem('shopPageScrollTo', scrollTop)
      console.log('离开')
      // this.tabFixed=false
    },
    // 滚动方法
    handleScroll () {
      let that = this
      let h = document.getElementsByClassName('banner')[0].offsetHeight + document.getElementsByTagName('header')[0].offsetHeight
      let mescroll = document.getElementById('mescroll')
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var scrollTop = mescroll.pageYOffset || mescroll.scrollTop
      // console.log(scrollTop, h)
      if (scrollTop >= h) {
        that.tabFixed = true
        // that.slideTap = false
      } else {
        that.tabFixed = false
        // that.slideTap = true
      }
    },
    result: function (result) {
      // 从子Headerx组件回传的值
      this.businessList = result
    },
    tabTap: function (index) {
      // 1级分类切换
      let that = this
      // let tabNavs = document.querySelectorAll('.tab-nav>li')
      for (let i = 0, len = this.tabNavs.length; i < len; i++) {
        this.tabNavs[i].active = false
      }
      this.tabNavs[index].active = true
      this.selectId = this.tabNavs[index].id// 改变此id以传入mescroll
      this.getCategoryChildren(this.tabNavs[index].id) // 获取对应的二级分类
      // 自写的重置列表数据 不与mescorll联动 有bug
      if (this.selectId != this.tempId) { // 若切换分类才触发重置
        // mescroll自带重置列表数据
        this.businessList = [] // 切换分类时数据清空 否则一直叠加
        this.mescroll.resetUpScroll()
      }
    },
    navTap: function (index) {
      // 2级分类切换
      for (let i = 0, len = this.navs.length; i < len; i++) {
        this.navs[i].active = false
      }
      this.navs[index].active = true
      this.selectId = this.navs[index].id// 改变此id以传入mescroll
      // 自写的重置列表数据 不与mescorll联动 有bug
      // this.getCategoryShop(this.navs[index].id)
      if (this.selectId != this.tempId) { // 若切换分类才触发重置
      // mescroll自带重置列表数据
        this.businessList = [] // 切换分类时数据清空 否则一直叠加
        this.mescroll.resetUpScroll()
      }
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
    getCategoryShop: function (id) { // 已使用mescroll加载 该方法废弃
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
            res.data[i].distance = res.data[i].distance / 1000 + 'km'
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
    },
    /* 联网加载列表数据* */
    getListDataFromNet: function (pageNum, pageSize, successCallback, errorCallback, id) {
      let that = this
      let url
      this.times++ // 以加载次数充当页数
      if (this.tempId != id) { // 若传入的id有变化 即判断为切换分类 页数初始化为1
        this.times = 1
      }
      this.tempId = id// 将id缓存
      id == '' ? id = '&cid=1' : id = '&cid=' + id// 若id为空则判断为从别的路由进入，默认id为1；若不为空则判断为点击分类切换数据，id为点击的id
      url = '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&page=' + this.times + id

      this.axios.get(url).then(res => {
        this.page = res
        console.log(res.data)
        console.log('数据个数' + res.total)
        // 设置下一页 由于加载方法使用以总数据量的方式  所以此处暂时无用
        if (res.next_page_url) {
          this.nextPageUrl = res.next_page_url.split('http://api.hlbck.com').join('') + '&latitude=23.0148260&longitude=113.7451960' + id
        } else {
          this.nextPageUrl = null
        }
        // 删除data中多余的项 根据返回数据使用 已无用
        // delete res.data.result_state
        // delete res.data.return_state
        for (let i in res.data) { // 距离格式
          if (res.data[i].distance >= 1000) {
            res.data[i].distance = (res.data[i].distance / 1000).toFixed(1) + 'Km'
          } else {
            res.data[i].distance = res.data[i].distance + 'm'
          }
        }
        successCallback && successCallback(res.data)
      })
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback: function (page) {
      // 联网加载数据
      var self = this
      self.getListDataFromNet(page.num, page.size, function (curPageData) {
        // curPageData = [] //打开本行注释,可演示列表无任何数据empty的配置

        // 如果是第一页需手动制空列表 (代替clearId和clearEmptyId的配置)
        // if (page.num == 1) self.businessList = []

        // 更新列表数据
        self.businessList = self.businessList.concat(curPageData)
        // 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        // mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        console.log('page.num=' + page.num + ', page.size=' + page.size + ', curPageData.length=' + curPageData.length + ', self.pdlist.length==' + self.businessList.length)

        // 方法一(推荐): 后台接口有返回列表的总页数 totalPage
        // self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

        // 方法二(推荐): 后台接口有返回列表的总数据量 totalSize
        // self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
        self.mescroll.endBySize(curPageData.length, self.page.total)

        // 方法三(推荐): 您有其他方式知道是否有下一页 hasNext
        // self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
        // self.mescroll.endSuccess(curPageData.length, self.nextPageUrl != null)
        // 方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
        // self.mescroll.endSuccess(curPageData.length)
      }, function () {
        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        self.mescroll.endErr()
      }, this.selectId)
    },
    mescrollInstantiation: function () {
      // 创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      // 解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      var self = this
      self.mescroll = null
      self.mescroll = new MeScroll('mescroll', { // 请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
        down: {
          // callback: self.refresh
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
            // offset: 1000
          },
          empty: { // 配置列表无任何数据的提示
            warpId: 'dataList',
            icon: '../../../static/images/mescroll-empty.png',
            tip: '亲,暂无相关数据哦~',
            btntext: '去逛逛 >',
            btnClick: function () {
              alert('点击了去逛逛按钮')
            }
          }
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('进入')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('读取')
    next()
  },
  beforeRouteLeave (to, from, next) {
    from.meta.keepAlive = true
    next()
    this.getScrollTop()
  },

  components: { ListInner, Other, Tab, TabItem },
  mounted () {
    this.getCategory()
    this.getCategoryChildren()
    // this.getCategoryShop()
    // this.getHeight()
    // 监听滚动事件
    document.getElementById('mescroll').addEventListener('scroll', this.handleScroll)
    /// ////////////
    this.mescrollInstantiation()
  }
}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
@import url("../../../static/css/mescroll.min.css");
.mescroll {
    position: fixed;
    top: 0;
    bottom: 1rem;
    height: auto;
    width: 7.5rem;
}
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
.tab{
  position: relative;
  .slide-btn{
    width: .8rem;
    height: .78rem;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff url('./images/down-arr.png') no-repeat center;
    background-size:.27rem;
    z-index: 999;
    box-shadow: 0 -0.05rem 0.2rem rgba(0, 0, 0, 0.3);
    &.cur{
       transform:rotate(180deg);
        box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.3);
    }
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
  > ul {
    padding: 0 0.3rem;
    > li {
    padding-top: 0.32rem;
  }
}

}
}
//mesroll外的tab样式
.tab.sp{
  position: fixed ;
  width: 7.5rem;
  top: 0;
  left: 50%;
  margin-left: -3.75rem;
  z-index: 999;
  .slide-btn{
    width: .8rem;
    height: .78rem;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff url('./images/down-arr.png') no-repeat center;
    background-size:.27rem;
    z-index: 999;
    box-shadow: 0 -0.05rem 0.2rem rgba(0, 0, 0, 0.3);
    &.cur{
       transform:rotate(180deg);
        box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.3);
    }
  }
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
}
</style>
