<template>
    <div id="app">
        <headerx></headerx>
         <footerx></footerx>
         <section class="banner">
             <p>今日推荐</p>
             <img src="./images/nearby-banner.png" />
         </section>
         <section class="tab">
             <ul class="tab-nav">
                 <li v-for="(tab,index) in tabNavs" @click="tabTap(index)" :class="{cur:tab.active}">
                    {{tab.name}}
                </li>
             </ul>
             <div class="tab-con">
                <ul>
                    <li v-for="(nav,index) in navs" @click="navTap(index)" :class="{cur:nav.active}">
                        {{nav.name}}    
                    </li>                
                </ul>
             </div>
         </section>
         <section class="business-list">
             <ul>
                 <router-link tag="li" to="#" class="vux-1px-b">
                     <div class="inner">
                         <div class="business-img">
                            <img src="./images/nearby-label-img1.png" />
                        </div>
                        <div class="business-info">
                            <div class="til-row">
                                <h4>良记甜品</h4>
                                <p>创客推荐</p>
                            </div>
                            <span class="mark">到店直换</span>
                            <p class="tsc">特色菜</p>
                            <div class="price-row">
                                <div><span>4.9</span>分</div>
                                <p>(118条评价)</p>
                            </div>
                        </div>
                        <p>20Km</p>
                     </div>
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
                 </router-link>
                 <router-link tag="li" to="#" class="vux-1px-b">
                     <div class="inner">
                         <div class="business-img">
                            <img src="./images/nearby-label-img2.png" />
                        </div>
                        <div class="business-info">
                            <div class="til-row">
                                <h4>肯德基宅急送</h4>
                                <p>创客推荐</p>
                            </div>
                            <span class="mark">到店直换</span>
                            <p class="tsc">特色菜</p>
                            <div class="price-row">
                                <div><span>4.9</span>分</div>
                                <p>(118条评价)</p>
                            </div>
                        </div>
                        <p>20Km</p>
                     </div>
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
                 </router-link>
             </ul>
         </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabNavs: [
        {
          name: "附近商家",
          active: true
        },
        {
          name: "美食",
          active: false
        },
        {
          name: "酒店",
          active: false
        },
        {
          name: "娱乐",
          active: false
        },
        {
          name: "电影",
          active: false
        },
        {
          name: "丽人",
          active: false
        },
        {
          name: "附近商家",
          active: false
        },
        {
          name: "美食",
          active: false
        },
        {
          name: "酒店",
          active: false
        },
        {
          name: "娱乐",
          active: false
        },
        {
          name: "电影",
          active: false
        },
        {
          name: "丽人",
          active: false
        }
      ],
      navs: [
        {
          name: "全部",
          active: true
        },
        {
          name: "甜点饮品",
          active: false
        },
        {
          name: "生日蛋糕",
          active: false
        },
        {
          name: "火锅",
          active: false
        },
        {
          name: "自助餐",
          active: false
        },
        {
          name: "小吃快餐",
          active: false
        },
        {
          name: "日韩料理",
          active: false
        }
      ]
    };
  },
  methods: {
    tabTap: function(index) {
      let tabNavs = document.querySelectorAll(".tab-nav>li");
      for (let i = 0, len = tabNavs.length; i < len; i++) {
        this.tabNavs[i].active = false;
      }
      this.tabNavs[index].active = true;
    },
    navTap: function(index) {
      let navs = document.querySelectorAll(".tab-con li");
      for (let i = 0, len = navs.length; i < len; i++) {
        this.navs[i].active = false;
      }
      this.navs[index].active = true;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
#app {
  padding-bottom: 1rem;
}
.banner {
  width: 100%;
  height: 4.5rem;
  background: url(./images/nearby-banner-background.png) no-repeat;
  background-size: 100%;
  > img {
    width: 7.5rem;
    margin-top: -0.12rem;
  }
  > p {
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 0.4rem;
    padding-top: 0.35rem;
  }
}
.tab-nav {
  background: #fff;
  height: 0.8rem;
  font-size: 0.28rem;
  color: #333;
  width: 100%;
  // display: inline;
  white-space: nowrap;
  overflow-x: scroll;
  float: left;
  overflow-y: hidden;
  > li {
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    position: relative;
    display: inline-block;
    margin: 0 0.3rem;
  }
  > .cur {
    color: #f60;
  }
  > .cur:before {
    content: "";
    width: 0.72rem;
    height: 0.04rem;
    background: #f60;
    border-radius: 0.02rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -0.36rem;
  }
}
.tab-con {
  background: #f5f5f5;
  padding: 0.24rem 0 0.06rem 0.24rem;
  overflow: hidden;
  li {
    width: 1.6rem;
    height: 0.52rem;
    border: 0.01rem solid #eee;
    border-radius: 0.26rem;
    font-size: 0.26rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.52rem;
    background: #fff;
    float: left;
    margin-right: 0.2rem;
    margin-bottom: 0.18rem;
  }
  .cur {
    color: #f60;
    border: 0.01rem solid #f60;
    background: #ffe7d7;
  }
}
.business-list {
  background: #fff;
  padding: 0 0.3rem;
  > ul > li {
    padding-top: 0.32rem;
    .inner {
      display: flex;
      > p {
        font-size: 0.24rem;
        color: #666;
      }
      .business-img {
        width: 2.02rem;
        height: 2.02rem;
        margin-right: 0.32rem;
        overflow: hidden;
        img {
          height: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .business-info {
        flex: 1;
        overflow: hidden;
        .til-row {
          display: flex;
          align-items: center;
          height: 0.36rem;
          margin-bottom: 0.1rem;
          > p {
            font-size: 0.2rem;
            color: #333;
            width: 0.9rem;
            height: 0.3rem;
            text-align: center;
            line-height: 0.3rem;
            border-radius: 0.02rem;
            background: linear-gradient(left, #ffd05f, #ffb51d);
            border: 0.01rem solid #ffecb0;
          }
        }
        h4 {
          font-size: 0.36rem;
          color: #333;
          margin-right: 0.16rem;
        }
        .mark {
          font-size: 0.22rem;
          color: #fa443a;
          background: #fff5f4;
          border: 1px solid #fededc;
          width: 1.11rem;
          // height: .32rem;
          box-sizing: border-box;
          display: block;
          text-align: center;
          line-height: 0.32rem;
          border-radius: 0.04rem;
          margin-bottom: 0.42rem;
        }
        .tsc {
          font-size: 0.28rem;
          color: #666;
          margin-bottom: 0.1rem;
        }
        .price-row {
          overflow: hidden;
          font-size: 0.28rem;
          color: #666;
          > div {
            float: left;
            margin-right: 0.4rem;
            span {
              color: #f00;
              font-size: 0.3rem;
            }
          }
          > p {
            float: left;
          }
        }
      }
    }

    .other {
      margin-left: 2.35rem;
      margin-top: 0.26rem;
      border-top: 0.01rem dashed #f2f2f2;
      padding-top: 0.02rem;
      > li {
        display: flex;
        align-items: center;
        padding-top: 0.22rem;
        padding-bottom: 0.26rem;
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
  }
}
</style>


