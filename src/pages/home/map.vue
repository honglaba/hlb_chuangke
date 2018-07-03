<template>
    <div id="app">
        <router-link class="back" to="/home/choice-details"></router-link>
        <div id="allmap" class="allmap"></div>
        <section class="bottom-row">
            <div class="location-info">
                <p>{{detailsGetter.title}}</p>
                <p>距您
                    <span>{{distance}}</span>米 {{detailsGetter.address}}</p>
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
import {mapGetters} from 'vuex'
export default {
  name: '',
  data () {
    return {
      show: false,
      menus: {
        menu1: '使用iPhone自带地图',
        menu2: '使用高德地图',
        menu3: '使用百度地图'
      },
      distance: 0,
      lng: 0,
      lat: 0
    }
  },
  computed: {
    ...mapGetters(['detailsGetter'])
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
    let that = this
    // 取目的地坐标值
    let coordinate = []
    if (this.detailsGetter) {
      coordinate.push(this.detailsGetter.longitude)
      coordinate.push(this.detailsGetter.latitude)
    } else {
      coordinate = ['116.404844', '39.91582']
    }

    // 百度地图API功能
    var map = new BMap.Map('allmap') // 创建Map实例
    map.centerAndZoom(new BMap.Point(coordinate[0], coordinate[1]), 20) // 初始化地图,设置中心点坐标和地图级别

    map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
    map.setCurrentCity('东莞') // 设置地图显示的城市 此项是必须设置的

    // 用经纬度设置地图中心点
    function theLocation () {
      map.clearOverlays()
      var new_point = new BMap.Point(coordinate[0], coordinate[1])
      var marker = new BMap.Marker(new_point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      map.panTo(new_point)
    }
    theLocation()

    // 获取自身定位并计算两点距离 有bug
    // var my_point = []
    // var geolocation = new BMap.Geolocation()
    // geolocation.getCurrentPosition(function (r) {
    //   if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //     var mk = new BMap.Marker(r.point)
    //     map.addOverlay(mk)
    //     map.panTo(r.point)
    //     // alert('您的位置：' + r.point.lng + ',' + r.point.lat)
    //     let pointeA = new BMap.Point(r.point.lng, r.point.lat)// 当前位置
    //     let pointeB = new BMap.Point(coordinate[0], coordinate[1])// 目标位置
    //     that.distance = (map.getDistance(pointeA, pointeB)).toFixed(2)// 计算距离
    //   } else {
    //     alert('failed' + this.getStatus())
    //   }
    // }, {enableHighAccuracy: true})

    // 从sessionStorage读取坐标计算距离
    let pointeA = new BMap.Point(sessionStorage.lng, sessionStorage.lat)// 当前位置
    let pointeB = new BMap.Point(coordinate[0], coordinate[1])// 目标位置
    that.distance = (map.getDistance(pointeA, pointeB)).toFixed(2)// 计算距离
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
  // position: relative;
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
