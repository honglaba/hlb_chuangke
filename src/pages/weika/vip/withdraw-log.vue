<template>
  <div class="app">
   <!-- <x-header :left-options="{backText: ''}" title="提现记录"></x-header> -->
    <div class="main" v-if="Object.keys(this.defaultData).length > 0">
      <div class="content pd20">
        <div class="txbox">
          <p class="lstotal">{{ defaultData.total_amount }}</p>
          <p class="shuoming">历史提现总额(元)</p>
        </div>
        <div class="txlist">
          <ul>
            <li :class="item.bindClass" v-for="item in defaultData.data" :key="item.id">
              <div class="left">
                <span class="status">{{ item.audit_status }}</span>
                <span>{{ item.created_at }}</span>
              </div>
              <div class="right">
                <span class="biandong">-{{ item.amount }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footerx></Footerx>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      defaultData: {}
    }
  },
  created () {
    this.Wk_WithdrawLog().then(res => {
      res.data.data.forEach(cb => {
        if (cb.status === 1) {
          cb.bindClass = 'wancheng'
        } else if (cb.status === 2) {
          cb.bindClass = 'shibai'
        } else {
          cb.bindClass = 'jinxingzhong'
        }
      })

      this.defaultData = res.data
    })
  },
  methods: {
    ...mapActions(['Wk_WithdrawLog'])
  }
}
</script>
<style lang="less" scoped>
.main {
  background: #ffffff;
}
.txbox {
  padding: 0.5rem 0;
  text-align: center;
  .lstotal {
    font-size: 0.64rem;
    color: #000000;
  }
  .shuoming {
    color: #999999;
    font-size: 0.24rem;
  }
}
.txlist ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: #e6e6e6 dashed 1px;
  padding: 0.2rem 0;
  align-items: center;
  .left {
    position: relative;
    span {
      display: block;
      &:first-child {
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
      }
      &:nth-child(2) {
        color: #999;
      }
    }
  }
  &.wancheng {
    .status {
      color: #0aa42a;
    }
    .right {
      color: #0aa42a;
    }
  }
  &.jinxingzhong {
    .status {
      color: #ff7f32;
    }
    .right {
      color: #ff7f32;
    }
  }
  &.shibai {
    .status {
      color: #999999;
    }
    .right {
      color: #999999;
    }
  }
}
</style>
