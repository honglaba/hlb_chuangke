<template>
  <div id="app">
       <loading :show="show1" :text="text1"></loading>
        <alert v-model="show" :title="'你吃饭了吗？'"> {{ '还没啊~' }}</alert>
  </div>
</template>

<script>
import { Loading,Alert} from 'vux'
export default {
    data(){
        return {
            show1:false,
            test1:"稍等",
            show:true
        }
    },
    components: {Loading,Alert},
    methods: {
    },
    mounted(){
    },
}
</script>

<style lang="less" scoped>
</style>
