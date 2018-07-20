import ajax from '@/api' // 配置后的axios

const actions = {
  HTTP_GetCategory ({commit}, data) { // 子分类
    return new Promise((resolve, reject) => {
      ajax.get('/api/shop-category/children', {
        params: {
          id: 1
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_GetCategoryShop ({commit}, data) { // 分类对应的商店
    return new Promise((resolve, reject) => {
      ajax.get('/api/shop-category/shops', {
        params: {
          cid: 1
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  HTTP_SwitchCategory ({commit}, id) { // 切换分类
    return new Promise((resolve, reject) => {
      ajax.get('/api/shop-category/shops', {
        params: {
          cid: id
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  APP_collectShop ({commit}, sid) { // 收藏商家
    return new Promise((resolve, reject) => {
      ajax.post('/api/user/favorite-shop', {
        sid
      })
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  APP_unCollectShop ({commit}, sid) { // 取消收藏商家
    return new Promise((resolve, reject) => {
      ajax.delete(`/api/user/favorite-shop/${sid}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  APP_isCollectGoods ({commit}, sid) { // 查询是否收藏商品
    return new Promise((resolve, reject) => {
      ajax.get(`/api/user/favorite-shop/${sid}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  },
  APP_Banner ({commit}, where) { // 展示图片
    return new Promise((resolve, reject) => {
      ajax.get(`/api/banner?key=${where}`)
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        })
    })
  }
}

const moduleApp = {
  actions
}

export default moduleApp
