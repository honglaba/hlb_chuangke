<template>
  <div id="food-content" >
    <div id="mescroll" class="mescroll">
      <Headerx @result='result'></Headerx>
      <section class="business-list">
        <ul>
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
import Other from '../../components/common/other/other'
import ListInner from '../../components/common/listInner/listInner'
import { mapActions } from 'vuex'
import MeScroll from '@/../static/js/mescroll.min.js'
export default {
  data () {
    return {
      businessList: [],
      tabTemp: null,
      times: 0,
      keyWord: ''
    }
  },
  components: { ListInner, Other },
  methods: {
    ...mapActions([
      'HTTP_GetCategory',
      'HTTP_GetCategoryShop',
      'HTTP_SwitchCategory'
    ]),
    result: function (result) {
      // 从子Headerx组件回传的值
      this.businessList = result
    },
    // getRegion: function () { // 附近筛选
    //   this.axios.get('/api/region?parent=79').then(res => { // 79是东莞
    //     // console.log(res.data)
    //     this.areas = res.data
    //   })
    // },
    /* 联网加载列表数据* */
    getListDataFromNet: function (pageNum, pageSize, successCallback, errorCallback) {
      let that = this
      let url
      this.times++ // 以加载次数充当页数
      // url = '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&page=' + this.times + id + '&order=' + this.sortTxt[this.sortIndex].order + '&by=' + this.sortTxt[this.sortIndex].by
      url = '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&order=asc&by=distance&title=' + this.$route.query.title + '&page=' + this.times
      this.axios.get(url).then(res => {
        this.page = res
        console.log('数据个数' + res.total)
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
      })
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
          }
          // empty: { // 配置列表无任何数据的提示
          //   warpId: 'dataList',
          //   icon: '../../../static/images/mescroll-empty.png',
          //   tip: '亲,暂无相关数据哦~',
          //   btntext: '去逛逛 >',
          //   btnClick: function () {
          //     alert('点击了去逛逛按钮')
          //   }
          // }
        }
      })
    }
  },
  created () {
  },
  mounted () {
    this.keyWord = this.$route.query.title
    this.mescrollInstantiation()
  },
  updated () {
  }

}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
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
    margin-top: .1rem;
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
