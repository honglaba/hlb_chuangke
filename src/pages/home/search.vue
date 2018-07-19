<template>
  <div class="search-page">
    <Headerx></Headerx>
    <section class="serach-history">
      <div class="history-title-row">
        <p>历史搜索</p>
        <div class="detele-btn" @click="deleteHistory"></div>
      </div>
      <ul>
        <li>中影时代电影院</li>
        <li>万达影院</li>
        <li>中式餐厅</li>
        <li>哥顿蛋糕</li>
        <li>蛙来哒炭烧牛蛙</li>
        <li>牛奶</li>
        <li>必胜客</li>
        <li>必胜客</li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    deleteHistory () {
      localStorage.removeItem('historyWords')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.search-page{
  height: 100vh;
  background: #fff;
  .serach-history{
    padding: .28rem .4rem 0 .24rem;
    .history-title-row{
      margin-bottom: .22rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      >p{
        font-size: .24rem;
        color: #666;
      }
      .detele-btn{
        width: .24rem;
        height: .25rem;
        background: url(./images/delete.png) no-repeat;
        background-size: 100%;
      }
    }
    >ul{
      >li{
        float: left;
        padding: .18rem .3rem;
        background: #f4f4f4;
        font-size: .24rem;
        border-radius: .12rem;
        margin:0 .15rem .16rem 0;
      }
    }
  }
}
</style>
