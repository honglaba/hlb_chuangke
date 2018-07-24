<template>
  <div id="app" :class="{noscorll:maskSeen}">
    <!-- <Headerx></Headerx> -->
    <header class="y-flex y-ac" :class="{sp:maskSeen}">
      <span class="close" v-if="!maskSeen" @click="$router.go(-1)"></span>
      <!-- <router-link to="/" tag="a" class="close" v-show="!maskSeen"></router-link> -->
      <div class="search-box y-flex y-ac">
        <span></span>
        <input type="text" placeholder="输入城市名称" v-on:focus="focus" ref="input" v-model="keyword" />
      </div>
      <p class="cancel" v-if="maskSeen" @click="blur">取消</p>
    </header>
    <section class="tpad40 bpad12 vux-1px-b">
      <dl class="lpad32 bmar40">
        <dt>你所在的地区/历史访问记录</dt>
        <dd>
          <ul class="city-block">
            <li class="sp" @click="returnNow">
              <span></span>
              <p>{{nowRegion}}</p>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="lpad32">
        <dt>热门城市</dt>
        <dd>
          <ul class="city-block">
            <li @click="changeRegion('B',1)">北京</li>
            <li @click="changeRegion('G',1)">广州</li>
            <li @click="changeRegion('S',25)">上海</li>
            <li @click="changeRegion('C',21)">重庆</li>
            <li @click="changeRegion('T',13)">天津</li>
            <li @click="changeRegion('C',9)">长沙</li>
          </ul>
        </dd>
      </dl>
    </section>
    <section class="city-list">
      <dl v-for="(item, index) in cityInitial" :key="index">
        <dt :id="index">{{ index }}</dt>
        <dd>
          <ul>
            <li class="vux-1px-b" v-for="(cx, i) in item" :key="i" @click="changeRegion(index,i)">{{ cx.region_name }}</li>
          </ul>
        </dd>
      </dl>
    </section>

    <section class="indexes">
      <p>热门定位</p>
      <!-- 字母导航 -->
      <ul>
        <li v-for="(alp, i) in cityInitial" :key="i" @click="alpTarget($event, i)"><a :href="'#' + i">{{ i }}</a></li>
      </ul>
    </section>
    <section class="mask" v-if="maskSeen" @click.self="blur">
      <div class="result" v-if="resultSeen">
        <ul class="vux-1px-t"  v-if="searchResult.length!=0">
          <!-- <li class="vux-1px-b">
            <span>城市</span>
            <p>武汉</p>
          </li> -->

          <li class="vux-1px-b" v-for="(item,index) in searchResult" :key="index"  @click="changeRegion(item.key1,item.key2)">
            <span>城市</span>
            <p>{{item.region_name}}</p>
          </li>
        </ul>

        <div class="no-result" v-if="searchResult.length==0">
          <img src="./images/msg_fixed_icon.png" />
          <p>没有搜索结果</p>
          <p>换个关键词试试</p>
        </div>
      </div>
    </section>
    <!-- <div class="alp-shadow">A</div> -->
  </div>
</template>
<script>
import cityJson from 'static/js/city.js'
console.log(cityJson)
export default {
  computed: {
    momentAddress () {
      return this.$store.state.presentAddress
    },
    cityInitial () {
      let gcup = {}
      for (let item in cityJson) {
        if (cityJson[item].length > 0) {
          gcup[item] = cityJson[item]
        }
      }
      return gcup
    }
  },
  data () {
    return {
      maskSeen: false,
      keyword: '',
      resultSeen: false,
      pageStatu: {
        present: ''
      },
      region: null,
      nowRegion: null,
      searchResult: []
    }
  },
  watch: {
    keyword () {
      if (this.keyword) {
        this.resultSeen = true
        this.searchResult = []
        // 搜索
        for (let x in cityJson) {
          for (let i = 0, len = cityJson[x].length; i < len; i++) {
            if (cityJson[x][i].region_name.indexOf(this.keyword) >= 0) {
              cityJson[x][i].key1 = x
              cityJson[x][i].key2 = i
              this.searchResult.push(cityJson[x][i])
            }
          }
        }
      } else {
        this.resultSeen = false
      }
    }
  },
  created () {},
  methods: {
    alpTarget (e, i) {
      console.log(e, i)
    },
    focus () {
      let that = this
      this.maskSeen = true
      setTimeout(() => {
        that.$refs['input'].focus()
      }, 100)
    },
    blur () {
      this.maskSeen = false
      this.keyword = ''
    },
    changeRegion (a, b) { // 切换城市
      this.region = cityJson[a][b]
      sessionStorage.setItem('lat', cityJson[a][b].latitude)
      sessionStorage.setItem('lng', cityJson[a][b].longitude)
      sessionStorage.setItem('regionName', cityJson[a][b].region_name)
      this.$router.go(-1)
    },
    returnNow () { // 切换至自身定位
      sessionStorage.setItem('lat', sessionStorage.nowLat)
      sessionStorage.setItem('lng', sessionStorage.nowLng)
      sessionStorage.setItem('regionName', sessionStorage.nowRegion)
      this.$router.go(-1)
    }
  },
  mounted () {
    // 进入页面即获取焦点
    // this.$refs['input'].focus()
    this.nowRegion = sessionStorage.nowRegion
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.alp-shadow {
  width: 1.4rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  font-size: 1rem;
  color: #FFF;
  font-family: 'Microsoft Yahei';
  background-color: #000;
  opacity: 0.6;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.noscorll {
  height: 100vh;
  overflow: hidden;
}
dt {
  font-size: 0.28rem;
  color: #999;
  margin-bottom: 0.32rem;
}
.city-block {
  overflow: hidden;
  > li {
    width: 2.1rem;
    height: 0.7rem;
    border: 0.01rem solid #e5e5e5;
    background: #fff;
    text-align: center;
    line-height: 0.68rem;
    box-sizing: border-box;
    border-radius: 0.07rem;
    float: left;
    margin-right: 0.16rem;
    margin-bottom: 0.08rem;
  }
  > li:nth-child(3n) {
    margin-right: 0;
  }
  > .sp {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f60;
    border: 0.01rem solid #f60;
    span {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      background: url(./images/location.png) no-repeat;
      background-size: 100%;
    }
  }
}
.city-list {
  dt {
    margin: 0;
    padding-left: 0.32rem;
    height: 0.56rem;
    line-height: 0.56rem;
  }
  dd {
    background: #fff;
    padding-left: 0.32rem;
    li {
      height: 0.9rem;
      line-height: 0.9rem;
    }
  }
}
.indexes {
  position: fixed;
  right: 0;
  bottom: 0;
  height: 88%;
  color: #f60;
  width: 0.7rem;
  text-align: center;
  font-size: 0.24rem;
  > p {
    height: 8%;
    line-height: 0.48rem;
    padding-bottom: 0.15rem;
  }
  ul {
    width: 100%;
    height: 92%;
    li {
      a {
        color: #f60!important;
      }
      width: 100%;
      height: 4.4%;
    }
  }
}
header {
  height: 0.88rem;
  background: #fff;
  .close {
    width: 0.32rem;
    height: 0.32rem;
    background: url(./images/fixed_top_close.png) no-repeat;
    background-size: 100%;
    margin: 0 0.39rem;
  }
  .search-box {
    width: 5.68rem;
    height: 0.62rem;
    border-radius: 0.62rem;
    background: #f3f3f3;
    display: flex;
    > span {
      display: block;
      width: 0.32rem;
      height: 0.32rem;
      background: url(./images/home-top-icon2.png) no-repeat;
      background-size: 100%;
      margin-left: 0.28rem;
      margin-right: 0.08rem;
    }
    > input {
      flex: 1;
      border: 0;
      height: 0.6rem;
      background: none;
      font-size: 0.28rem;
      outline: none;
      padding-right: 0.2rem;
    }
  }
}
.mask {
  width: 7.5rem;
  height: calc(100vh - 0.88rem);
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  background: rgba(0, 0, 0, 0.5);
  .result {
    width: 100%;
    height: 100%;
    background: #fff;
    padding-left: 0.24rem;
    box-sizing: border-box;
    padding-top: 0.07rem;
    overflow-y: scroll;
    > ul {
      > li {
        height: 0.92rem;
        padding-left: 0.04rem;
        display: flex;
        align-items: center;
        > span {
          display: block;
          margin-right: 0.16rem;
          font-size: 0.16rem;
          color: #fff;
          text-align: center;
          width: 0.4rem;
          height: 0.26rem;
          line-height: 0.26rem;
          background: linear-gradient(45deg, #fa8c16, #f5222d);
          border-radius: 0.03rem;
        }
        > p {
          color: #f60;
          font-size: 0.28rem;
        }
      }
    }
  }
  .no-result {
    padding-top: 2.4rem;
    font-size: 0.28rem;
    text-align: center;
    img {
      width: 1.5rem;
      margin: 0 auto;
      display: block;
      margin-bottom: 0.48rem;
    }
    > :nth-child(2) {
      color: #f60;
      margin-bottom: 0.28rem;
    }
    > :nth-child(3) {
      color: #999;
    }
  }
}
header.sp {
  padding-left: 0.32rem;
  .search-box {
    width: 5.92rem;
  }
  .cancel {
    flex: 1;
    text-align: center;
    font-size: 0.28rem;
  }
}
</style>
