<template>
  <div class="app">
    <my-header @on-click-back="routeBack" :left-options="{preventGoBack: true}" :Title="'我的战绩'"></my-header>
    <div class="main2">
      <div class="content">
        <div class="zj zj-a1">
          ￥{{dataRecord.total_amount}}
        </div>
        <div class="zj zj-a2">
          {{dataRecord.invites}}名新用户
        </div>
        <div class="zj zj-a3">
          {{dataRecord.ck_member_num}}名新用户
        </div>
        <div class="zj zj-a4">
          {{dataRecord.day}}天
        </div>
        <div class="zj zj-a5">
        </div>
        <div class="zj zj-a6">
        </div>
        <!-- <div class="wozhidao">
          <button class="btn-aoc"><router-view to="">我知道了</router-view></button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dataRecord: []
    }
  },
  created () {
    this.getRecord().then(res => {
      this.dataRecord = res.data
    })
  },
  methods: {
    routeBack () {
      this.$router.push({path: '/weika/commission'})
    },
    ...mapActions({getRecord: 'Wk_Record'})
  }
}
</script>
<style lang="less" scoped>
.content {
  position: relative;
  color: #fff;
  height: 100%;
}
.zj {
  position: absolute;
  text-align: center;
  font-size: 0.38rem;
}
.zj-a1 {
  background: url("../images/zj_01.png") center no-repeat;
  background-size: contain;
  top: 0.4rem;
  right: 0.6rem;
  width: 2.53rem;
  height: 2.57rem;
  line-height: 2.57rem;
}
.zj-a2 {
  background: url("../images/zj_02.png") center no-repeat;
  background-size: contain;
  top: 1.1rem;
  left: 0.4rem;
  width: 3.2rem;
  height: 3.23rem;
  line-height: 3.23rem;
}
.zj-a3 {
  background: url("../images/zj_03.png") center no-repeat;
  background-size: contain;
  top: 3.3rem;
  right: 0.4rem;
  width: 4.16rem;
  height: 4.19rem;
  line-height: 4.19rem;
}
.zj-a4 {
  background: url("../images/zj_04.png") center no-repeat;
  background-size: contain;
  top: 6.7rem;
  left: 0.7rem;
  width: 2.84rem;
  height: 2.89rem;
  line-height: 2.89rem;
}
.zj-a5 {
  background: url("../images/zj_05.png") center no-repeat;
  background-size: contain;
  top: 4.8rem;
  left: 0.95rem;
  width: 1.33rem;
  height: 1.37rem;
}
.zj-a6 {
  background: url("../images/zj_06.png") center no-repeat;
  background-size: contain;
  top: 8.6rem;
  right: 1.4rem;
  width: 1.22rem;
  height: 1.25rem;
}
.wozhidao {
  position: absolute;
  bottom: 0.9rem;
  left: 0;
  width: 100%;
  .btn-aoc {
    margin: 0 auto;
    width: 90%;
    margin-left: 5%;
  }
}
</style>
