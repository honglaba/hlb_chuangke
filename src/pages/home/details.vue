<template>
    <div class="app">
        <Header></Header>
        <router-link to="#" class="buy-button">
            立即购买
        </router-link>
        <footerx></footerx>
        <section class="mask">
            <div class="inner">
                <h3>创客微卡提示！</h3>
                <h4>购买商品需要先申请办理创客微卡</h4>
                <div class="btn-row vux-1px-t">
                    <p class="vux-1px-r">取消</p>
                    <p>确定</p>                    
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
@import '~vux/src/styles/1px.less';
    .buy-button{
        position: fixed;
        bottom: 1.32rem;
        left: 50%;
        margin-left: -3rem;
        display: block;
        width: 6rem;
        height: .9rem;
        color: #fff;
        text-align: center;
        line-height: .9rem;
        background: url(./images/detailed-button-background.png) no-repeat;
        background-size:100%; 
        font-size: .32rem;
    }
    .mask{
        position: fixed;
        width:7.5rem;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        z-index: 9999;
        .inner{
            width: 5.74rem;
            height: 6.06rem;
            padding-top: 3.46rem;
            box-sizing: border-box;
            border-radius: .16rem;
            background:#fff url(./images/frame-inbetweening-img.png) no-repeat;
            background-size:5.74rem; 
            position: fixed;
            top: 50%;
            left: 50%;
            margin:-3.03rem 0 0 -2.87rem;
            h3{
                text-align: center;
                font-size: .32rem;
                color:#333;
                margin-bottom: .32rem;
                font-weight: normal;
            }
            h4{
                text-align: center;
                font-size: .32rem;
                color: #666;
                font-weight: normal;
            }
            .btn-row{
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                height: .84rem;
                >*{
                    flex: 1;
                    text-align: center;
                    line-height: .84rem;
                    font-size: .32rem;
                }
                >p:nth-child(1){
                    color: #666;
                }
                >p:nth-child(2){
                    color: #f60
                }
            }
        }
    }
</style>


