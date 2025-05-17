
import { useStore } from 'vuex'
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('addItemToCart', { shopId, productId, productInfo, num })
    // console.log(shopId, productId, productInfo)
  }
  return { changeCartItemInfo }
}
