<template>
  <div class="app">
    <my-header :Title="'物流详情'">
    </my-header>
    <div class="main2">
      <div class="content ">
        <div class="order-info pd20">
          <div class="left"><img src="./../images/noorder.png"></div>
          <div class="right">
            <h3>物流单号:545465787661</h3>
            <p>物流类型:顺丰快递</p>
          </div>
        </div>
        <div class="step-vertical mt20 pd20">
          <ul>
            <li class="bdr-b on">
              <p>2016-07-10 09:30</p>
              <h3>快件已发货</h3>
              <i class="step-circle abs-topcenter"></i>
            </li>
            <li class="bdr-b">
              <p>2016-07-10 09:30</p>
              <h3>广东广州中心进行装车扫码即将发往白云区分拨中心</h3>
              <i class="step-circle abs-topcenter"></i>
            </li>
            <li class="bdr-b">
              <p>2016-07-10 09:30</p>
              <h3>中转站到广州</h3>
              <i class="step-circle abs-topcenter"></i>
            </li>
            <li class="bdr-b">
              <p>2016-07-10 09:30</p>
              <h3>已发货</h3>
              <i class="step-circle abs-topcenter"></i>
            </li>
            <li class="bdr-b">
              <p>2016-07-10 09:30</p>
              <h3>提交订单完成：15457887645</h3>
              <i class="step-circle abs-topcenter"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.order-info {
  display: flex;
  align-items: center;
  background: #fff;
  .left {
    margin-right: 0.1rem;
    img {
      width: 1rem;
      height: 1rem;
    }
  }
  .right {
    h3 {
      font-weight: normal;
      margin-bottom: 0.1rem;
    }
    p {
      color: #999999;
      font-size: 0.2rem;
    }
  }
}
.step-vertical {
  background: #fff;
  overflow: hidden;
  ul {
    margin-left: 0.2rem;
    li {
      padding: 0.2rem 0.4rem;
      position: relative;
      color: #999999;
      font-size: 0.24rem;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #cccccc;
        top: 0;
        left: 0;
        z-index: 1;
      }
      &.bdr-b::after {
        left: 0.4rem;
      }
      &:last-child::after {
        border-bottom: none;
      }
      &.on {
        color: #f5222d;
        .step-circle {
          background-color: #f5222d;
        }
      }
      p {
        margin-bottom: 0.1rem;
      }
      .step-circle {
        display: block;
        width: 0.16rem;
        height: 0.16rem;
        left: -0.08rem;
        background-color: #cccccc;
        border-radius: 50%;
        z-index: 2;
      }
    }
  }
}
</style>
