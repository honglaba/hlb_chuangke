// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import fastClick from 'fastclick'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Headerx from '@/components/common/headerx/headerx'
import Footerx from '@/components/common/footerx/footerx'

fastClick.attach(document.body)

// 自定义请求头
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false
Vue.prototype.axios = axios
// 全局组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Headerx', Headerx)
Vue.component('Footerx', Footerx)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
