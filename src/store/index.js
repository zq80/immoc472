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
      console.log(shopId, productId, productInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
