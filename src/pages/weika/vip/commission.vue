<template>
  <div id="weika-commission" class="ck-better">
    <my-header :Title="'佣金首页'" :left-options="{preventGoBack: true}" @on-click-back="routeBack"></my-header>
    <div class="main2">
      <div class="content">
        <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
          <tab-item @click.native="tab(1)" selected>累计佣金</tab-item>
          <tab-item @click.native="tab(2)">历史获取</tab-item>
        </tab>

        <div class="leiji-list" v-if="nowSeen === 1 && Object.keys(countMoney).length > 0">
          <div class="box1 pd20">
            <div class="box">
              <div class="left">
                <p class="c999">累计佣金（元）</p>
                <p>{{ countMoney.grand_total_money }}</p>
              </div>
              <div class="right">
                <p class="c999">累计可提现佣金（元）</p>
                <p>{{ countMoney.grand_withdraw_money }}</p>
                <p class="c999">累计可用代用金（元）</p>
                <p>{{ countMoney.grand_vouchers }}</p>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="c999">剩余可用（元）</p>
                <p>{{ countMoney.total_money }}</p>
              </div>
              <div class="right">
                <p class="c999">剩余可提现佣金（元）</p>
                <p>{{ countMoney.withdraw_money }}</p>
                <p class="c999">剩余可用代用金（元）</p>
                <p>{{ countMoney.vouchers }}</p>
              </div>
            </div>

            <!-- 跳转 -->
            <div class="caozuo">
              <span>
                <router-link to="record">查看战绩</router-link>
              </span>
              <span>
                <a href="javascript:;">查看佣金使用明细</a>
              </span>
            </div>

          </div>
          <div class="box2">
            <div class="tb">
              <v-chart :data="dataPie">
                <v-scale y :options="yOptions" />
                <v-tooltip disabled />
                <v-pie :radius="0.85" series-field="name" />
                <v-legend :options="legendOptions" />
              </v-chart>
            </div>
            <ul class="fenleilist pd20">
              <li>
                <div class="tit">创客新用户邀请佣金
                  <span>{{ countMoney.invite_commission }}</span>
                </div>
                <!-- <div class="warper">
                  <p>
                    <span>已取现佣金</span>
                    <span class="c333">{{ countMoney.invite_commission }}</span>
                  </p>
                  <p>
                    <span>已用代用金</span>
                    <span class="c333">{{ countMoney.invite_commission }}</span>
                  </p>
                </div> -->
              </li>
              <li>
                <div class="tit">邀请的用户平台消费佣金
                  <span>{{ countMoney.invite_commission }}</span>
                </div>
              </li>
              <!-- <li>
                <div class="tit">额外创客奖励佣金
                  <span>{{ countMoney.invite_commission }}</span>
                </div>
              </li> -->
            </ul>
          </div>
        </div>

        <div class="lishi-list" v-if="nowSeen === 2 && Object.keys(hisMoney).length > 0">
          <div class="tongji">
            <p class="c999">历史获取总佣金（元）</p>
            <p>{{ hisMoney.total_money }}</p>
          </div>
          <div class="mxbox" v-if="hisMoney.total_money > 0">
            <p class="c333 pd20">历史获取佣金明细</p>
            <Accordion v-for="(list, index) in hisMoney.data" :list="list" :key="index"></Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from 'components/accordion'
import {
  Tab,
  TabItem,
  VChart,
  VLine,
  VArea,
  VTooltip,
  VLegend,
  VBar,
  VPie,
  VScale
} from 'vux'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      countMoney: /* 累计佣金 */{},
      hisMoney: /* 历史佣金 */{},
      nowSeen: 1,
      legendOptions: {},
      yOptions: {
        // formatter (val) {
        //   return val * 100 + '%'
        // }
      },
      dataPie: []
    }
  },
  async created () {
    await this.Vip_Commission()
      .then(res => {
        let inviteCommission = res.data.invite_commission_per
        let consumptionCommissionPer = res.data.consumption_commission_per
        let mapCanvas = {
          '创客新用户邀请佣金': inviteCommission + '%',
          '邀请的用户平台消费佣金': consumptionCommissionPer + '%'
        }

        this.dataPie = [
          { name: '创客新用户邀请佣金', percent: inviteCommission, a: '1' },
          { name: '邀请的用户平台消费佣金', percent: consumptionCommissionPer, a: '1' }
        // { name: '额外奖励佣金', percent: 0.52, a: '1' }
        ]

        this.legendOptions = {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + mapCanvas[val]
          }
        }
        this.countMoney = res.data
      })
    await this.Vip_CommissionHistory(0)
      .then(res => {
        this.hisMoney = res.data
      })
    // await this.Vip_CommissionHistory(1)
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  methods: {
    toggleList (e) {
      this.isDisplay = !this.isDisplay
    },
    tab (id) {
      this.nowSeen = id
    },
    routeBack () {
      this.$router.push({path: '/weika/vip'})
    },
    ...mapActions(['Vip_Commission', 'Vip_CommissionHistory'])
  },
  components: {
    Tab,
    TabItem,
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    VPie,
    VScale,
    Accordion
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.content {
  margin-bottom: 1rem;
}
.leiji-list {
  margin-top: 0.2rem;
  .box1 {
    background: #ffffff;
    .box {
      border-bottom: #e6e6e6 dashed 1px;
      display: flex;
      padding: 0.2rem 0;
      .left {
        flex: 1;
        p:nth-child(2) {
          margin-top: 0.4rem;
          text-align: center;
          color: #f5222d;
          font-size: 0.52rem;
          font-weight: bold;
        }
      }
      .right {
        flex: 1;
        p:nth-child(2) {
          font-size: 0.32rem;
          margin-bottom: 0.2rem;
        }
        p:nth-child(4) {
          font-size: 0.32rem;
        }
      }
    }
    .box:nth-child(2) {
      border-bottom: none;
      .left p:nth-child(2) {
        color: #0aa42a;
      }
    }
    .caozuo {
      display: flex;
      justify-content: space-around;
      margin-top: 0.2rem;
      span {
        a {
          display: block;
          color: #333;
          border: #e6e6e6 solid 1px;
          border-radius: 1rem;
          height: 0.6rem;
          line-height: 0.6rem;
          padding: 0 0.3rem;
        }
      }
    }
  }
  .box2 {
    background: #ffffff;
    margin-top: 0.2rem;
    min-height: 200px;
    .tb {
      position: relative;
      height: 3rem;
      overflow: hidden;
      div {
        position: absolute;
        top: -1.2rem;
      }
    }
    .fenleilist {
      li {
        padding-left: 0.6rem;
        .tit {
          border-bottom: #e6e6e6 dashed 1px;
          padding: 0.2rem 0;
          position: relative;
          font-size: 0.3rem;
          &::before {
            display: inline-block;
            position: absolute;
            left: -0.5rem;
            top: 0.24rem;
            content: "";
            width: 0.3rem;
            height: 0.3rem;
            background: url("../images/yonghu.png") center no-repeat;
            background-size: contain;
          }
          span {
            float: right;
          }
        }
        &:nth-child(2) .tit::before {
          background: url("../images/pingtai.png") center no-repeat;
          background-size: contain;
        }
        &:nth-child(3) .tit {
          border-bottom: none;
        }
        &:nth-child(3) .tit::before {
          background: url("../images/erwai.png") no-repeat;
          background-size: contain;
        }
        .warper {
          padding: 0.1rem 0;
          color: #999999;
          line-height: 0.5rem;
          p {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
.lishi-list {
  margin-top: 0.2rem;
  .tongji {
    background: #ffffff;
    padding: 0.2rem;
    p:nth-child(1) {
      margin-bottom: 0.2rem;
      font-size: 0.3rem;
    }
    p:nth-child(2) {
      font-size: 0.48rem;
    }
  }
  .mxbox {
    p {
      background: #ffffff;
      border-bottom: #e6e6e6 solid 1px;
      font-size: 0.3rem;
    }
  }
}
</style>
