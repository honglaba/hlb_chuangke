<template>
    <div>
        <ul class="tab-nav">
            <router-link class="cur" tag="li" to="/1">酒店餐饮</router-link>
            <router-link tag="li" to="/2">餐厅定位</router-link>
            <router-link tag="li" to="/3">周边餐饮</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import orderFood1 from "./orderFood1.vue"
import orderFood2 from "./orderFood2.vue"
import orderFood3 from "./orderFood3.vue"

export default {
    
}
</script>
<style lang="less" scoped>
    .tab-nav{
        font-size: .3rem;
        display: flex;
        height: .84rem;
        line-height: .84rem;
        border-bottom: .01rem solid #ccc;
        >li{
            flex:1;
            text-align: center;
            color: #999;
        }
        >.cur{
            color: #000;
            border-bottom: .02rem solid #12B7F5;
        }
    }
</style>
