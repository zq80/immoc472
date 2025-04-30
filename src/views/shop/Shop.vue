<template>
 <div class="wrapper">
 <shop-info :item="item" :hideBorder="true" />
 </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  name: 'MyShop',
  components: { ShopInfo },
  setup () {
    const item = {
      id: '23',
      name: '堂梓妍',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 50,
      expressLimit: 29,
      expressPrice: 749,
      slogan: 'tempor Duis in mollit'
    }
    return { item }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 .18rem;
}
</style>
