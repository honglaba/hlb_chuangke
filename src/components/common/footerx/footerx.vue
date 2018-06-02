<template>
    <footer class="y-flex y-ac vux-1px-t">
        <a href="#" class="flex1 cur">
            <span class="nav-ico type3"></span>
            <p>首页</p>
        </a>
         <a href="#" class="flex1">
            <span class="nav-ico type2"></span>
            <p>附近</p>
        </a>
         <a href="#" class="flex1">
            <span class="nav-ico type1"></span>
            <p>创客微卡</p>
        </a>
         <a href="#" class="flex1">
            <span class="nav-ico type4"></span>
            <p>我的</p>
        </a>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    footer{
        height:1rem ;
        position: fixed !important;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 100;
        font-size: .24rem;
        color:#9a9795;
        text-align: center;
        .nav-ico{
            display: block;
            width: .44rem;
            height: .44rem;
            background: url(./images/navico.png) no-repeat;
            background-size:1.76rem; 
            margin: 0 auto;
            margin-bottom: .05rem
        }
        .nav-ico.type1{
            background-position:0 -.44rem; 
        }
         .nav-ico.type2{
            background-position:-.44rem -.44rem; 
        }
         .nav-ico.type3{
            background-position:-.88rem -.44rem; 
        }
         .nav-ico.type4{
            background-position:-1.32rem -.44rem; 
        }
        a{
            color: #9a9795
        }
        .cur{
            color: #f60;
            .nav-ico.type1{
                background-position:0 0; 
            }
            .nav-ico.type2{
                background-position:-.44rem 0; 
            }
            .nav-ico.type3{
                background-position:-.88rem 0; 
            }
            .nav-ico.type4{
                background-position:-1.32rem 0; 
            }
        }
    }
</style>


