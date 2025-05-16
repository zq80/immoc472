import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  getters: {
  },
  mutations: {
    addItemToCart (state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 1
      } else {
        product.count = product.count + 1
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(JSON.stringify(state.cartList))
      console.log(state.cartList?.[shopId]?.[productId]?.count)
      // console.log(shopId, productId, productInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
