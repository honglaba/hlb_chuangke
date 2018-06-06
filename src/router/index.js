import Vue from 'vue'
import Router from 'vue-router'
import MemberLogin from '@/pages/member/login'
import MemberIndex from '@/pages/member/index'
import HomeIndex from '@/pages/home/index'
import Recommend from '@/pages/home/recommend'
import Food from '@/pages/home/food'
import Details from '@/pages/home/details'
import ShopIndex from '@/pages/shop/index'
import WeikaIndex from '@/pages/weika/index'
import WeikaVip from '@/pages/weika/vip'
import WeikaReg from '@/pages/weika/reg'
import WeikaRegstep1 from '@/pages/weika/reg_step1'
import WeikaRegstep2 from '@/pages/weika/reg_step2'
import WeikaRegstep3 from '@/pages/weika/reg_step3'
import WeikaPay from '@/pages/weika/pay'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/weika/reg_step1',
      name: 'WeikaReg_step1',
      component: WeikaRegstep1,
      meta: {
        title: '注册创客微卡'
      }
    },
    {
      path: '/weika/reg_step2',
      name: 'WeikaReg_step2',
      component: WeikaRegstep2,
      meta: {
        title: '填写推荐人信息'
      }
    },
    {
      path: '/weika/reg_step3',
      name: 'WeikaReg_step3',
      component: WeikaRegstep3,
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
      component:Recommend,
      meta: {
        title: '精品推荐 '
      }
    },
    {
      path: '/home/details',
      name: 'Details',
      component:Details,
      meta: {
        title: '商品详情页 '
      }
    },{
      path: '/home/food',
      name: 'Food',
      component:Food,
      meta: {
        title: '商品详情页 '
      }
    }
  ]
})
