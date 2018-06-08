<template>
    <header class="y-flex y-ac">
        <div class="add y-flex y-ac">
            <router-link to="/home/location" tag="p">东莞</router-link>
            <span></span>
        </div>
        <div class="search-box y-flex y-ac">
            <span></span>
            <input type="text" placeholder="搜索附近的吃喝玩乐" />
        </div>
        <div class="screen"></div>
        <router-link class="message" to="/home/notice" tag="div"></router-link>
    </header>
</template>
<script>
export default {
     data(){
        return {}
    }
}
</script>
<style lang="less" scoped>
    header{
        height: .88rem;
        padding-left:.2rem;
        // margin-bottom: .4rem;
        background: #fff;
    }
    .add{
        margin-right: .2rem;
        p{
            font-size: .34rem;
            color: #333;
        }
        span{
            display: block;
            width: .24rem;
            height: .23rem;
            background: url(./images/home-top-icon1.png) no-repeat;
            background-size:100%; 
        }
    }
    .search-box{
        width: 4.44rem;
        height: .62rem;
        border-radius: .62rem;
        background: #f3f3f3;
        >span{
            display: block;
            width: .32rem;
            height: .32rem;
            background: url(./images/home-top-icon2.png) no-repeat;
            background-size:100%; 
            margin-left: .28rem;
            margin-right: .08rem;
        }
        >input{
            border:0;
            background: none;
            font-size:.28rem; 
            outline: none;
            columns: #666;
        }
    }
    .screen{
        width: .48rem;
        height: .48rem;
        background: url(./images/home-top-icon3.png) no-repeat;
        background-size:100%; 
        margin:0 .32rem;
    }
    .message{
        width: .48rem;
        height: .48rem;
        background: url(./images/home-top-icon4.png) no-repeat;
        background-size:100%; 
    }
</style>


