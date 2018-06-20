const mutations = {
  SAVE_USER_INFO (state, val) {
    state.userInfo = val
  },
  choiceDetails (state, details) {
    state.choiceDetails = details
  },
  exchange (state, exchange) {
    state.exchange = exchange
  },
  comments (state, comments) {
    state.comments = comments
  }
}

export default mutations
