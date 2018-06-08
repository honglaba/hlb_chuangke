<template>
    <div id="app">
        <router-link></router-link>
        <div id="allmap" class="allmap"></div>
        <section class="bottom-row">
            <div class="location-info">
                <p>大岗仙庙烧鸡</p>
                <p>距您
                    <span>375.8</span>米 胜和社区福明大厦北楼102号A铺</p>
            </div>
            <div class="nav-btn">
                <span></span>
                <p>导航</p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  mounted () {
    // 百度地图API功能
    var map = new BMap.Map('allmap') // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(113.75, 23.04), 10) // 初始化地图,设置中心点坐标和地图级别

    map.addControl(new BMap.MapTypeControl()) //添加地图类型控件
    map.setCurrentCity('东莞') // 设置地图显示的城市 此项是必须设置的
  }
}
</script>
<style lang="less" scoped>
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
  }
  .nav-btn {
    width: 2rem;
    height: 1.68rem;
    background: #f5262d;
    color: #fff;
    font-size: 0.38rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
