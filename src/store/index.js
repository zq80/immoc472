import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

// const getLocalCartList = () => {
//   return JSON.parse(localStorage.cartList) || {}
// }

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
      setLocalCartList(state)
    },
    changeCartItemCheck (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
      setLocalCartList(state)
    },
    setCartItemsChecked (state, payload) {
      const { shopId, allChecked } = payload
      const productList = state.cartList[shopId]
      for (const i in productList) {
        const product = productList[i]
        if (product.count > 0) {
          product.check = !allChecked
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
