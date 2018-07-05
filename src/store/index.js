import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'
import userModule from './modules/user' // 用户系列
import appModule from './modules/app' // 商城系列

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    userModule,
    appModule
  }
})
