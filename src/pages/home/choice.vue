<template>
  <div id="app1">
    <x-header :left-options="{backText: ''}" title="精选商家"></x-header>
    <section class="banner">
      <div class="border-cross">
        <div class="inner">
           <span></span>
           <p>正在进行 快去抢购</p>
        </div>
      </div>
    </section>
    <ul class="choice-list">
      <router-link tag="li" to="/home/shop">
        <img src="./images/banner1_shop_tab.png" />
        <div class="info">
          <div class="inner-box">
            <div class="logo"></div>
            <div class="vux-1px-t til">澄阳湖大闸蟹</div>
            <div class="time-row">
              <p>距结束</p>
              <p class="time-num">23</p>
              <p>:</p>
              <p class="time-num">59</p>
              <p>:</p>
              <p class="time-num">07</p>
            </div>
          </div>
        </div>
      </router-link>
      <router-link tag="li" to="/home/shop">
        <img src="./images/banner2_shop_tab.png" />
        <div class="info">
          <div class="inner-box">
            <div class="logo"></div>
            <div class="vux-1px-t til">蜂蜜柠檬世家</div>
            <div class="time-row">
              <p>距结束</p>
              <p class="time-num">23</p>
              <p>:</p>
              <p class="time-num">59</p>
              <p>:</p>
              <p class="time-num">07</p>
            </div>
          </div>
        </div>
      </router-link>
      <router-link tag="li" to="/home/shop">
        <img src="./images/banner3_shop_tab.png" />
        <div class="info">
          <div class="inner-box">
            <div class="logo"></div>
            <div class="vux-1px-t til">老北京面馆</div>
            <div class="time-row">
              <p>距结束</p>
              <p class="time-num">23</p>
              <p>:</p>
              <p class="time-num">59</p>
              <p>:</p>
              <p class="time-num">07</p>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
#app1{
  background: #17191e;
  padding-bottom: .1rem;
}
.banner{
  position: relative;
  width: 7.5rem;
  height: 3.38rem;
  background: url(./images/banner_shop_top.png) no-repeat;
  background-size:100%;
  .border-cross{
    border-top: 1px solid #323232;
    width: 6.3rem;
    position: absolute;
    bottom: .24rem;
    left: 50%;
    margin-left: -3.15rem;
    .inner{
      width: 3rem;
      background: #17191e;
      color: #f60;
      font-size: .24rem;
      height: .24rem;
      position: absolute;
      top: -.12rem;
      left: 50%;
      margin-left: -1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      >span{
        display: block;
        width: .37rem;
        height: .36rem;
        background: url(./images/icon_shop_lineNew.png) no-repeat;
        background-size:100%;
        margin-right: .16rem;
      }

    }
  }
}
.choice-list{
  padding: 0 .2rem;
  padding-top: .16rem;
  >li{
    width: 100%;
    height: 2.7rem;
    position: relative;
    border-radius: .16rem;
    overflow: hidden;
    margin-bottom: .2rem;
    >img{
      width: 100%;
      height: 100%;;
    }
    >.info{
      position: absolute;
      top: .16rem;
      left: .3rem;
      width: 3.28rem;
      height: 2.3rem;
      border: .02rem solid #fff;
      box-sizing: border-box;
      padding: .04rem;
      border-radius: .08rem;
      >.inner-box{
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.97);
        border-radius: .08rem;
        padding: 0 .27rem;
        padding-top: .1rem;
        box-sizing: border-box;
        .logo{
          width: .61rem;
          height: .63rem;
          background: url(./images/logo_shop_photo.png) no-repeat;
          background-size:100%;
          margin: 0 auto;
          margin-bottom: .08rem;
        }
        .til{
          padding-top: .16rem;
          font-size: .32rem;
          text-align: center;
          margin-bottom: .16rem;
        }
        .time-row{
          width: 2.27rem;
          height: .46rem;
          background: url(./images/time_shop_bj.png) no-repeat;
          background-size:100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          >:nth-child(1){
            margin-right: .07rem;
          }
          >p{
            color: #fff;
            font-size: .24rem;
          }
          .time-num{
            width: .34rem;
            height: .3rem;
            // background: url(./images/timeNumber_shop_bj.png) no-repeat;
            background: #fff;
            background-size:100%;
            font-size: .22rem;
            color: #000;
            text-align: center;
            line-height: .3rem;
            border-radius: .04rem;
            box-shadow: 0 .03rem .1rem rgba(0,0,0,.5);
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
          }
        }
      }
    }
  }
}
</style>
