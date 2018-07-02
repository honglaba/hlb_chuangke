import HTTP from '@/api' // 配置后的axios

const moduleApp = {
  state: {},
  mutations: {},
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
    }
    
  },
  getters: {}
}

export default moduleApp
