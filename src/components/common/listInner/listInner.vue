<template>
    <div class="inner">
        <div class="business-img">
            <!-- <img :src="businessList.pic" /> -->
            <img :src="businessList.logo" />
        </div>
        <div class="business-info">
            <div class="til-row">
                <!-- <h4>{{businessList.name}}</h4> -->
                <h4>{{businessList.title}}</h4>
                <p>创客推荐</p>
            </div>
            <span class="mark">到店直换</span>
            <p class="tsc">{{businessList.genres_of_food}}</p>
            <div class="price-row">
                <div><span>{{businessList.score}}</span>分</div>
                <p>({{businessList.total_comments}}条评价)</p>
            </div>
        </div>
        <p>20Km</p>
    </div>
</template>
<script>
export default {
  props: ['businessList']
}
</script>
<style lang="less" scoped>
    .inner {
      display: flex;
      > p {
        font-size: 0.24rem;
        color: #666;
      }
      .business-img {
        width: 2.02rem;
        height: 2.02rem;
        margin-right: 0.32rem;
        overflow: hidden;
        img {
          height: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .business-info {
        flex: 1;
        overflow: hidden;
        .til-row {
          display: flex;
          align-items: center;
          height: 0.36rem;
          margin-bottom: 0.1rem;
          > p {
            font-size: 0.2rem;
            color: #333;
            width: 0.9rem;
            height: 0.3rem;
            text-align: center;
            line-height: 0.3rem;
            border-radius: 0.02rem;
            background: linear-gradient(left, #ffd05f, #ffb51d);
            border: 0.01rem solid #ffecb0;
          }
        }
        h4 {
          font-size: 0.36rem;
          color: #333;
          margin-right: 0.16rem;
        }
        .mark {
          font-size: 0.22rem;
          color: #fa443a;
          background: #fff5f4;
          border: 1px solid #fededc;
          width: 1.11rem;
          // height: .32rem;
          box-sizing: border-box;
          display: block;
          text-align: center;
          line-height: 0.32rem;
          border-radius: 0.04rem;
          margin-bottom: 0.42rem;
        }
        .tsc {
          font-size: 0.28rem;
          color: #666;
          margin-bottom: 0.1rem;
        }
        .price-row {
          overflow: hidden;
          font-size: 0.28rem;
          color: #666;
          > div {
            float: left;
            margin-right: 0.4rem;
            span {
              color: #f00;
              font-size: 0.3rem;
            }
          }
          > p {
            float: left;
          }
        }
      }
    }
</style>
