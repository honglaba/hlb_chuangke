<template>
    <div id="app">
        <router-link class="back" to="#"></router-link>
        <div id="allmap" class="allmap"></div>
        <section class="bottom-row">
            <div class="location-info">
                <p>大岗仙庙烧鸡</p>
                <p>距您
                    <span>375.8</span>米 胜和社区福明大厦北楼102号A铺</p>
            </div>
            <div class="nav-btn" @click="useMap">
                <span></span>
                <p>导航</p>
            </div>
        </section>
        <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    </div>
</template>
<script>
import { Actionsheet } from 'vux'
export default {
  name: '',
  data () {
    return {
      show: false,
      menus: {
        menu1: '使用iPhone自带地图',
        menu2: '使用高德地图',
        menu3: '使用百度地图'
      }
    }
  },
  components: {
    Actionsheet
  },
  methods: {
    useMap: function () {
      this.show = true
    }
  },
  mounted () {
    // 百度地图API功能
    var map = new BMap.Map('allmap') // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    // map.centerAndZoom(new BMap.Point(113.75, 23.04), 17) // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(this.$store.state.choiceDetails.longitude, this.$store.state.choiceDetails.latitude), 17)

    map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
    map.setCurrentCity('东莞') // 设置地图显示的城市 此项是必须设置的

    console.log(this.$store.state.choiceDetails.longitude, this.$store.state.choiceDetails.latitude)
  }
}
</script>
<style lang="less">
.back{
  display: block;
  border-radius: .1rem;
  width: .96rem;
  height: .96rem;
  background: #fff url(../../../static/images/top-return-icon.png) no-repeat center;
  background-size:.2rem;
  box-shadow: 0 .1rem .2rem rgba(0,0,0,.1);
  position: fixed;
  left: .28rem;
  top: .28rem;
  z-index: 999;
}
.allmap {
  height: 100vh;
}
#app {
  position: relative;
}
.bottom-row {
  position: fixed;
  width: 7.5rem;
  height: 1.68rem;
  bottom: 0;
  display: flex;
  background: #fff;
  .location-info {
    width: 5.5rem;
    padding: .22rem .68rem 0 .24rem;
    >p:nth-child(1){
      font-size: .36rem;
      color:#333;
      margin-bottom: .18rem;
      font-weight: bold;
    }
    >p:nth-child(2){
      font-size: .28rem;
      color: #666;
      line-height: .36rem;
      span{
        color: #f60;
      }
    }
  }
  .nav-btn {
    width: 2rem;
    height: 1.68rem;
    background: #f5262d;
    color: #fff;
    font-size: 0.38rem;
    display: flex;
    justify-content: center;
    align-items: center;
    >span{
      display: block;
      width: .42rem;
      height: .42rem;
      background: url(./images/navico.png) no-repeat;
      background-size:100%;
      margin-right: .12rem;
    }
  }
}
//弹窗样式
.weui-actionsheet__cell{
  height: 1.24rem !important;
  padding: 0 !important;
  line-height: 1.24rem;
  font-size: .38rem !important;
  color: #333;
}
.weui-actionsheet__action{
  margin: .01rem !important;
  .weui-actionsheet__cell{
    color: #f60 !important;
  }
}
.weui-actionsheet{
  width: 7.5rem !important;
  left: 50% !important;
  margin-left:-3.75rem;
}
</style>
