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
// import Scanning from '@/pages/home/scanning'
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
import realname from '@/pages/member/realname'// 实名认证

import paySetting from '@/pages/member/pay-setting' // 支付设置

import address from '@/pages/member/address'// 收货地址管理
import address_add from '@/pages/member/address_add'// 新增或修改收货地址

// 文章
import article_route from '@/pages/article/article_route'
import help_list from '@/pages/article/help_list' // 帮助中心
import help_detail from '@/pages/article/help_detail' // 帮助详情
import feedback from '@/pages/article/feedback' // 问题反馈

// cookie
import Cookies from 'js-cookie'
import apiList from '@/store/actions'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
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
    component: weika_route,
    children: [{
      path: '',
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
      },
      {
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
      }, {
        path: 'realname',
        name: 'realname',
        component: realname,
        beforeEnter: (to, from, next) => {
          JSON.parse(localStorage.getItem('userInfo')).real_name ? next({path: from.fullPath}) : next()
        },
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

router.beforeEach((To, From, next) => {
  let historyTargetPath = localStorage.getItem('historyTargetPath') // 每一次跳转都获取该参数
  let specialPaths = ['/member', '/member/settings'] // 这里可以添加那些需要判断登录才能进入的界面! 只能写path
  let isMatched = false

  function getRedirectUrl () {
    apiList.HTTP_WxAccredit(window.location.origin + '/aaaaa' + From.path).then(res => { // aaaaa = #
      window.location.href = res.redirect
    })
  }

  if (!To.name) { // 路由不存在时跳转from页
    next(From.path)
    return
  }

  if (historyTargetPath && !localStorage.getItem('userInfo')) { // 如果存在历史跳转地址且没有用户信息时,说明当前为授权状态,处理url
    let local = window.location.href
    let hisUrl = historyTargetPath
    localStorage.clear() // 授权状态全部初始化
    if (
      local.indexOf('access_token') > 0 &&
      local.indexOf('refresh_token') > 0
    ) {
      // 如果url为后台重定向带参形式,则进行用户信息的获取
      // slice
      let list = local.slice(local.indexOf('?') + 1).split('&')
      let hashes = {}
      for (let i = 0; i < list.length; i++) {
        let items = list[i].split('=')
        hashes[items[0]] = items[1]
      }

      localStorage.setItem('client_id', hashes.client_id)

      // cookie
      Cookies.set('accessToken', hashes.access_token, { expires: 1 / 36 })
      // Cookies.set('accessToken', hashes.access_token, { expires: new Date(new Date().getTime() + 5 * 1000) })
      Cookies.set('refreshToken', hashes.refresh_token, { expires: 10 }) // 设置10天过期
      apiList.HTTP_UserInfo()
        .then(res => {
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          store.commit('SAVE_USER_INFO', res.data)
          next({path: hisUrl})
        })
      return
    }
  }

  if (!localStorage.getItem('userInfo')) { // 没有用户信息
    /* 初始化 */
    Cookies.remove('refreshToken')
    Cookies.remove('accessToken')
    localStorage.clear()

    if (window.navigator.userAgent.match(/MicroMessenger/i)) { // wxchat
      localStorage.setItem('historyTargetPath', To.path)
      getRedirectUrl()
      return
    } else {
      let Path = To.fullPath

      if (Path !== '/' && Path.substr(-1, 1) === '/') {
        Path = Path.slice(0, Path.length - 1)
      }
      specialPaths.forEach(e => {
        if (e === Path) {
          isMatched = true
        }
      })

      if (isMatched) {
        // 未定
        return
      }
    }
  }

  next() // 无阻碍直接跳转
})

export default router
