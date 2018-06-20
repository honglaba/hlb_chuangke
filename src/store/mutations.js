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
  }
}

export default mutations
