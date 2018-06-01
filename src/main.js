// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastClick from 'fastclick'
import Header from "@/components/header";
import Footer from "@/components/footer";

fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.axios=axios
//全局组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
