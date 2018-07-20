<template>
  <div id="food-content" :class="{'full-page':seen}">
    <transition name="fade">
    <div class="copy-block" v-if="seen">
      <Headerx @result='result'></Headerx>
      <section class="screen-row">
        <ul class="screen-tab">
          <li v-for="(tab, index) in screenTab" @click="screenTap(index)" :class="{cur:tab.active}" :key="index">
            <p>{{tab.name}}</p>
            <span></span>
          </li>
        </ul>
        <section class="screen-inner" @click.self="maskTap">
          <ul v-if="tabTemp==0" class="screen-li">
            <li v-for="(item, index) in category" :data-category="item.id" @click="switchCategory(index,$event)" :key="index" :class="{cur:item.active}">{{item.title}}</li>
          </ul>
          <div v-if="tabTemp==1" class="lr-part">
            <ul class="left-nav">
              <li v-for="(item,index) in region" :class="{cur:item.active}" @click="switchRegion(index)" :key="index">
                <span>{{item.region_name}}</span>
                <span></span>
              </li>
            </ul>
            <ul class="right-inner">
              <li v-for="(item,index) in areas" :class="{cur:item.active}" @click="switchAreas(index)" :key="index">
                {{item.region_name}}
              </li>
            </ul>
          </div>
          <ul v-if="tabTemp==2" class="screen-li sort">
            <li v-for="(item,index) in sortTxt" :class="{cur:item.active}" @click="sort(index)" :key="index">{{item.title}}</li>
          </ul>
        </section>
      </section>
    </div>
    </transition>
    <!-- 滚动吸顶部分 -->
    <section class="screen-row fixed vux-1px-b" v-if="tabFixed">
        <ul class="screen-tab">
          <li v-for="(tab, index) in screenTab" @click="bindTap(index)" :key="index">
            <p>{{tab.name}}</p>
            <span></span>
          </li>
        </ul>
      </section>
      <!-- end -->
    <div id="mescroll" class="mescroll">
      <Headerx @result='result'></Headerx>
      <div class="swiper-container banner-swiper" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item.img_path" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <section class="screen-row sp">
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
        <ul id="dataList">
          <router-link tag="li" :to="{path:'/home/shop/',query:{id:item.id}}" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
            <ListInner :businessList="item"></ListInner>
            <Other></Other>
          </router-link>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import Swiper from '@/../static/swiper/swiper-4.2.6.min.js'
import Other from '../../components/common/other/other'
import ListInner from '../../components/common/listInner/listInner'
import { mapActions } from 'vuex'
import MeScroll from '@/../static/js/mescroll.min.js'
export default {
  data () {
    return {
      businessList: [],
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
          name: '离我最近',
          active: false
        }
      ],
      tabTemp: null,
      category: [],
      shopList: [],
      nextPageUrl: null,
      tempArr: [],
      sortTxt: [
        // { title: '智能排序', active: true, by: 'total_customers', order: 'desc'},
        { title: '离我最近', active: true, by: 'distance', order: 'asc'},
        { title: '好评优先', active: false, by: 'score', order: 'desc' },
        { title: '人气最高', active: false, by: 'total_customers', order: 'desc'}
      ],
      region: [],
      areas: [],
      banner: [],
      cid: '', // 商家id
      areaId: '', // 街道id
      selectId: '', // 组装好的id
      tempId: '', // 缓存的id
      tabFixed: false,
      times: 0,
      sortIndex: 0
    }
  },
  components: { ListInner, Other },
  methods: {
    ...mapActions([
      'HTTP_GetCategory',
      'HTTP_GetCategoryShop',
      'HTTP_SwitchCategory'
    ]),
    // 滚动方法
    handleScroll: function () {
      let that = this
      let h = document.getElementsByClassName('banner-swiper')[0].offsetHeight + document.getElementsByTagName('header')[0].offsetHeight
      let mescroll = document.getElementById('mescroll')
      var scrollTop = mescroll.pageYOffset || mescroll.scrollTop
      if (scrollTop >= h) {
        that.tabFixed = true
      } else {
        that.tabFixed = false
      }
    },
    result: function (result) {
      // 从子Headerx组件回传的值
      this.businessList = result
    },
    getBanner: function () {
      this.axios.get('/api/banner?key=nearby').then(res => {
        this.banner = res.data
      })
    },
    bindTap: function (index) {
      // 模拟绑定点击
      this.screenTap(index)
    },
    screenTap: function (index) {
      // 顶部筛选切换
      // console.log(this.$refs.myscroller.scroller.__scrollTop)
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
    maskTap: function () {
      // 遮罩层点击
      this.seen = false
      this.tabTemp = null
      // let screenTab = document.querySelectorAll('.screen-tab>li')
      // for (let i = 0, len = screenTab.length; i < len; i++) {
      //   this.screenTab[i].active = false
      // }
    },
    getCategory: function () {
      // 分类
      this.axios.get('/api/shop-category?parent=' + this.$route.query.cid).then(res => {
        for (let i = 0, len = res.data.length; i < len; i++) {
          res.data[i].active = false
        }
        this.category = res.data
        this.category.unshift({ title: '全部', id: this.$route.query.cid, active: true })
      })
      // this.HTTP_GetCategory().then(res => {
      //   this.category = res.data
      // })
    },
    getCategoryShop: function (id) { // 已使用mescroll加载 该方法废弃
      // 分类下商店
      // this.HTTP_GetCategoryShop().then(res => {
      id ? (id = id) : (id = '&cid=' + this.$route.query.cid)
      this.axios
        .get(
          '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&cid=' +
            id
        )
        .then(res => {
          console.log(res)
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
        })
    },
    switchCategory: function (index, event) {
      // 切换分类
      // let categoryId = event.target.getAttribute('data-category')
      // this.getCategoryShop('&cid=' + categoryId)

      this.cid = this.category[index].id
      // 点击改变样式
      for (let i = 0, len = this.category.length; i < len; i++) {
        this.category[i].active = false
      }

      // if (index == 0) { // 如果是选择全部则‘附近商家’一栏重置 清空id
      //   this.getArea()
      //   // this.screenTab[1] = {
      //   //   name: '附近商家',
      //   //   active: false}
      //   this.selectId = this.$route.query.cid
      //   this.cid = this.$route.query.cid
      //   this.areaId = ''
      // } else {
      //   if (this.areaId == '') { // 判断是否有其他筛选条件
      //     this.selectId = this.cid
      //   } else {
      //     this.selectId = this.cid + '&area_id=' + this.areaId
      //   }
      // }

      if (index == 0) { this.cid = this.$route.query.cid }
      if (this.areaId == '') {
        this.selectId = this.cid
      } else {
        this.selectId = this.cid + '&area_id=' + this.areaId
      }

      this.category[index].active = true
      this.screenTab[0].name = this.category[index].title
      this.maskTap() // 相同逻辑收起下拉

      if (this.selectId != this.tempId) { // 若切换分类才触发重置
        this.businessList = [] // 切换分类时数据清空 否则一直叠加
        this.mescroll.resetUpScroll()
      }
    },
    // getRegion: function () { // 附近筛选
    //   this.axios.get('/api/region?parent=79').then(res => { // 79是东莞
    //     // console.log(res.data)
    //     this.areas = res.data
    //   })
    // },
    getArea: function () {
      this.axios
        .get('/api/areas?latitude=23.0148260&longitude=113.7451960')
        .then(res => {
          console.log(res)
          for (let i = 0, len = res.data.length; i < len; i++) {
            res.data[i].active = false
          }
          for (let j = 0, len = res.data[0].children.length; j < len; j++) {
            res.data[0].children[j].active = false
          }
          // res.data[0].active = true
          this.region = res.data
          // this.areas = res.data[0].children // 默认首个街道
          this.region.unshift({region_name: '全部', active: true})
        })
    },
    sort: function (index) {
      // 排序
      for (let i = 0, len = this.sortTxt.length; i < len; i++) {
        this.sortTxt[i].active = false
      }
      this.sortTxt[index].active = true
      this.screenTab[2].name = this.sortTxt[index].title
      this.maskTap()
      if (index != this.sortIndex) {
        this.times = 0
        this.sortIndex = index
        this.businessList = [] // 切换分类时数据清空 否则一直叠加
        this.mescroll.resetUpScroll()
      }
    },
    switchRegion: function (index) {
      // 切换区
      for (let i = 0, len = this.region.length; i < len; i++) {
        this.region[i].active = false
      }
      this.region[index].active = true
      if (index > 0) {
        this.axios
          .get('/api/areas?latitude=23.0148260&longitude=113.7451960')
          .then(res => {
            this.areas = res.data[index - 1].children
            this.areas.unshift({ region_name: '全部', active: true, id: this.region[index].id})
            console.log(this.areas)
          })
      } else {
        this.areas = []
        this.screenTab[1] = {
          name: '附近商家',
          active: false
        }
        this.selectId = this.cid
        this.businessList = [] // 切换分类时数据清空 否则一直叠加
        this.mescroll.resetUpScroll()
        this.maskTap()
      }
    },
    switchAreas: function (index) {
      // 切换街道
      for (let i = 0, len = this.areas.length; i < len; i++) {
        this.areas[i].active = false
      }
      this.areas[index].active = true
      this.screenTab[1].name = this.areas[index].region_name
      // this.getCategoryShop('&area_id=' + this.areas[index].id + '&cid=' + this.cid)
      this.areaId = this.areas[index].id
      this.selectId = this.cid + '&area_id=' + this.areas[index].id
      if (this.selectId != this.tempId) { // 若切换分类才触发重置
        this.businessList = [] // 切换分类时数据清空 否则一直叠加
        this.mescroll.resetUpScroll()
      }
      this.maskTap() // 相同逻辑收起下拉
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
      url = '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&page=' + this.times + id + '&order=' + this.sortTxt[this.sortIndex].order + '&by=' + this.sortTxt[this.sortIndex].by

      this.axios.get(url).then(res => {
        this.page = res
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
              // alert('点击了去逛逛按钮')
              self.$router.push({path: '/'})
            }
          }
        }
      })
    },
    test: function () {
      console.log(this.$refs.myscroller.scroller.__scrollTop)
    }
  },
  created () {
    this.getBanner()
  },
  mounted () {
    this.getCategory()
    // this.getCategoryShop()
    // this.getRegion()
    this.getArea()
    this.selectId = this.$route.query.cid
    this.cid = this.$route.query.cid
    this.tempId = this.$route.query.cid// 将默认分类值存储
    // console.log(this.$refs.myscroller.scroller.__scrollTop)
    // 监听滚动事件
    document.getElementById('mescroll').addEventListener('scroll', this.handleScroll)
    this.mescrollInstantiation()
  },
  updated () {
    /* eslint-disable */
    new Swiper(".banner-swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }

}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
@import url("../../../static/swiper/swiper-4.2.6.min.css");
@import url("../../../static/css/mescroll.min.css");
.full-page{
  height: 100vh;
  overflow: hidden;
}
#food-content {
  .mescroll {
    position: fixed;
    top: 0;
    bottom: 0;
    height: auto;
    width: 7.5rem;
  }
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
  .screen-row.sp{
    z-index: 0;
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
        overflow: hidden;
        > span {
          border-top: 0.08rem solid #888;
          border-left: 0.07rem solid #fff;
          border-right: 0.07rem solid #fff;
        }
        > p {
          color: #333;
          margin-right: 0.07rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
      height: calc(100vh - 1.68rem);
      background: rgba(0, 0, 0, 0.5);
      z-index: 99;
      > ul {
        background: #fff;
        padding-left: 0.6rem;
        box-sizing: border-box;
        max-height: 70%;
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
      .lr-part {
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
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .cur {
            color: #f60;
            display: flex;
            align-items: center;
            > span:nth-child(1) {
              margin-right: 0.08rem;
            }
            > span:nth-child(2) {
              display: block;
              width: 0.1rem;
              height: 0.19rem;
              background: url(./images/icon_opt_into.png) no-repeat;
              background-size: 0.1rem;
            }
          }
        }
        .left-nav {
          width: 3.05rem;
        }
        .right-inner {
          flex: 1;
        }
      }
    }
  }
  .business-list {
    background: #fff;
    padding: 0 0.3rem;
    // min-height: 100vh;
    > ul > li {
      padding-top: 0.32rem;
    }
  }
  .copy-block {
    position: relative;
    z-index: 999;
  }
}
.screen-row.fixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 7.5rem;
  z-index: 888 !important; 
}
</style>
