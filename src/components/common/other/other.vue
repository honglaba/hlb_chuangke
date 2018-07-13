<template>
    <ul class="other">
        <li class="type1">
            <span></span>
            <p>折扣商品7.5折起（不与其他折扣优惠叠加）</p>
        </li>
        <li class="type2">
            <span></span>
            <p>新用户首单立减5元</p>
        </li>
        <li class="type3">
            <span></span>
            <p>满30减3元  满60减6元</p>
        </li>
    </ul>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
    .other {
      margin-left: 2.35rem;
      margin-top: 0.26rem;
      border-top: 0.01rem dashed #f2f2f2;
      padding-top: 0.02rem;
      > li {
        display: flex;
        align-items: center;
        padding-top: .1rem;
        &:last-child{
           padding-bottom: .2rem;
        }
        > span {
          display: block;
          background: url(./images/otherico.png) no-repeat;
          width: 0.28rem;
          height: 0.28rem;
          background-size: 0.88rem;
          margin-right: 0.14rem;
        }
        > p {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 0.22rem;
          color: #999;
        }
      }
      > .type1 > span {
        background-position: 0 0;
      }
      > .type2 > span {
        background-position: -0.3rem 0;
      }
      > .type3 > span {
        background-position: -0.6rem 0;
      }
    }
</style>
