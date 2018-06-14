<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="兑换记录">
    </x-header>
    <div class="main2">
      <div class="content">
        <div class="dhlist">
          <div class="empty">
            <p class="pic"><img src="./images/empty.png"></p>
            <p class="tips">暂无兑换记录~</p>
          </div>
          <ul>
            <li>
              <div class="splist">
                <div class="left">
                  <img src="./images/temp001.png">
                </div>
                <div class="right">
                  <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                  <div class="price">￥158.55</div>
                  <div class="info">
                    <span class="a1">298积分</span>
                    <span class="a2">已兑换</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="splist">
                <div class="left">
                  <img src="./images/temp001.png">
                </div>
                <div class="right">
                  <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                  <div class="price">￥158.55</div>
                  <div class="info">
                    <span class="a1">298积分</span>
                    <span class="a2">已兑换</span>
                  </div>
                </div>
              </div>
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
.empty {
  padding: 0.4rem;
  text-align: center;
  .pic {
    width: 1.17rem;
    height: 1.37rem;
    margin: 0 auto;
    margin-bottom: 0.2rem;
  }
  .tips {
    color: #999;
  }
}
.dhlist {
  font-size: 0.24rem;
  margin-top: 0.2rem;
  ul {
    background: #fff;
    li {
      padding: 0.2rem;
      border-bottom: #f0f0f0 solid 1px;
      .shopinfo {
        .name {
          position: relative;
          font-size: 0.34rem;
          font-weight: bold;
          padding-left: 0.3rem;
          &::before {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0.06rem;
            content: "";
            width: 0.28rem;
            height: 0.24rem;
            background: url("images/shop.png") center no-repeat;
            background-size: contain;
          }
        }
        .dizhi {
          position: relative;
          color: #999;
          font-size: 0.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.2rem;
          margin-top: 0.1rem;
          padding-left: 0.2rem;
          &::before {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0.04rem;
            content: "";
            width: 0.14rem;
            height: 0.18rem;
            background: url("images/dizhi.png") center no-repeat;
            background-size: contain;
          }
        }
      }
      .splist {
        display: flex;
        align-items: center;
        border-bottom: #f0f0f0 solid 1px;
        padding: 0.2rem 0;
        &:last-child {
          border-bottom: none;
        }
        .left {
          margin-right: 0.2rem;
          img {
            width: 1.86rem;
            height: 1.86rem;
          }
        }
        .right {
          flex: 1;
          .name {
            font-size: 0.3rem;
            margin-bottom: 0.2rem;
          }
          .price {
            color: #999;
            font-size: 0.24rem;
            text-decoration: line-through;
            margin-bottom: 0.1rem;
          }
          .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #999;
            .a1 {
              font-size: 0.34rem;
              color: #ff0516;
            }
            .a2 {
              font-size: 0.24rem;
              color: #fff;
              display: block;
              padding: 0 0.3rem;
              border-radius: 0.1rem;
              line-height: 0.6rem;
              background: #cccccc;
            }
          }
        }
      }
    }
  }
}
</style>

