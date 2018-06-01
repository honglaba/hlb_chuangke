import Vue from 'vue'
import Router from 'vue-router'
import MemberLogin from '@/pages/member/login'
import MemberIndex from '@/pages/member/index'
import HomeIndex from '@/pages/home/index'
import ShopIndex from '@/pages/shop/index'
import WeikaIndex from '@/pages/weika/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemberLogin',
      component: MemberLogin
    },
    {
      path: '/member/index',
      name: 'MemberIndex',
      component: MemberIndex
    },
    {
      path: '/shop/index',
      name: 'ShopIndex',
      component: ShopIndex
    },
    {
      path: '/weika/index',
      name: 'WeikaIndex',
      component: WeikaIndex
    },
    {
      path: '/home/index',
      name: 'HomeIndex',
      component: HomeIndex
    }
  ]
})
