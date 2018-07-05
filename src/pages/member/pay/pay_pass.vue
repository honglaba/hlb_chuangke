<template>
  <!-- 支付-身份验证页 -->
  <div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.ident-title {
  padding-left: 14px;
  font-size: 0.18rem;
  color: #666;
}
.pay-ident {
  .pay-ident-item {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    padding-left: 0.2rem;
    background-color: #fff;
    display: block;
  }
  .pay-ident-icon {
    width: .6rem;
    height: .6rem;
    float: right;
    margin-top: .2rem;
    margin-right: .2rem;
  }
  .pay-ident-item:nth-child(2) {
  border-top: 2px solid #f0f0f0;
}
}

.pay-contain {
  .pay-num {
    width: 80%;
    height: 1.7rem;
    text-align: center;
    margin: 2.7rem auto;
    position: relative;
    font-size: 0.4rem;
    .pay-num-group {
      background-color: #fff;
      position: absolute;
      bottom: 0;
      .pay-num-item {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        box-sizing: border-box;
        border: 1px solid #f0f0f0;
        display: block;
        background-color: #fff;
        float: left;
      }
    }
  }
  .pay-keymap {
    width: 100%;
    height: 4.56rem;
    flex-wrap: wrap;
    display: flex;
    position: fixed;
    bottom: 0;
    .othkey {
      background-color: #f0f0f0;
      text-align: center;
      img {
        width: 0.8rem;
        height: 0.5rem;
        margin-top: 50%;
        transform: translateY(-50%);
      }
    }
    div {
      width: 33.3%;
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      background-color: #fff;
      font-size: 0.4rem;
      position: relative;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
