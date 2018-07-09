import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'
import userModule from './modules/user' // 用户系列
import appModule from './modules/app' // 商城系列
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug/* 严格模式-更改状态时一定要Mutation */,
  plugins: debug ? [createLogger()] : [], /* 开发状态-控制台log */
  state,
  getters,
  actions,
  mutations,
  modules: {
    userModule,
    appModule
  }
})
