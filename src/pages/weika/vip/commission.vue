<template>
  <div class="app">
      <!-- <x-header :left-options="{backText: ''}" title="我的佣金"></x-header> -->
    <div class="main2">
      <div class="content">
        <tab bar-active-color="#f5222d" active-color="#f5222d" custom-bar-width=".34rem">
          <tab-item @on-item-click="handler" @click.native="tab" data-id=1 selected>累计佣金</tab-item>
          <tab-item @on-item-click="handler" @click.native="tab" data-id=2>历史获取</tab-item>
        </tab>

        <div class="leiji-list" v-if="nowSeen==1">
          <div class="box1 pd20">
            <div class="box">
              <div class="left">
                <p class="c999">累计佣金（元）</p>
                <p>100</p>
              </div>
              <div class="right">
                <p class="c999">累计可提现佣金（元）</p>
                <p>80</p>
                <p class="c999">累计可用代用金（元）</p>
                <p>20</p>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="c999">剩余可用（元）</p>
                <p>100</p>
              </div>
              <div class="right">
                <p class="c999">剩余可提现佣金（元）</p>
                <p>80</p>
                <p class="c999">剩余可用代用金（元）</p>
                <p>20</p>
              </div>
            </div>
            <div class="caozuo">
              <span>
                <router-link to="income_zhanji">查看战绩</router-link>
              </span>
              <span>
                <a href="#">查看佣金使用明细</a>
              </span>
            </div>
          </div>
          <div class="box2">
            <div class="tb">
              <v-chart :data="data">
                <v-scale y :options="yOptions" />
                <v-tooltip disabled />
                <v-pie :radius="0.85" series-field="name" />
                <v-legend :options="legendOptions" />
              </v-chart>
            </div>
            <ul class="fenleilist pd20">
              <li>
                <div class="tit">创客新用户邀请佣金
                  <span>100</span>
                </div>
                <div class="warper">
                  <p>
                    <span>已取现佣金</span>
                    <span class="c333">80</span>
                  </p>
                  <p>
                    <span>已用代用金</span>
                    <span class="c333">20</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="tit">邀请的用户平台消费佣金
                  <span>100</span>
                </div>
              </li>
              <li>
                <div class="tit">额外创客奖励佣金
                  <span>200</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="lishi-list" v-if="nowSeen==2">
          <div class="tongji">
            <p class="c999">历史获取总佣金（元）</p>
            <p>2888.64</p>
          </div>
          <div class="mxbox">
            <p class="c333 pd20">历史获取佣金明细</p>
            <Accordion v-for="(item, index) in mxdataList" :key="index" :title="item" :list="item.mingxi"></Accordion>
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
const map = {
  创客新用户邀请佣金: '30%',
  邀请的用户平台消费佣金: '18%',
  额外奖励佣金: '52%'
}
export default {
  data () {
    return {
      nowSeen: '1',
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      map,
      data: [
        { name: '创客新用户邀请佣金', change: 0.3, a: '1' },
        { name: '邀请的用户平台消费佣金', percent: 0.18, a: '1' },
        { name: '额外奖励佣金', percent: 0.52, a: '1' }
      ],
      mxdataList: [
        {
          riqi: '2018-05-28',
          mingxi: [
            { name: '创客新用户邀请佣金', change: '+20' },
            { name: '邀请的用户平台消费佣金', change: '+30' },
            { name: '额外奖励佣金', change: '+40' }
          ]
        },
        {
          riqi: '2017-05-06',
          mingxi: [
            { name: '创客新用户邀请佣金', change: '+50' },
            { name: '邀请的用户平台消费佣金', change: '+60' },
            { name: '额外奖励佣金', change: '+70' }
          ]
        }
      ]
    }
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
  },
  methods: {
    toggleList: function (e) {
      this.isDisplay = !this.isDisplay
    },
    tab: function (e) {
      console.log(e.target.getAttribute('data-id'))
      this.nowSeen = e.target.getAttribute('data-id')
    }
  }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
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
