import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'
import userModule from './modules/user' // 用户系列
import appModule from './modules/app' // 商城系列

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict/* 严格模式 */,
  state,
  getters,
  actions,
  mutations,
  modules: {
    userModule,
    appModule
  }
})
