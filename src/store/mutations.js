const mutations = {
  SAVE_USER_INFO (state, val) {
    state.userInfo = val
  },
  SAVE_RECEIVER_ADDRESS (state, val) {
    state.receiverAddress = val
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
