import HTTP from '@/api' // 配置后的axios

const moduleApp = {
  actions: {
    HTTP_GetCategory ({commit}, data) { // 子分类
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/shop-category/children',
          params: {
            id: 1
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    HTTP_GetCategoryShop ({commit}, data) { // 分类对应的商店
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/shop-category/shops',
          params: {
            cid: 1
          }
        }).then(res => {
          if (res.result_state === 'success') {
            resolve(res)
          }
        })
      })
    },
    HTTP_SwitchCategory ({commit}, id) { // 切换分类
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/shop-category/shops',
          params: {
            cid: id
          }
        }).then(res => {
          // if (res.data['result_state'] === 'success') {
          //   resolve(res)
          // } else {
          //   reject(res)
          // }
          resolve(res)
        })
      })
    },
    APP_collectCommodityList () { // 收藏商品列表
      return new Promise((resolve, reject) => {
        HTTP({
          url: '/api/user/favorite-goods'
        }).then(res => {
          resolve(res)
        })
      })
    },
    APP_Banner ({commit}, where) { // 展示图片
      return new Promise((resolve, reject) => {
        HTTP({
          url: `/api/banner?key=${where}`
        }).then(res => {
          resolve(res)
        })
      })
    }
  }
}

export default moduleApp
