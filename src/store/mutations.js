const mutations = {
  SAVE_USER_INFO (state, val) {
    state.userInfo = val
  },
  SAVE_RECEIVER_ADDRESS (state, val) {
    state.receiverAddress = val
  }
}

export default mutations
