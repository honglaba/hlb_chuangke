const state = {
  userInfo: /* 用户主要信息 */'',
  receiverAddress: /* 收货地址 */[],
  payAddress: /* 当前选择的收货地址 */{},
  shoppingCart: {}, /* 购物车 */
  currOperation: '', /* 当前用户正在进行的特殊操作 */
  presentAddress: /* 当前定位的地理位置 */'',
  details: '',
  exchange: '',
  comments: '',
  WkVipInfo: '',
  WkInv: /* 用户邀请码 */ '',
  isLoading: {
    status: false,
    text: ''
  }
}

export default state
