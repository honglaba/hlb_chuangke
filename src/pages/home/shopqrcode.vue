<template>
    <div class="app">
        <x-header :left-options="{backText: ''}" title="店铺二维码">
        </x-header>
        <div class="main2">
            <div class="content">
                <!-- <img src="../../assets/images/logo.png" class="qrcode"> -->
                <div class="qrWrap"><img :src="QR" class="qrcode" v-if="QR"></div>
                <p class="shopname"> {{this.$route.query.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      QR: ''
    }
  },
  components: {},
  methods: {

  },
  created () {
    console.log(this.$route.query.file)
    let filename = this.$md5(this.$route.query.file)
    this.axios.get('/api/qrcode?filename=' + this.$md5(this.$route.query.file)).then(res => {
      this.QR = res.data.path
    })
  }
}
</script>
<style lang="less" scoped>
.qrWrap{
  margin: 0 auto;
   margin-top: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.2rem;
}
.main2 {
  background: #fff;
}
.content {
  text-align: center;
  padding: 0.2rem;
  .qrcode {
    // margin-top: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    // margin-bottom: 0.2rem;
  }
  .shopname {
    font-size: 0.36rem;
  }
}
</style>
