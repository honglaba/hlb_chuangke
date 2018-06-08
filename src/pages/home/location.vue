<template>
  <div id="app">
    <Headerx></Headerx>
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
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
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
</style>
