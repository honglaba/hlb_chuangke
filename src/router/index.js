import Vue from 'vue'
import Router from 'vue-router'
import MemberLogin from '@/pages/member/login'
import MemberIndex from '@/pages/member/index'
import HomeIndex from '@/pages/home/index'
import Recommend from '@/pages/home/recommend'
import Details from '@/pages/home/details'
import Notice from '@/pages/home/notice'
import BussinessDetails from '@/pages/home/business-details'
import ShopIndex from '@/pages/shop/index'
import WeikaIndex from '@/pages/weika/index'
import WeikaVip from '@/pages/weika/vip'
import WeikaReg from '@/pages/weika/reg'
import Regstep1 from '@/pages/member/reg/reg_step1'
import Regstep2 from '@/pages/member/reg/reg_step2'
import Regstep3 from '@/pages/member/reg/reg_step3'
import WeikaPay from '@/pages/weika/pay'
import withdraw from '@/pages/weika/withdraw' // 提现
import withdraw_log from '@/pages/weika/withdraw_log' // 提现记录
import Food from '@/pages/home/food'
import Location from '@/pages/home/location'
import Map from '@/pages/home/map'
import Pay from '@/pages/home/pay'
import Choice from '@/pages/home/choice'
import ChoiceDetails from '@/pages/home/choice-details'

const Author = () =>
  import('@/components/author')

const OptionsPageSetting = () =>
  import('@/components/optionPages/index')
const OptionPageFull = () =>
  import('@/components/optionPages/settingA')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/member/login',
    name: 'MemberLogin',
    component: MemberLogin,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/member/index',
    name: 'MemberIndex',
    component: MemberIndex,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/shop/index',
    name: 'ShopIndex',
    component: ShopIndex,
    meta: {
      title: '附近商家'
    }
  },
  {
    path: '/weika/index',
    name: 'WeikaIndex',
    component: WeikaIndex,
    meta: {
      title: '微卡首页'
    }
  },
  {
    path: '/weika/withdraw_log',
    name: 'withdraw_log',
    component: withdraw_log,
    meta: {
      title: '提现记录'
    }
  },
  {
    path: '/weika/withdraw',
    name: 'withdraw',
    component: withdraw,
    meta: {
      title: '提现'
    }
  },
  {
    path: '/weika/vip',
    name: 'WeikaVip',
    component: WeikaVip,
    meta: {
      title: '微卡vip首页'
    }
  },
  {
    path: '/home/index',
    name: 'HomeIndex',
    component: HomeIndex,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/weika/reg',
    name: 'WeikaReg',
    component: WeikaReg,
    meta: {
      title: '注册创客微卡'
    }
  },
  {
    path: '/member/reg/reg_step1',
    name: 'Reg_step1',
    component: Regstep1,
    meta: {
      title: '注册创客-第一步'
    }
  },
  {
    path: '/member/reg/reg_step2',
    name: 'Reg_step2',
    component: Regstep2,
    meta: {
      title: '填写推荐人信息'
    }
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
  },
  {
    path: '/member/reg/reg_step3',
    name: 'Reg_step3',
    component: Regstep3,
    meta: {
      title: '填写个人信息'
    }
  },
  {
    path: '/weika/pay',
    name: 'WeikaPay',
    component: WeikaPay,
    meta: {
      title: '填写个人信息'
    }
  },
  {
    path: '/home/recommend',
    name: 'Recommend',
    component: Recommend,
    meta: {
      title: '精品推荐 '
    }
  },
  {
    path: '/home/details',
    name: 'Details',
    component: Details,
    meta: {
      title: '商品详情页 '
    }
  }, {
    path: '/home/food',
    name: 'Food',
    component: Food,
    meta: {
      title: '美食'
    }
  }, {
    path: '/home/business-details',
    name: 'BussinessDetails',
    component: BussinessDetails,
    meta: {
      title: '商家详情'
    }
  }, {
    path: '/home/notice',
    name: 'Notice',
    component: Notice,
    meta: {
      title: '公告'
    }
  }, {
    path: '/home/location',
    name: 'Location',
    component: Location,
    meta: {
      title: '定位'
    }
  }, {
    path: '/home/map',
    name: 'Map',
    component: Map,
    meta: {
      title: '地图'
    }
  }, {
    path: '/home/pay',
    name: 'Pay',
    component: Pay,
    meta: {
      title: '消费买单'
    }
  }, {
    path: '/home/choice',
    name: 'Choice',
    component: Choice,
    meta: {
      title: '精选商家'
    }
  }, {
    path: '/home/choice-details',
    name: 'ChoiceDetails',
    component: ChoiceDetails,
    meta: {
      title: '商家详情'
    }
  }

  ]
})
