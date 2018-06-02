import Vue from 'vue'
import Router from 'vue-router'
import MemberLogin from '@/pages/member/login'
import MemberIndex from '@/pages/member/index'
import HomeIndex from '@/pages/home/index'
import ShopIndex from '@/pages/shop/index'
import WeikaIndex from '@/pages/weika/index'
import WeikaRegstep1 from '@/pages/weika/Reg_step1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/home/index',
      name: 'HomeIndex',
      component: HomeIndex,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/weika/reg_step1',
      name: 'WeikaReg_step1',
      component: WeikaRegstep1,
      meta: {
        title: '注册创客微卡'
      }
    }
  ]
})
