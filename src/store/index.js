import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: /* 用户主要信息 */'',
    receiverAddress: /* 收货地址 */'',
    choiceDetails: '',
    exchange: '',
    comments: ''
  },
  getters: {
    userInfoGetter: (state) => {
      return state.userInfo
    },
    receiverAddressGetter (state) {
      return state.receiverAddress
    }
  },
  actions,
  mutations
})
