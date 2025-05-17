<template>
<div class="cart">
 <div class="check">
    <div class="check__icon">
      <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png"/>
      <div class="check__icon__tag">{{total}}</div>
    </div>
    <div class="check__info">
        总计：<span class="check__info__price"> &yen;{{price}}</span>
    </div>
    <div class="check__btn">去结算</div>
 </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  name: 'ShopCart',
  setup () {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList
    const total = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (const i in productList) {
          const product = productList[i]
          count = product.count + count
        }
      }
      return count
    })

    const price = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (const i in productList) {
          const product = productList[i]
          count = product.count * product.price + count
        }
      }
      return count
    })

    return { total, price }
  }
}
</script>

<style lang="scss" scoped>
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .5rem;
    background: yellow;
}
.check{
    line-height: .5rem;
    display: flex;
    &__icon{
        position: relative;
        width: .84rem;
        &__img{
            display: block;
            margin: 0.12rem auto;
            width: .28rem;
            height: .26rem;
        }
        &__tag{
            position: absolute;
            min-width: .2rem;
            height: .2rem;
            background: #e93b3b;
            border-radius: 50%;
            font-size: .12rem;
            line-height: .2rem;
            text-align: center;
            right: .2rem;
            top: .04rem;
            color: white;
            transform: scale(.5);
        }
    }
    &__info {
        flex: 1;
        color: #333;
        font-size: .12rem;
        &__price{
           color: #e93b3b;
           font-size: .18rem;
        }
    }
    &__btn{
        width: .98rem;
        background-color: #4fb0f9;
        color: white;
        text-align: center;
        font-size: .14rem;
    }
}
</style>
