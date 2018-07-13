import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import home_route from '@/pages/home/home_route'
import HomeIndex from '@/pages/home/index'
import Recommend from '@/pages/home/recommend'
import Details from '@/pages/home/details'
import Notice from '@/pages/home/notice'
import BussinessDetails from '@/pages/home/business-details'
import Food from '@/pages/home/food'
import Location from '@/pages/home/location'
import Map from '@/pages/home/map'
import Pay from '@/pages/home/pay'
import Choice from '@/pages/home/choice'
import ChoiceDetails from '@/pages/home/choice-details'
import MyComment from '@/pages/home/my-comment'
import Exchange from '@/pages/home/exchange'
import ShopQRcode from '@/pages/home/shopqrcode'

// import Scanning from '@/pages/home/scanning'
// 附近商家
import shop_route from '@/pages/shop/shop_route'
import ShopIndex from '@/pages/shop/index'
// 用户中心
import member_route from '@/pages/member/member_route'
import favourite from '@/pages/member/favourite' // 我的收藏
import exchange from '@/pages/member/exchange' // 我要兑换
import exchange_log from '@/pages/member/exchange_log' // 兑换记录
import points from '@/pages/member/points' // 我的积分
import points_log from '@/pages/member/points_log' // 积分记录
import order_list from '@/pages/member/order/order_list' // 订单列表
import order_detail from '@/pages/member/order/order_detail' // 订单详情
import MemberLogin from '@/pages/member/login' // 登录、注册绑定手机
import MemberIndex from '@/pages/member/index'
import phone_update from '@/pages/member/phone_update'// 更改手机号
import settings from '@/pages/member/settings'// 个人设置
import myinfo from '@/pages/member/myinfo'// 个人信息
import realname from '@/pages/member/realname'// 实名认证
import paySetting from '@/pages/member/pay-setting' // 支付设置
import address from '@/pages/member/address'// 收货地址管理
import address_add from '@/pages/member/address_add'// 新增或修改收货地址
import version from '@/pages/member/version'// 版本号
// 文章
import article_route from '@/pages/article/article_route'
import help_list from '@/pages/article/help_list' // 帮助中心
import help_detail from '@/pages/article/help_detail' // 帮助详情
import feedback from '@/pages/article/feedback' // 问题反馈
// ---------------------= 微 卡 =------------------
const WkMain = () => import(/* 根组件 */ '@/pages/weika')

/* 平民 */
const WkCivilian = () => import(/* 首页-平民 */ '@/pages/weika/civilian/civilian')
const WkNoInv = () => import(/* 免邀请码注册 */ '@/pages/weika/civilian/no-invitation')
const WkChooseProducts = () => import(/* 选择微卡商品 */ '@/pages/weika/civilian/choose-products')
const WkPay = () => import(/* 微卡支付 */ '@/pages/weika/civilian/pay')
const WkGoodsDetail = () => import(/* 微卡商品详情 */ '@/pages/weika/goods/goods-detail')
const WkReg1 = () => import(/*  */ '@/pages/weika/civilian/step1')
const WkReg2 = () => import(/*  */ '@/pages/weika/civilian/step2')
// const WkReg3 = () => import(/*  */ '@/pages/weika/civilian/reg/step3')

/* vip */
const WkVip = () => import(/* 首页-VIP */ '@/pages/weika/vip/vip')
const WkWithdraw = () => import(/* 提现 */ '@/pages/weika/vip/withdraw')
const WkWithdrawLog = () => import(/* 提现记录 */ '@/pages/weika/vip/withdraw-log')
const WkRecommendList = () => import(/* 推荐用户列表 */ '@/pages/weika/vip/recommend-list')
const WkCommission = () => import(/* 佣金首页 */ '@/pages/weika/vip/commission')
const WkRecord = () => import(/* 查看战绩 */ '@/pages/weika/vip/record')

Vue.use(VueRouter)

export default new VueRouter({
  // 默认首页
  routes: [{
    path: '/',
    redirect: '/home'
  },
    // 首页
  {
    path: '/home',
    component: home_route,
    children: [{
      path: '',
      name: 'HomeIndex',
      component: HomeIndex,
      meta: {
        title: '首页'
      }
    },
    {
      path: 'recommend',
      name: 'Recommend',
      component: Recommend,
      meta: {
        title: '精品推荐'
      }
    },
    {
      path: 'details',
      name: 'Details',
      component: Details,
      meta: {
        title: '商品详情页'
      }
    }, {
      path: 'food',
      name: 'Food',
      component: Food,
      meta: {
        title: '美食'
      }
    }, {
      path: 'business-details',
      name: 'BussinessDetails',
      component: BussinessDetails,
      meta: {
        title: '商家详情'
      }
    }, {
      path: 'notice',
      name: 'Notice',
      component: Notice,
      meta: {
        title: '公告'
      }
    }, {
      path: 'location',
      name: 'Location',
      component: Location,
      meta: {
        title: '定位'
      }
    }, {
      path: 'map',
      name: 'Map',
      component: Map,
      meta: {
        title: '地图'
      }
    }, {
      path: 'pay',
      name: 'Pay',
      component: Pay,
      meta: {
        title: '消费买单'
      }
    }, {
      path: 'choice',
      name: 'Choice',
      component: Choice,
      meta: {
        title: '精选商家'
      }
    }, {
      path: 'choice-details',
      name: 'ChoiceDetails',
      component: ChoiceDetails,
      meta: {
        title: '商家详情'
      }
    }, {
      path: 'my-comment',
      name: 'MyComment',
      component: MyComment,
      meta: {
        title: '我的评论'
      }
    }, {
      path: 'exchange',
      name: 'Exchange',
      component: Exchange,
      meta: {
        title: '本店兑换'
      }
    }, {
      path: 'shopqrcode',
      name: 'ShopQRcode',
      component: ShopQRcode,
      meta: {
        title: '店铺二维码'
      }
    }
      // {
      //   path: 'scanning',
      //   name: 'Scanning',
      //   component: Scanning,
      //   meta: {
      //     title: '扫一扫'
      //   }
      // }
    ]
  },
    // 附近商家
  {
    path: '/shop',
    component: shop_route,
    children: [{
      path: '',
      name: 'ShopIndex',
      component: ShopIndex,
      meta: {
        title: '附近商家'
      }
    }]
  },
    // 微卡
  {
    path: '/weika',
    component: WkMain,
    children: [{
      path: '',
      name: 'wk_index',
      component: WkCivilian,
      beforeEnter: (to, from, next) => {
        JSON.parse(localStorage.getItem('userInfo')).is_weika === 1 ? next({path: '/weika/vip'}) : next()
      },
      meta: {
        title: '微卡首页'
      }
    },
    {
      path: 'withdraw_log',
      name: 'withdraw_log',
      component: WkWithdrawLog,
      meta: {
        title: '提现记录'
      }
    },
    {
      path: 'withdraw',
      name: 'withdraw',
      component: WkWithdraw,
      meta: {
        title: '提现'
      }
    },
    {
      path: 'vip',
      name: 'vip',
      component: WkVip,
      beforeEnter: (to, from, next) => {
        JSON.parse(localStorage.getItem('userInfo')).is_weika === 1 ? next() : next({path: '/weika'})
      },
      meta: {
        title: '微卡vip首页'
      }
    },
    {
      path: 'recommend_list',
      name: 'recommend_list',
      component: WkRecommendList,
      meta: {
        title: '我的推荐人'
      }
    },
    {
      path: 'commission',
      name: 'commission',
      component: WkCommission,
      meta: {
        title: '佣金首页'
      }
    },
    {
      path: 'record',
      name: 'record',
      component: WkRecord,
      meta: {
        title: '查看战绩'
      }
    }, {
      path: 'no_inv',
      name: 'no_inv',
      component: WkNoInv,
      meta: {
        title: '免邀请码注册微卡'
      }
    }, {
      path: 'pay',
      name: 'pay',
      component: WkPay,
      meta: {
        title: '微卡支付'
      }
    }, {
      path: 'choose_products',
      name: 'choose_products',
      component: WkChooseProducts,
      meta: {
        title: '选择微卡商品'
      }
    },
    {
      path: 'step1',
      name: 'step1',
      component: WkReg1,
      meta: {
        title: '注册创客-第一步'
      }
    },
    {
      path: 'step2',
      name: 'step2',
      component: WkReg2,
      meta: {
        title: '填写个人信息'
      }
    },
    {
      path: 'goods_detail',
      name: 'goods_detail',
      component: WkGoodsDetail,
      meta: {
        title: '商品详情'
      }
    }
    ]
  },
    // 用户中心
  {
    path: '/member',
    component: member_route,
    children: [
      {
        path: '',
        name: 'MemberIndex',
        component: MemberIndex,
        meta: {
          title: '个人中心'
        }
      }, {
        path: 'login',
        name: 'MemberLogin',
        component: MemberLogin,
        meta: {
          title: '登录'
        }
      }, {
        path: 'favourite',
        name: 'favourite',
        component: favourite,
        meta: {
          title: '我的收藏'
        }
      }, {
        path: 'exchange',
        name: 'exchange',
        component: exchange,
        meta: {
          title: '我要兑换'
        }
      }, {
        path: 'exchange_log',
        name: 'exchange_log',
        component: exchange_log,
        meta: {
          title: '兑换记录'
        }
      }, {
        path: 'points',
        name: 'points',
        component: points,
        meta: {
          title: '我的积分'
        }
      }, {
        path: 'points_log',
        name: 'points_log',
        component: points_log,
        meta: {
          title: '积分记录'
        }
      }, {
        path: 'order/order_list/:status',
        name: 'order_list',
        component: order_list,
        meta: {
          title: '我的订单'
        }
      }, {
        path: 'order/order_detail/:id',
        name: 'order_detail',
        component: order_detail,
        meta: {
          title: '帮助详情'
        }
      }, {
        path: 'phone_update',
        name: 'phone_update',
        component: phone_update,
        meta: {
          title: '更绑手机号'
        }
      }, {
        path: 'settings',
        name: 'settings',
        component: settings,
        meta: {
          title: '个人设置'
        }
      }, {
        path: 'myinfo',
        name: 'myinfo',
        component: myinfo,
        meta: {
          title: '个人信息'
        }
      }, {
        path: 'realname',
        name: 'realname',
        component: realname,
        meta: {
          title: '实名认证'
        }
      }, {
        path: 'paysetting/:id',
        name: 'paysetting',
        component: paySetting,
        meta: {
          title: '支付设置'
        }
      }, {
        path: 'address',
        name: 'address',
        component: address,
        meta: {
          title: '收货地址管理'
        }
      }, {
        path: 'address_add',
        name: 'address_add',
        component: address_add,
        meta: {
          title: '新增或修改收货地址'
        }
      }, {
        path: 'version',
        name: 'version',
        component: version,
        meta: {
          title: '版本号'
        }
      }
    ]
  },
    // 文章
  {
    path: '/article',
    component: article_route,
    children: [{
      path: 'help_list',
      name: 'help_list',
      component: help_list,
      meta: {
        title: '帮助中心'
      }
    }, {
      path: 'help_detail/:id',
      name: 'help_detail',
      component: help_detail,
      meta: {
        title: '帮助详情'
      }
    }, {
      path: 'feedback',
      name: 'feedback',
      component: feedback,
      meta: {
        title: '问题反馈'
      }
    }]
  }
  ]
})
