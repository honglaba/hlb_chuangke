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
import Scanning from '@/pages/home/scanning'
// 附近商家
import shop_route from '@/pages/shop/shop_route'
import ShopIndex from '@/pages/shop/index'
// 微卡
import weika_route from '@/pages/weika/weika_route'
import WeikaIndex from '@/pages/weika/index' // 默认首页
import WeikaVip from '@/pages/weika/vip' // vip首页
import WeikaReg from '@/pages/weika/reg' // 邀请注册微卡
import WeikaPay from '@/pages/weika/pay' // 微卡支付
import withdraw from '@/pages/weika/withdraw' // 提现
import withdraw_log from '@/pages/weika/withdraw_log' // 提现记录
import recommend_list from '@/pages/weika/recommend_list' // 推荐用户列表
import income from '@/pages/weika/income' // 佣金首页
import income_zhanji from '@/pages/weika/income_zhanji' // 查看战绩
// 用户中心
import member_route from '@/pages/member/member_route'
import Regstep1 from '@/pages/member/reg/reg_step1'
import Regstep2 from '@/pages/member/reg/reg_step2'
import Regstep3 from '@/pages/member/reg/reg_step3'
import favourite from '@/pages/member/favourite' // 我的收藏
import exchange from '@/pages/member/exchange' // 我要兑换
import exchange_log from '@/pages/member/exchange_log' // 兑换记录
import points from '@/pages/member/points' // 我的积分
import points_log from '@/pages/member/points_log' // 积分记录
import myorder from '@/pages/member/myorder' // 积分记录
import MemberLogin from '@/pages/member/login' // 登录、注册绑定手机
import MemberIndex from '@/pages/member/index'
import phone_update from '@/pages/member/phone_update'// 更改手机号
import settings from '@/pages/member/settings'// 个人设置
import myinfo from '@/pages/member/myinfo'// 个人信息
// 文章
import article_route from '@/pages/article/article_route'
import help_list from '@/pages/article/help_list' // 帮助中心
import help_detail from '@/pages/article/help_detail' // 帮助详情
import feedback from '@/pages/article/feedback' // 问题反馈

// cookie
import Cookies from 'js-cookie'
import apiList from '@/store/actions'

const Author = () =>
  import('@/components/author')

const OptionsPageSetting = () =>
  import('@/components/optionPages/index')
const OptionPageFull = () =>
  import('@/components/optionPages/settingA')

Vue.use(VueRouter)

const router = new VueRouter({
  // 默认首页
  routes: [{
    path: '',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: {
      title: '首页'
    }
  },
    // 首页
  {
    path: '/home',
    component: home_route,
    children: [{
      path: 'index',
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
        title: '精品推荐 '
      }
    },
    {
      path: 'details',
      name: 'Details',
      component: Details,
      meta: {
        title: '商品详情页 '
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
      path: 'scanning',
      name: 'Scanning',
      component: Scanning,
      meta: {
        title: '扫一扫'
      }
    }
    ]
  },
    // 附近商家
  {
    path: '/shop',
    component: shop_route,
    children: [{
      path: 'index',
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
    component: weika_route,
    children: [{
      path: 'index',
      name: 'WeikaIndex',
      component: WeikaIndex,
      meta: {
        title: '微卡首页'
      }
    },
    {
      path: 'withdraw_log',
      name: 'withdraw_log',
      component: withdraw_log,
      meta: {
        title: '提现记录'
      }
    },
    {
      path: 'withdraw',
      name: 'withdraw',
      component: withdraw,
      meta: {
        title: '提现'
      }
    },
    {
      path: 'vip',
      name: 'WeikaVip',
      component: WeikaVip,
      meta: {
        title: '微卡vip首页'
      }
    },
    {
      path: 'recommend_list',
      name: 'recommend_list',
      component: recommend_list,
      meta: {
        title: '我的推荐'
      }
    },
    {
      path: 'income',
      name: 'income',
      component: income,
      meta: {
        title: '佣金首页'
      }
    },
    {
      path: 'income_zhanji',
      name: 'income_zhanji',
      component: income_zhanji,
      meta: {
        title: '查看战绩'
      }
    },

    {
      path: 'reg',
      name: 'WeikaReg',
      component: WeikaReg,
      meta: {
        title: '注册创客微卡'
      }
    }, {
      path: 'pay',
      name: 'WeikaPay',
      component: WeikaPay,
      meta: {
        title: '微卡支付'
      }
    }
    ]
  },
    // 用户中心
  {
    path: '/member',
    component: member_route,
    children: [{
      path: 'login',
      name: 'MemberLogin',
      component: MemberLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: 'index',
      name: 'MemberIndex',
      component: MemberIndex,
      meta: {
        title: '个人中心'
      }
    }, {
      path: 'reg/reg_step1',
      name: 'Reg_step1',
      component: Regstep1,
      meta: {
        title: '注册创客-第一步'
      }
    },
    {
      path: 'reg/reg_step2',
      name: 'Reg_step2',
      component: Regstep2,
      meta: {
        title: '填写推荐人信息'
      }
    },
    {
      path: 'reg/reg_step3',
      name: 'Reg_step3',
      component: Regstep3,
      meta: {
        title: '填写个人信息'
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
      path: 'myorder/:id',
      name: 'myorder',
      component: myorder,
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
  },
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/options',
    component: OptionsPageSetting,
    children: [{
      path: '',
      component: OptionPageFull
    }]
  }
  ]
})

// ceshi cookie
router.beforeEach((to, from, next) => {
  // 判断是否已经登录且前往的页面不是登录页
  // 判断是否已经登录且前往的是登录页
  if ((to.path === '/options' || to.path === '/others')) {
    if (!Cookies.get('accessToken')) {
      apiList.HTTP_WxAccredit(window.location.origin + '/aaaaa' + to.path).then(res => { // aaaaa = #
        window.location.href = res.redirect
      })
      return
    }
  }
  next()
})

export default router
