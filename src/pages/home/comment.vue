<template>
  <div class="comment-page">
    <my-header :Title="'评论'"></my-header>
    <div id="mescroll" class="mescroll">

     <section class="comment-info">
       <div>评论{{commentList.length}}</div>
       <div class="score-part">
         <span>评分{{score}}</span>
         <div class="score">
          <ul>
            <li v-for="(item,index) in parseInt(score)"  class="cur"></li>
            <li v-for="(item,index) in (5-parseInt(score))"></li>
          </ul>
         </div>
       </div>
     </section>

     <section class="comment-list">
       <ul id='dataList'>
        <li class="vux-1px-b" v-for="(item,index) in commentList" :key="index">
           <div class="user-row">
             <div>
               <div class="user-img">
                 <img :src="item.userInfo.headerimgurl" />
               </div>
               <div class="user-txt">
                 <p>{{item.userInfo.nickname||'未知用户'}}</p>
                 <div>
                   <span>{{item.created_at}}</span>
                 </div>
               </div>
             </div>
             <div class="score">
              <ul>
                <li v-for='(star,index) in parseInt(item.score)' class="cur"></li>
                <li v-for='(star,index) in (5-parseInt(item.score))'></li>
              </ul>
            </div>
           </div>
           <div class="comment-inner">{{item.content}}</div>
           <!-- 暂时隐藏 -->
           <!-- <div class="type">
             <span>数量：2</span>
             <span>颜色：白色</span>
           </div> -->
         </li>
       </ul>
     </section>
    </div>
  </div>
</template>
<script>
import MeScroll from '@/../static/js/mescroll.min.js'
export default {
  data () {
    return {
      commentList: [],
      score: 0,
      times: 0
    }
  },
  methods: {
    getCommentList () {
      this.axios.get('/api/shop/comments?sid=' + this.$route.query.sid).then(res => {
        this.commentList = res.data
      })
    },
    getShopScore () {
      this.axios.get('/api/shop?id=' + this.$route.query.sid).then(res => {
        this.score = res.data.score
      })
    },
    /* 联网加载列表数据* */
    getListDataFromNet: function (pageNum, pageSize, successCallback, errorCallback) {
      let url
      this.times++ // 以加载次数充当页数
      // url = '/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&page=' + this.times + id + '&order=' + this.sortTxt[this.sortIndex].order + '&by=' + this.sortTxt[this.sortIndex].by
      url = '/api/shop/comments?sid=' + this.$route.query.sid + '&page=' + this.times
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
        // if (page.num == 1) self.commentList = []

        // 更新列表数据
        self.commentList = self.commentList.concat(curPageData)
        // 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        // mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        console.log('page.num=' + page.num + ', page.size=' + page.size + ', curPageData.length=' + curPageData.length + ', self.pdlist.length==' + self.commentList.length)

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
          },
          empty: { // 配置列表无任何数据的提示
            warpId: 'dataList',
            icon: '../../../static/images/nocomment.png',
            tip: '亲，还没有相关的数据',
            btntext: '去逛逛 >',
            btnClick: function () {
              alert('点击了去逛逛按钮')
            }
          }
        }
      })
    }
  },
  mounted () {
    // this.getCommentList()

    this.getShopScore()
    this.mescrollInstantiation()
  },
  updated () {

  }
}
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
@import url("../../../static/css/mescroll.min.css");
.comment-page{
.mescroll {
    position: fixed;
    top: .88rem;
    bottom: 0;
    height: auto;
    width: 7.5rem;
    overflow-y: auto;
  }
  .comment-info{
    margin-bottom: .2rem;
    height: 1rem;
    background: #fff;
    padding:0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:nth-child(1){
      font-size: .3rem;
    }
    .score-part{
      display: flex;
      align-items: center;
      >span:nth-child(1){
        font-size: .3rem;
        color: #f5222d;
        margin-right: .2rem;
      }
      .score{
          ul{
            overflow: hidden;
            display: flex;
            justify-content: center;

            li{
              width: .22rem;
              height: .21rem;
              background: url(./images/scorestar1.png) no-repeat;
              background-size: 100%;
              margin:0 .05rem;
              &.cur{
                background: url(./images/scorestar2.png) no-repeat;
                background-size: 100%;
              }
            }
          }
        }
    }
  }
  .comment-list{
    >ul{
      >li{
        background:#fff;
        padding: .3rem .2rem .2rem;
        .user-row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: .1rem;
          >div:nth-child(1){
            display: flex;
            .user-img{
              width: .6rem;
              height: .6rem;
              overflow: hidden;
              border-radius: 50%;
              margin-right: .08rem;
              background: #ccc;
              img{
                display: block;
                height: .6rem;
                margin: 0 auto;
              }
            }
            .user-txt{
              >p{
                font-size: .24rem;
              }
              >div{
                color: #999;
                font-size: .2rem;
              }
            }
          }
          .score{
          ul{
            overflow: hidden;
            display: flex;
            justify-content: center;

            li{
              width: .22rem;
              height: .21rem;
              background: url(./images/scorestar1.png) no-repeat;
              background-size: 100%;
              margin:0 .05rem;
              &.cur{
                background: url(./images/scorestar2.png) no-repeat;
                background-size: 100%;
              }
            }
          }
        }
        }
        .comment-inner{
          line-height: .4rem;
          font-size: .24rem;
        }
        .type{
          display: flex;
          justify-content: flex-end;
          color: #999;
          font-size: .24rem;
          >span{
            margin-left: .25rem;
          }
        }
      }
    }
  }
}
</style>
