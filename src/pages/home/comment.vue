<template>
  <div>
            <my-header :Title="'评论'"></my-header>
            <div class="main2">
     <section class="comment-info">
       <div>评论{{commentList.length}}</div>
       <div class="score-part">
         <span>评分{{score}}</span>
         <div class="score">
          <ul>
            <li v-for="(item,index) in parseInt(score)" :key="index" class="cur"></li>
            <li v-for="(item,index) in (5-parseInt(score))" :key="index"></li>
          </ul>
         </div>
       </div>
     </section>
     <section class="comment-list">
       <ul>
         <!-- <li class="vux-1px-b">
           <div class="user-row">
             <div>
               <div class="user-img">
                 <img src="./images/home-like-img2.png" />
               </div>
               <div class="user-txt">
                 <p>最新潮流小创</p>
                 <div>
                   <span>2018-08-09</span>
                   <span>10:52</span>
                 </div>
               </div>
             </div>
             <div class="score">
              <ul>
                <li class="cur"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
           </div>
           <div class="comment-inner">因为有您的支持，我们才有今天，感谢您的每一个评价，小店都会努力让您满意！</div>
           <div class="type">
             <span>数量：2</span>
             <span>颜色：白色</span>
           </div>
         </li> -->

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
export default {
  data () {
    return {
      commentList: [],
      score: ''
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
    }
  },
  mounted () {
    this.getCommentList()
    this.getShopScore()
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
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
</style>
