<template>
  <div id="app">
    <headerx></headerx>
    <section class="banner">
      <p>今日推荐</p>
      <img src="./images/nearby-banner.png" />
    </section>
    <section class="tab">
      <ul class="tab-nav">
        <li v-for="(tab,index) in tabNavs" @click="tabTap(index)" :class="{cur:tab.active}" :key="index">
          {{tab.name}}
        </li>
      </ul>
      <div class="tab-con">
        <ul>
          <li v-for="(nav,index) in navs" @click="navTap(index)" :class="{cur:nav.active}" :key="index">
            {{nav.name}}
          </li>
        </ul>
      </div>
    </section>
    <section class="business-list">
      <ul>
        <router-link tag="li" to="#" class="vux-1px-b" v-for="(item,index) in businessList" :key="index">
          <ListInner :businessList="item"></ListInner>
          <Other></Other>
        </router-link>
      </ul>
    </section>
  </div>
</template>
<script>
import ListInner from '../../components/common/listInner/listInner'
import Other from '../../components/common/other/other'

export default {
  watch: {
    $route (val, oldval) {}
  },
  data () {
    return {
      transitionName: '',
      tabNavs: [
        {
          name: '附近商家',
          active: true
        },
        {
          name: '美食',
          active: false
        },
        {
          name: '酒店',
          active: false
        },
        {
          name: '娱乐',
          active: false
        },
        {
          name: '电影',
          active: false
        },
        {
          name: '丽人',
          active: false
        },
        {
          name: '附近商家',
          active: false
        },
        {
          name: '美食',
          active: false
        },
        {
          name: '酒店',
          active: false
        },
        {
          name: '娱乐',
          active: false
        },
        {
          name: '电影',
          active: false
        },
        {
          name: '丽人',
          active: false
        }
      ],
      navs: [
        {
          name: '全部',
          active: true
        },
        {
          name: '甜点饮品',
          active: false
        },
        {
          name: '生日蛋糕',
          active: false
        },
        {
          name: '火锅',
          active: false
        },
        {
          name: '自助餐',
          active: false
        },
        {
          name: '小吃快餐',
          active: false
        },
        {
          name: '日韩料理',
          active: false
        }
      ],
      businessList: [
        {
          name: '良记甜品',
          pic: '../../../static/images/nearby-label-img1.png'
        },
        {
          name: '肯德基宅急送',
          pic: '../../../static/images/nearby-label-img2.png'
        }
      ]
    }
  },
  methods: {
    tabTap: function (index) {
      let tabNavs = document.querySelectorAll('.tab-nav>li')
      for (let i = 0, len = tabNavs.length; i < len; i++) {
        this.tabNavs[i].active = false
      }
      this.tabNavs[index].active = true
    },
    navTap: function (index) {
      let navs = document.querySelectorAll('.tab-con li')
      for (let i = 0, len = navs.length; i < len; i++) {
        this.navs[i].active = false
      }
      this.navs[index].active = true
    }
  },
  components: { ListInner, Other }
}
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
  }
}
</style>
