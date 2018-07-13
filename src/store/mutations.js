import * as types from './mutations-type'

const mutations = {
  [types.SET_USER_INFO] (state, val) { // 用户主要信息
    localStorage.setItem('userInfo', JSON.stringify(val))
    state.userInfo = val
  },
  [types.SAVE_RECEIVER_ADDRESS] (state, val) { // 物流地址
    state.receiverAddress = val
  },
  [types.SAVE_PAY_ADDRESS] (state, val) { // 当前选择的收货地址
    state.payAddress = val
  },
  [types.SAVE_SHOPPING_CART] (state, val) { // 购物车
    localStorage.setItem('shoppingCart', JSON.stringify(val))
    state.shoppingCart = val
  },
  [types.UPDATE_CURRENT_OPERATION] (state, val) { // 记录当前操作
    localStorage.setItem('currOperation', val)
    state.currOperation = val
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
    state.isLoading.status = false
    state.isLoading.text = ''
    state.isLoading.status = context.status
    state.isLoading.text = context.text
  },
  [types.UPDATE_VIP_INFO] (state, data) {
    localStorage.setItem('vip_info', JSON.stringify(data))
    state.WkVipInfo = data
  }
}

export default mutations
