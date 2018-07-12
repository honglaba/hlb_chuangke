// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import fastClick from 'fastclick'
import Headerx from '@/components/common/headerx/headerx'
import myHeader from 'components/common/headerx/header'
import Footerx from '@/components/common/footerx/footerx'
import {XHeader, ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin, Loading} from 'vux'
// import BScroll from 'better-scroll'
// import VueScroller from 'vue-scroller'

// Vue.use(VueScroller)
fastClick.attach(document.body)

// 自定义请求头
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
Vue.config.productionTip = false
Vue.prototype.axios = axios

// 全局组件
Vue.component('my-header', myHeader) // 自定义头部
Vue.component('Headerx', Headerx)
Vue.component('Footerx', Footerx)
Vue.component('x-header', XHeader)
Vue.component('x-loading', Loading)
// Vue.component('BScroll', BScroll)

Vue.use(ToastPlugin, {type: 'text', time: 1000})
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)

Vue.filter('mobilePhoneFilter', val => { // 手机号码过滤器
  if (!val) return '未绑定'
  return val.slice(0, 3) + '****' + val.slice(7, 12)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
