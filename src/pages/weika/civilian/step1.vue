<template>
  <div class="app">
    <div class="main2">
      <div class="content pd20">
        <div class="xuanze">
          <ul>
            <li>
              <!-- <router-link :to="{path: '/weika/step2'}" tag="img" :src="imgs.A"></router-link><br>我有推荐人 -->
              <img :src="imgs.A" @click="_hstep(true)"><br>我有推荐人
            </li>
            <li>
              <!-- <router-link :to="{path: '/weika/no_inv'}" tag="img" :src="imgs.B"></router-link><br>我没有推荐人 -->
              <img :src="imgs.B" @click="_hstep(false)"><br>我没有推荐人
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      imgs: {
        A: require('../images/you.png'),
        B: require('../images/meiyou.png')
      }
    }
  },
  computed: {
    ...mapGetters(['WkLoop'])
  },
  created () {
    if (this.WkLoop !== 2) this.$router.push({path: '/weika'})
  },
  methods: {
    _hstep (boolean) {
      this.updateStep(3)
      boolean ? this.$router.push({path: '/weika/step2'}) : this.$router.push({path: '/weika/no_inv'})
    },
    ...mapMutations({updateStep: 'UPDATE_WEIKA_LOOP'})
  }
}
</script>
<style lang="less" scoped>
.xuanze {
  color: #333;
  ul {
    li {
      color: #333;
      display: block;
      font-size: 0.4rem;
      text-align: center;
      img {
        width: 1.8rem;
        height: 1.84rem;
        margin-bottom: 0.24rem;
      }
      &:first-child {
        margin-top: 1.3rem;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
