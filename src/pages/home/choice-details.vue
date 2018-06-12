<template>
  <div id="app">
    <section class="banner-box">
      <img src="./images/choicepic.png">
      <div class="top-row">
        <span class="back"></span>
        <div class="y-flex y-ac">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="bottom-row">
        <div class="y-flex y-ac">
          <span></span>
          <p>店铺详情</p>
        </div>
        <div>22张</div>
      </div>
    </section>

    <section class="info-box">
      <div class="til-row">
        <div>
          <h3>大岗仙庙烧鸡</h3>
          <div>评分<span class="c60">5.0</span></div>
        </div>
        <div class="">

        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="less" scoped>
  .banner-box{
    width: 7.5rem;
    height: 4rem;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    .top-row{
      position: absolute;
      top: .4rem;
      left: 0;
      width: 100%;
      height: .46rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left:.3rem;
      padding-right:.35rem;
      box-sizing: border-box;
      >span{
        width: .2rem;
        height: .34rem;
        background: url(./images/icon_details_ruturn.png) no-repeat;
        background-size:100%;
      }
      >div{
          >span:nth-child(1){
            width: .46rem;
            height: .46rem;
            background: url(./images/icon_details_Sweep.png) no-repeat;
            background-size:100%;
            margin-right: .32rem;
          }
          >span:nth-child(2){
            width: .48rem;
            height: .12rem;
            background: url(./images/icon_details_more.png) no-repeat;
            background-size:100%;
          }
        }
    }
    .bottom-row{
      position: absolute;
      width: 100%;
      height: .69rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: .15rem;
      padding: 0 .26rem;
      box-sizing: border-box;
      >div:nth-child(1){
        color: #fff;
        font-size: .28rem;
        >span{
          width: .68rem;
          height: .69rem;
          background: url(./images/icon_details_shop.png) no-repeat;
          background-size:100%;
          margin-right: .16rem;
        }
      }
      >div:nth-child(2){
        width: 1.16rem;
        height: .48rem;
        background: rgba(0,0,0,.5);
        border-radius: .24rem;
        text-align: center;
        line-height: .48rem;
        color:#fff;
        font-size: .24rem;
      }
    }
  }
  .info-box{
    background: #fff;
  }
</style>
