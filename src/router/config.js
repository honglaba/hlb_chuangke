/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
const home_route = () => import('@/pages/home/home_route')
const HomeIndex = () => import('@/pages/home/index')
const Recommend = () => import('@/pages/home/recommend')
const Details = () => import('@/pages/home/details')
const Notice = () => import('@/pages/home/notice')
const BussinessDetails = () => import('@/pages/home/business-details')
const Food = () => import('@/pages/home/food')
const Location = () => import('@/pages/home/location')
const MAP = () => import('@/pages/home/map')
const Pay = () => import('@/pages/home/pay')
const Choice = () => import('@/pages/home/choice')
const Shop = () => import('@/pages/home/shop')
const MyComment = () => import('@/pages/home/my-comment')
const Exchange = () => import('@/pages/home/exchange')
const ShopQRcode = () => import('@/pages/home/shopqrcode')
const Comment = () => import('@/pages/home/comment')
const Search = () => import('@/pages/home/search')
const Result = () => import('@/pages/home/result')
// const Scanning = () => import('@/pages/home/scanning')

// 附近商家
const shop_route = () => import('@/pages/shop/shop_route')
const ShopIndex = () => import('@/pages/shop/index')
// 用户中心
const member_route = () => import('@/pages/member/member_route')
const favourite = () => import('@/pages/member/favourite') // 我的收藏
const exchange = () => import('@/pages/member/exchange') // 我要兑换
const exchange_log = () => import('@/pages/member/exchange_log') // 兑换记录
const points = () => import('@/pages/member/points') // 我的积分
const points_log = () => import('@/pages/member/points_log') // 积分记录
const order_list = () => import('@/pages/member/order/order_list') // 订单列表
const order_detail = () => import('@/pages/member/order/order_detail') // 订单详情
const order_logistics = () => import('@/pages/member/order/order_logistics') // 订单物流详情
const MemberLogin = () => import('@/pages/member/login') // 登录、注册绑定手机
const MemberIndex = () => import('@/pages/member/index')
const phone_update = () => import('@/pages/member/phone_update') // 更改手机号
const settings = () => import('@/pages/member/settings')// 个人设置
const myinfo = () => import('@/pages/member/myinfo')// 个人信息
const realname = () => import('@/pages/member/realname')// 实名认证
const paySetting = () => import('@/pages/member/pay-setting')// 支付设置
const address = () => import('@/pages/member/address')// 收货地址管理
const address_add = () => import('@/pages/member/address_add')// 新增或修改收货地址
const version = () => import('@/pages/member/version')// 版本号
// 文章
const article_route = () => import('@/pages/article/article_route')
const help_list = () => import('@/pages/article/help_list')// 帮助中心
const help_detail = () => import('@/pages/article/help_detail')// 帮助详情
const feedback = () => import('@/pages/article/feedback') // 问题反馈

const PayFinish = () => import(/* 根组件 */ '@/pages/home/pay-finish')
// ---------------------= 微 卡 =------------------
const WkMain = () => import(/* 微卡根组件 */ '@/pages/weika')

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
        title: '首页',
        keepAlive: true
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
        title: '美食',
        keepAlive: true
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
      name: 'map',
      component: MAP,
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
    },
    {
      path: 'payfinish/:id',
      name: 'payfinish',
      component: PayFinish,
      meta: {
        title: '支付完成页面'
      }
    },
    {
      path: 'choice',
      name: 'Choice',
      component: Choice,
      meta: {
        title: '精选商家'
      }
    }, {
      path: 'shop',
      name: 'Shop',
      component: Shop,
      meta: {
        title: '商家',
        keepAlive: false
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
    }, {
      path: 'comment',
      name: 'Comment',
      component: Comment,
      meta: {
        title: '评论列表'
      }
    }, {
      path: 'search',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜索'
      }
    }, {
      path: 'result',
      name: 'Result',
      component: Result,
      meta: {
        title: '搜索结果'
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
        title: '附近商家',
        keepAlive: true
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
        path: 'order/order_logistics/:id',
        name: 'order_logistics',
        component: order_logistics,
        meta: {
          title: '订单物流详情'
        }
      },
      {
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
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log(savedPosition)
  }
})
