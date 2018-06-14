<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="我的收藏"></x-header>
    <div class="main2">
      <div class="content">
        <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
          <tab-item @on-item-click="handler" @click.native="tab" data-id=1 selected>收藏的商品</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=2>收藏的商家</tab-item>
        </tab>
        <div class="tab-list1" v-if="nowSeen==1">
          <div class="empty">
            <p class="pic"><img src="./images/empty.png"></p>
            <p class="tips">还没有收藏的商品~</p>
          </div>
          <ul>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                <div class="price">￥158.55</div>
                <div class="info">
                  <span class="a1">已售
                    <em>188</em>件</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                <div class="price">￥158.55</div>
                <div class="info">
                  <span class="a1">已售
                    <em>188</em>件</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">舒克牙膏清新泼河香型组合装家庭实惠牙膏压缩套装 120g*2支</div>
                <div class="price">￥158.55</div>
                <div class="info">
                  <span class="a1">已售
                    <em>188</em>件</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tab-list2" v-if="nowSeen==2">
          <ul>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">肯德基宅急送</div>
                <div class="caixi">
                  <span>特色菜</span>
                  <span>人均消费￥30/人</span>
                  <span>距离24.56km</span>
                </div>
                <div class="pingfen">
                  <span class="a1">
                    评分
                    <em>4.9</em>
                  </span>
                </div>
                <div class="info">
                  <span class="a1">已有
                    <em>188</em>人消费</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">肯德基宅急送</div>
                <div class="caixi">
                  <span>特色菜</span>
                  <span>人均消费￥30/人</span>
                  <span>距离24.56km</span>
                </div>
                <div class="pingfen">
                  <span class="a1">
                    评分
                    <em>4.9</em>
                  </span>
                </div>
                <div class="info">
                  <span class="a1">已有
                    <em>188</em>人消费</span>
                  <span class="a2">取消关注</span>
                </div>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="./images/temp001.png">
              </div>
              <div class="right">
                <div class="name">肯德基宅急送</div>
                <div class="caixi">
                  <span>特色菜</span>
                  <span>人均消费￥30/人</span>
                  <span>距离24.56km</span>
                </div>
                <div class="pingfen">
                  <span class="a1">
                    评分
                    <em>4.9</em>
                  </span>
                </div>
                <div class="info">
                  <span class="a1">已有
                    <em>188</em>人消费</span>
                  <span class="a2">取消关注</span>
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
import { Tab, TabItem } from "vux";
export default {
  data() {
    return {
      nowSeen: "1"
    };
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
    tab: function(e) {
      console.log(e.target.getAttribute("data-id"));
      this.nowSeen = e.target.getAttribute("data-id");
    }
  }
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
.tab-list1 {
  font-size: 0.24rem;
  margin-top: 0.2rem;
  ul {
    background: #fff;
    li {
      padding: 0.2rem;
      display: flex;
      align-items: center;
      border-bottom: #f0f0f0 solid 1px;
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
          color: #f5232e;
          font-size: 0.32rem;
          margin-bottom: 0.1rem;
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999;
          .a1 {
            em {
              color: #f5232e;
              font-style: normal;
            }
          }
          .a2 {
            display: block;
            padding: 0 0.3rem;
            border: #e6e6e6 solid 1px;
            border-radius: 0.1rem;
            color: #333;
            line-height: 0.6rem;
          }
        }
      }
    }
  }
}
.tab-list2 {
  margin-top: 0.2rem;
  font-size: 0.24rem;
  ul {
    background: #fff;
    li {
      padding: 0.2rem;
      display: flex;
      align-items: center;
      border-bottom: #f0f0f0 solid 1px;
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
          font-weight: bold;
        }
        .caixi {
          display: flex;
          justify-content: space-between;
          color: #666;
          span:nth-child(1) {
            margin-right: 0.2rem;
          }
          span:nth-child(3) {
            flex: 2;
            text-align: right;
          }
        }
        .pingfen {
          margin-top: 0.1rem;
          margin-bottom: 0.2rem;
          em {
            color: #f5222d;
            font-style: normal;
          }
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999;
          .a1 {
            em {
              color: #ff0000;
              font-style: normal;
            }
          }
          .a2 {
            display: block;
            padding: 0 0.3rem;
            border: #e6e6e6 solid 1px;
            border-radius: 0.1rem;
            color: #333;
            line-height: 0.6rem;
          }
        }
      }
    }
  }
}
</style>

