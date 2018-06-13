<template>
  <div class="app">
   <x-header :left-options="{backText: ''}" title="提现记录"></x-header>
    <div class="main">
      <div class="content pd20">
        <div class="txbox">
          <p class="lstotal">888.66</p>
          <p class="shuoming">历史提现总额(元)</p>
        </div>
        <div class="txlist">
          <ul>
            <li class="jinxingzhong">
              <div class="left">
                <span class="status">提现申请中</span>
                <span>2018-05-26 16:45:56</span>
              </div>
              <div class="right">
                <span class="biandong">-50</span>
              </div>
            </li>
            <li class="wancheng">
              <div class="left">
                <span class="status">提现成功</span>
                <span>2018-05-26 16:45:56</span>
              </div>
              <div class="right">
                <span class="biandong">-80</span>
              </div>
            </li>
            <li class="shibai">
              <div class="left">
                <span class="status">提现失败（已返还账户）</span>
                <span>2018-05-26 16:45:56</span>
              </div>
              <div class="right">
                <span class="biandong">-50</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.main {
  background: #ffffff;
}
.txbox {
  padding: 0.5rem 0;
  text-align: center;
  .lstotal {
    font-size: 0.64rem;
    color: #000000;
  }
  .shuoming {
    color: #999999;
    font-size: 0.24rem;
  }
}
.txlist ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: #e6e6e6 dashed 1px;
  padding: 0.2rem 0;
  align-items: center;
  .left {
    position: relative;
    span {
      display: block;
      &:first-child {
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
      }
      &:nth-child(2) {
        color: #999;
      }
    }
  }
  &.wancheng {
    .status {
      color: #0aa42a;
    }
    .right {
      color: #0aa42a;
    }
  }
  &.jinxingzhong {
    .status {
      color: #ff7f32;
    }
    .right {
      color: #ff7f32;
    }
  }
  &.shibai {
    .status {
      color: #999999;
    }
    .right {
      color: #999999;
    }
  }
}
</style>