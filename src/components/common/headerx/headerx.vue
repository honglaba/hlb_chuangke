<template>
  <header class="y-flex y-ac">
    <div class="back-btn" @click="goBack" v-if="backSeen"></div>
    <div class="add y-flex y-ac" v-if="!backSeen">
      <router-link to="/home/location" tag="p">东莞</router-link>
      <span></span>
    </div>
    <div class="search-box y-flex y-ac">
      <span></span>
      <input type="search" :placeholder="$route.query.title||'搜索附近的吃喝玩乐'" ref="search" @keyup.13=search() v-model="searchVal" @focus="getFocus" />
    </div>
    <div class="screen" v-if="!searchSeen"></div>
    <router-link class="message" to="/home/notice" tag="div" v-if="!searchSeen"></router-link>
    <div v-if="searchSeen" class="search-btn" @click="search">搜索</div>
  </header>
</template>
<script>
export default {

  data () {
    return {
      searchVal: '',
      backSeen: false,
      searchSeen: false,
      historyWords: [],
      historyWordsArray: null
    }
  },
  methods: {
    search: function () {
      // if (this.searchVal) { // 旧的搜索方法 废弃
      //   this.axios.get('/api/shop-category/shops?latitude=23.0148260&longitude=113.7451960&title=' + this.searchVal).then(res => {
      //     for (let i in res.data) {
      //       if (res.data[i].distance >= 1000) {
      //         res.data[i].distance = res.data[i].distance / 1000 + 'Km'
      //       } else {
      //         res.data[i].distance = res.data[i].distance + 'm'
      //       }
      //     }
      //     this.$emit('result', res.data)// 将请求所得的值传给父组件
      //   })
      // } else {
      //   alert('请输入关键字')
      // }
      if (this.searchVal) {
        this.$router.push({path: '/home/result', query: {title: this.searchVal}})
      } else {
        alert('请输入关键字')
      }
    },
    goBack: function () {
      this.$router.back()
    },
    getFocus: function () {
      if (this.$route.name !== 'Search') {
        this.$router.push({path: '/home/search'})
      }
    }

  },
  mounted () {
    if (this.$route.name === 'Food' || this.$route.name === 'Search' || this.$route.name === 'Result') {
      this.backSeen = true
    } else {
      this.backSeen = false
    }

    this.$route.name === 'Search' ? this.searchSeen = true : this.searchSeen = false
  }
}
</script>
<style lang="less" scoped>

header {
  height: 0.88rem;
  padding:0 .2rem;
  // margin-bottom: .4rem;
  background: #fff;
}
.add {
  margin-right: 0.2rem;
  p {
    font-size: 0.34rem;
    color: #333;
  }
  span {
    display: block;
    width: 0.24rem;
    height: 0.23rem;
    background: url(./images/home-top-icon1.png) no-repeat;
    background-size: 100%;
  }
}
.search-box {
  flex: 1;
  width: 4.44rem;
  height: 0.62rem;
  border-radius: 0.62rem;
  background: #f3f3f3;
  > span {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    background: url(./images/home-top-icon2.png) no-repeat;
    background-size: 100%;
    margin-left: 0.28rem;
    margin-right: 0.08rem;
  }
  > input {
    border: 0;
    background: none;
    font-size: 0.28rem;
    outline: none;
    color: #666;
    width: 80%;
  }
}
.screen {
  width: 0.48rem;
  height: 0.48rem;
  background: url(./images/home-top-icon3.png) no-repeat;
  background-size: 100%;
  margin: 0 0.32rem;
}
.message {
  width: 0.48rem;
  height: 0.48rem;
  background: url(./images/home-top-icon4.png) no-repeat;
  background-size: 100%;
  position: relative;
  &::before {
    content: "";
    width: 0.16rem;
    height: 0.16rem;
    background: #f00;
    border-radius: 50%;
    position: absolute;
    right: -0.04rem;
    top: -0.04rem;
  }
}
.back-btn{
  width:.7rem;
  margin-right: .2rem;
  height: .88rem;
  background: url(./images/top-return-icon.png) no-repeat center;
  background-size: .2rem;
}
.search-btn{
  margin-left: .25rem;
  font-size:.3rem;
  font-weight: bold;
}
</style>
