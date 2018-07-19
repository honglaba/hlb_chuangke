<template>
  <div>
            <my-header :Title="'我的评论'">
    </my-header>
    <div class="main2">
    <section class="top">
      <div class="img">
        <img :src="detailsGetter.logo" />
      </div>
      <p>{{detailsGetter.title}}</p>
    </section>
    <!-- <form action="/api/shop/comments?sid=1" method="POST"> -->
      <section class="comment-inner">
        <h3>本次服务</h3>
        <div class="score">
          <ul>
            <li v-for="(item,index) in scoreStar" :data-id="index+1" :class="{cur:item.active}" @click="score"></li>
          </ul>
          <p>{{scoreStar[scoreIndex].txt}}</p>
        </div>
        <textarea placeholder="分享商家消费体验给小伙伴吧！" v-model="myComment"></textarea>
        <!-- 上传部分先隐藏 -->
        <!-- <div class="upload-til">
          <span>晒图</span>
          <span>(可一次上传多张)</span>
        </div>
        <div class="upload-btn">
        </div> -->
      </section>
      <input type="button" value="提交评论" class="submit-btn" @click="submitComment"/>
    <!-- </form> -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      scoreStar: [
        {
          active: true,
          txt: '非常不满意'
        }, {
          active: true,
          txt: '不满意'
        }, {
          active: true,
          txt: '满意'
        }, {
          active: true,
          txt: '很满意'
        }, {
          active: true,
          txt: '非常满意'
        }
      ],
      scoreIndex: 4,
      myComment: ''
    }
  },
  methods: {
    ...mapActions(['HTTP_Comment']),
    score: function (e) {
      let index = e.target.getAttribute('data-id')
      this.myScore = index
      this.scoreIndex = index - 1
      for (let i = 0; i < 5; i++) {
        this.scoreStar[i].active = false
      }
      for (let i = 0; i < index; i++) {
        this.scoreStar[i].active = true
      }
    },
    submitComment: function () {
      console.log(this.myScore)
      let that = this
      // if (this.myComment) {
      //   this.axios.post('/api/shop/comments', {
      //     sid: that.detailsGetter.id,
      //     content: that.myComment,
      //     score: that.myScore
      //   }).then(res => {
      //     console.log(res)
      //     if (res.result_state == 'success') {
      //       alert('评论成功')
      //     } else {
      //       alert('评论失败')
      //     }
      //   })
      // }

      if (this.myComment) {
        this.HTTP_Comment({
          sid: that.detailsGetter.id,
          content: that.myComment,
          score: that.myScore
        }).then(res => {
          console.log(res)
          if (res.result_state == 'success') {
            this.$vux.toast.text('评论成功')
          } else {
            this.$vux.toast.text(res.message)
          }
          setTimeout(function () {
            that.$router.push({path: '/home/comment', query: {sid: that.detailsGetter.id}})
          }, 1000)
        })
      }
    }
  },
  computed: {
    ...mapGetters(['detailsGetter'])
  },
  mounted () {
    console.log('这里是' + this.detailsGetter.id)
  }
}
</script>
<style lang="less" scoped>
.top {
  padding: 0.2rem;
  background: #fff;
  margin-bottom: 0.2rem;
  display: flex;
  .img {
    width: 1rem;
    height: 1rem;
    overflow: hidden;
    margin-right: 0.1rem;
    > img {
      display: block;
      height: 1rem;
      margin: 0 auto;
    }
  }
  > p {
    font-size: 0.32rem;
  }
}
.comment-inner {
  padding: 0.5rem 0.3rem 0.3rem;
  background: #fff;
  text-align: center;
  margin-bottom: .33rem;
  h3{
    font-size: .32rem;
    margin-bottom: .35rem;
  }
  .score{
    margin-bottom: .28rem;
    ul{
      overflow: hidden;
      display: flex;
      justify-content: center;
      margin-bottom: .15rem;

      li{
        width: .48rem;
        height: .47rem;
        background: url(./images/scorestar1.png) no-repeat;
        background-size: 100%;
        margin:0 .15rem;
        &.cur{
          background: url(./images/scorestar2.png) no-repeat;
          background-size: 100%;
        }
      }
    }
    >p{
      color: #f5222d;
      font-size: .24rem;
    }
  }
  textarea{
    resize: none;
    border-color: #e6e6e6;
    width: 100%;
    height: 1.58rem;
    border-radius:.08rem;
    padding: .15rem;
    box-sizing: border-box;
    font-size: .24rem;
    margin-bottom: .3rem;
    outline: 0;
  }
  .upload-til{
    text-align: left;
    margin-bottom: .2rem;
    span:nth-child(1){
      color: #333;
      font-size: .3rem
    }
    span:nth-child(2){
      color: #999;
      font-size: .24rem
    }
  }
  .upload-btn{
    width: 1.6rem;
    height: 1.6rem;
    background: #fafafa url(./images/j.png) no-repeat center;
    background-size: .39rem;
    input{
      // margin-top: .58rem;
    }
  }
}
.submit-btn{
  width: 6.9rem;
  height: .9rem;
  border:0;
  outline: 0;
  color: #fff;
  font-size: .32rem;
  background: linear-gradient(to right,#ff7f32,#f5222d);
  margin: 0 auto;
  display: block;
  border-radius: .08rem;
}
</style>
