const mutations = {
  SAVE_USER_INFO (state, val) { // 用户主要信息
    state.userInfo = val
  },
  SAVE_RECEIVER_ADDRESS (state, val) { // 物流地址
    state.receiverAddress = val
  },
  CLEAR_STATE (state) { // state 清空
    state.userInfo = ''
    state.receiverAddress = ''
  },
  CHOICE_DETAILS (state, details) {
    state.choiceDetails = details
  },
  EXCHANHE (state, exchange) {
    state.exchange = exchange
  },
  COMMENTS (state, comments) {
    state.comments = comments
  }
}

export default mutations
