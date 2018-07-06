import * as types from './mutations-type'

const mutations = {
  SAVE_USER_INFO (state, val) { // 用户主要信息
    state.userInfo = val
  },
  SAVE_RECEIVER_ADDRESS (state, val) { // 物流地址
    state.receiverAddress = val
  },
  SAVE_BEING_EDITOR_ADDRESS (state, val) {
    state.beingEditorAddress = val
  },
  CLEAR_STATE (state) { // state 清空
    state.userInfo = ''
    state.receiverAddress = ''
  },
  CHOICE_DETAILS (state, details) {
    state.details = details
  },
  EXCHANHE (state, exchange) {
    state.exchange = exchange
  },
  COMMENTS (state, comments) {
    state.comments = comments
  },
  [types.SET_WEIKA_INVID] (state, val) {
    state.WkInv = val
  }
}

export default mutations
