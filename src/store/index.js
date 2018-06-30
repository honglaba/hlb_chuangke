import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import userModule from './modules/user'
import appModule from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: /* 用户主要信息 */'',
    receiverAddress: /* 收货地址 */'',
    details: '',
    exchange: '',
    comments: ''
  },
  getters: {
    userInfoGetter: (state) => {
      return state.userInfo
    },
    receiverAddressGetter (state) {
      return state.receiverAddress
    },
    detailsGetter (state) {
      return state.details
    }
  },
  actions,
  mutations,
  modules: {
    userModule,
    appModule
  }
})
