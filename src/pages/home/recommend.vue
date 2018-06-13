<template>
    <div id="app">
        <x-header :left-options="{backText: ''}" title="精品推荐"></x-header>
        <section class="recommend-list">
            <ul>
                <router-link to="/home/details" tag="li" class="vux-1px-b">
                    <div class="recommend-img"><img src="./images/recommend-label-img1.png" /></div>
                    <div class="recommend-info">
                        <h3>康路宝k600-T煮茶器玻璃蒸茶器全自动普洱电热茶壶养生壶</h3>
                        <div class="mark-row">
                            <div>包邮</div>
                            <div></div>
                        </div>
                        <div class="price-row">
                            <p>￥980</p>
                            <p>已购3000+</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/home/details" tag="li" class="vux-1px-b">
                    <div class="recommend-img"><img src="./images/recommend-label-img2.png" /></div>
                    <div class="recommend-info">
                        <h3>康路宝k600-T煮茶器玻璃蒸茶器全自动普洱电热茶壶养生壶</h3>
                        <div class="mark-row">
                            <div>包邮</div>
                            <div></div>
                        </div>
                        <div class="price-row">
                            <p>￥980</p>
                            <p>已购3000+</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/home/details" tag="li" class="vux-1px-b">
                    <div class="recommend-img"><img src="./images/recommend-label-img3.png" /></div>
                    <div class="recommend-info">
                        <h3>康路宝k600-T煮茶器玻璃蒸茶器全自动普洱电热茶壶养生壶</h3>
                        <div class="mark-row">
                            <div>包邮</div>
                            <div></div>
                        </div>
                        <div class="price-row">
                            <p>￥980</p>
                            <p>已购3000+</p>
                        </div>
                    </div>
                </router-link>
            </ul>
        </section>
        <footerx></footerx>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
#app{
    padding-bottom: 1rem;
}
.recommend-list{
    background: #fff;
    >ul>li{
        display: flex;
        overflow: hidden;
        padding: .24rem  .4rem .24rem .08rem;
        .recommend-img{
            width: 2.48rem;
            height: 2.48rem;
            margin-right: .24rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .recommend-info{
            position: relative;
            flex:1;
            h3{
                font-size: .28rem;
                color:#333;
                line-height: .34rem;
                width: 100%;
                margin-bottom: .15rem;
            }
            .mark-row{
                display: flex;
                align-items: center;
                >div:nth-child(1){
                    width: .8rem;
                    height: .32rem;
                    border: 1px solid #fededc;
                    background:#fff5f4;
                    box-sizing: border-box;
                    font-size: .22rem;
                    text-align: center;
                    line-height: .3rem;
                    color:#fa443a;
                    border-radius:.04rem;
                    margin-right:.16rem;
                }
                >div:nth-child(2){
                    width:1.09rem;
                    height: .33rem;
                    background:url(./images/recommend-label-icon.png) no-repeat;
                    background-size: 100%;
                }
            }
            .price-row{
                position: absolute;
                width: 100%;
                bottom:.46rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                >p:nth-child(1){
                    font-size:.4rem;
                    color: #ff0516;
                }
                >p:nth-child(2){
                    font-size: .26rem;
                    color: #999;
                }
            }
        }
    }
}
</style>
