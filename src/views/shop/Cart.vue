<template>
<div class="mask" v-if="showCart" @click="showCart=!showCart"></div>
<div class="cart">
 <div class="product" v-if="showCart">
    <div class="product__header">
        <div class="product__header__all" @click="setCartItemsChecked(allChecked)">
            <span class="product__header__icon iconfont" v-html="allChecked ? '&#xe70f;' : '&#xe616;'"></span>
            全选
        </div>
         <div class="product__header__clear" @click="()=>cleanCartProducts(shopId)">清空购物车</div>
    </div>
    <template  v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count>0">
            <div class="product__item__checked iconfont" v-html="item.check ? '&#xe70f;' : '&#xe616;'" @click="() => changeCartItemCheck(shopId,item._id)"></div>
            <img class="product__item__img" :src='item.imgUrl'/>
            <div class="product__item__detail">
                <h4  class="product__item__title">{{item.name}}</h4>
                <p  class="product__item__price">
                    <span  class="product__item__yen">&yen;</span>{{item.price}}
                    <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
                </p>
            </div>
            <div class="product__number">
                <span  class="product__number__minus"  @click="()=>{changeCartItemInfo(shopId,item._id,item,-1)}">-</span>
                {{cartList?.[shopId]?.[item._id]?.count || 0}}
                <span  class="product__number__plus" @click="()=>{changeCartItemInfo(shopId,item._id,item,1)}">+</span>
            </div>
        </div>
    </template>
 </div>
 <div class="check">
    <div class="check__icon">
      <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" @click="showCart=!showCart" />
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
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = (shopId) => {
  const store = useStore()
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
        if (product.check) {
          count = product.count * product.price + count
        }
      }
    }
    return count
  })

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })

  const changeCartItemCheck = (shopId, productId) => {
    store.commit('changeCartItemCheck', { shopId, productId })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const allChecked = computed(() => {
    const productList = cartList[shopId]
    let result = true
    let count = 0
    if (!productList) { result = false }
    console.log(productList)
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (!product.check && product.count !== 0) {
          result = false
        }
        count = count + product.count
      }
    }
    console.log('count', count)
    if (count === 0) { result = false }
    return result
  })

  const setCartItemsChecked = (allChecked) => {
    store.commit('setCartItemsChecked', { shopId, allChecked })
  }

  return { total, price, productList, changeCartItemCheck, cleanCartProducts, allChecked, setCartItemsChecked }
}

export default {
  name: 'ShopCart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const showCart = ref(false)
    const { total, price, productList, changeCartItemCheck, cleanCartProducts, allChecked, setCartItemsChecked } = useCartEffect(shopId)
    const { changeCartItemInfo, cartList } = useCommonCartEffect()
    return { total, price, productList, shopId, changeCartItemInfo, changeCartItemCheck, cleanCartProducts, cartList, allChecked, setCartItemsChecked, showCart }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
.mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    background: rgba(0,0,0,.5);
    z-index: 1;
}
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: white;
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
.product{
    overflow-y: scroll;
    flex: 1;
    background: white;
    &__header {
        display: flex;
        line-height: .52rem;
        border-bottom:1px #f1f1f1;
        &__clear{
            flex: 1;
            text-align: right;
        }
        &__all{
            width: .64rem;
        }
    }
    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solide #f1f1f1;
        &__img{
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &__title {
            margin: 0;
            line-height: .2rem;
            font-size:.14rem;
            color: #333;
            @include ellipsis;
        }
        &__sales {
            margin: .06rem 0;
            line-height: .16rem;
            font-size:.12rem;
            color: #333;
        }
         &__price {
            margin: 0;
            line-height: .2rem;
            font-size:.14rem;
            color: #e93b3b;
        }
        &__yen {
            font-size: .12rem;
        }
        &__origin{
            margin-left:.06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: #999;
            text-decoration: line-through;
        }
        &__detail{
            overflow: hidden;
        }
        &__check{
            line-height: .5rem;
            font-size: .2rem;
            margin-right: .2rem;
        }
    }
    .product__number{
        position: absolute;
        right: .18rem;
        bottom: .12rem;
        &__minus,&__plus {
            display: inline-block;
            width: .2rem;
            height: .2rem;
            line-height: .16rem;
            border-radius: 50%;
            font-size: .2rem;
            text-align: center;
        }
        &__minus{
            border: .01rem solid #666;
        }
        &__plus{
           background: #0091ff;
           color: white;
        }
    }
}
</style>
