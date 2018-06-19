import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  getters: {
    userInfoGetter: (state) => {
      return state.userInfo
    }
  },
  actions,
  mutations
})
