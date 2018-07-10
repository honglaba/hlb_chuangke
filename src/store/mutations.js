import * as types from './mutations-type'

const mutations = {
  [types.SET_USER_INFO] (state, val) { // 用户主要信息
    state.userInfo = val
  },
  [types.SAVE_RECEIVER_ADDRESS] (state, val) { // 物流地址
    state.receiverAddress = val
  },
  [types.SAVE_BEING_EDITOR_ADDRESS] (state, val) {
    state.beingEditorAddress = val
  },
  [types.CLEAR_STATE] (state) { // state 清空
    state.userInfo = ''
    state.receiverAddress = ''
  },
  [types.CHOICE_DETAILS] (state, details) {
    state.details = details
  },
  [types.EXCHANHE] (state, exchange) {
    state.exchange = exchange
  },
  [types.COMMENTS] (state, comments) {
    state.comments = comments
  },
  [types.SET_WEIKA_INVID] (state, val) {
    if (!val) localStorage.removeItem('invite_id')
    state.WkInv = val
  },
  [types.UPDATE_LOADING] (state, context) {
    state.isLoading.status = context.status
    state.isLoading.text = context.text
  },
  [types.UPDATE_WEIKA_LOOP] (state, step) {
    state.WkLoop = step
  },
  [types.UPDATE_VIP_INFO] (state, data) {
    localStorage.setItem('vip_info', JSON.stringify(data))
    state.WkVipInfo = data
  }
}

export default mutations
