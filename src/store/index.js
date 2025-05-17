import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  getters: {
  },
  mutations: {
    addItemToCart (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = num
      } else {
        product.count = product.count + num
      }
      if (product.count < 0) {
        product.count = 0
      }
      if (product.count > 0) { product.check = true } else { product.check = false }
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
