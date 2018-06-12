<template>
  <div id="app" :class="{noscorll:maskSeen}">
    <!-- <Headerx></Headerx> -->
    <header class="y-flex y-ac" :class="{sp:maskSeen}">
      <!-- <span class="close" v-if="!maskSeen"></span> -->
      <router-link tag="span" to="/home/index"  class="close" v-if="!maskSeen"></router-link>
      <div class="search-box y-flex y-ac">
        <span></span>
        <input type="text" placeholder="输入城市名称" v-on:focus="focus" ref="input" v-model="keyword"/>
      </div>
      <p class="cancel" v-if="maskSeen" @click="blur">取消</p>
    </header>
    <section class="tpad40 bpad12 vux-1px-b">
      <dl class="lpad32 bmar40">
        <dt>你所在的地区/历史访问记录</dt>
        <dd>
          <ul class="city-block">
            <li class="sp">
              <span></span>
              <p>东莞</p>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="lpad32">
        <dt>热情城市</dt>
        <dd>
          <ul class="city-block">
            <li>北京</li>
            <li>广州</li>
            <li>上海</li>
            <li>重庆</li>
            <li>天津</li>
            <li>长沙</li>
          </ul>
        </dd>
      </dl>
    </section>
    <section class="city-list">
      <dl>
        <dt id="A">A</dt>
        <dd>
          <ul>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
          </ul>
        </dd>
        <dt id="A">B</dt>
        <dd>
          <ul>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
            <li class="vux-1px-b">鞍山</li>
          </ul>
        </dd>
      </dl>
    </section>

    <section class="indexes">
      <p>热门定位</p>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </section>
    <section class="mask" v-if="maskSeen" @click.self="blur">
      <div class="result" v-if="resultSeen">
        <ul class="vux-1px-t">
          <li class="vux-1px-b">
            <span>城市</span>
            <p>武汉</p>
          </li>
          <li class="vux-1px-b">
            <span>城市</span>
            <p>武汉</p>
          </li>
        </ul>

        <div class="no-result">
          <img src="./images/msg_fixed_icon.png" />
          <p>没有搜索结果</p>
          <p>换个关键词试试</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      maskSeen: false,
      keyword: '',
      resultSeen: false
    }
  },
  watch: {
    keyword: function () {
      if (this.keyword != '') {
        this.resultSeen = true
      } else {
        this.resultSeen = false
      }
    }
  },
  methods: {
    focus: function () {
      let that = this
      this.maskSeen = true
      this.$refs['input'].focus()
      setTimeout(function () { that.$refs['input'].focus() }, 100)
    },
    blur: function () {
      this.maskSeen = false
      this.$refs['input'].value = ''
    }
  },
  mounted () {
    // 进入页面即获取焦点
    // this.$refs['input'].focus()
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.noscorll{
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
  bottom: 0;
  right: 0;
  color: #f60;
  width: 0.7rem;
  text-align: center;
  font-size: 0.24rem;
  > p {
    line-height: 0.48rem;
  }
  li {
    width: 0.8rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
  }
}
header{
  height: .88rem;
  background: #fff;
  .close{
    width: .32rem;
    height: .32rem;
    background: url(./images/fixed_top_close.png) no-repeat;
    background-size:100%;
    margin: 0 .39rem;
  }
  .search-box{
    width: 5.68rem;
    height: .62rem;
    border-radius: .62rem;
    background: #f3f3f3;
    display: flex;
    >span{
      display: block;
      width: .32rem;
      height: .32rem;
      background: url(./images/home-top-icon2.png) no-repeat;
      background-size: 100%;
      margin-left: .28rem;
      margin-right: .08rem;
    }
    >input{
      flex: 1;
      border: 0;
      height: .6rem;
      background: none;
      font-size: .28rem;
      outline: none;
      padding-right: .2rem;
    }
  }
}
.mask{
  width: 7.5rem;
  height: calc(100vh - .88rem);
  position:fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  background: rgba(0,0,0,.5);
  .result{
    width: 100%;
    height: 100%;
    background: #fff;
    padding-left: .24rem;
    box-sizing: border-box;
    padding-top: .07rem;
    >ul{
      >li{
        height: .92rem;
        padding-left: .04rem;
        display: flex;
        align-items: center;
        >span{
          display: block;
          margin-right: .16rem;
          font-size: .16rem;
          color: #fff;
          text-align: center;
          width: .4rem;
          height: .26rem;
          line-height: .26rem;
          background: linear-gradient(45deg,#fa8c16,#f5222d);
          border-radius: .03rem;
        }
        >p{
          color: #f60;
          font-size: .28rem;
        }
      }
    }
  }
  .no-result{
    padding-top: 2.4rem;
    font-size: .28rem;
    text-align:center;
    img{
      width: 1.5rem;
      margin: 0 auto;
      display: block;
      margin-bottom: .48rem;
    }
    >:nth-child(2){
      color: #f60;
      margin-bottom: .28rem;
    }
    >:nth-child(3){
      color: #999;
    }
  }
}
 header.sp{
    padding-left:.32rem;
    .search-box{
      width: 5.92rem;
    }
    .cancel{
      flex: 1;
      text-align: center;
      font-size: .28rem;
    }
  }

</style>
