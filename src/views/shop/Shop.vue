<template>
 <div class="wrapper">
  <div class="search">
    <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
    <div class="search__content">
      <span class="search__content__icon iconfont" >&#xe6b9;</span>
      <input class="search__content__input" placeholder="enter search item name"/>
    </div>
  </div>
 <shop-info :item="item" :hideBorder="true" />
 </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  name: 'MyShop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const item = {
      id: '23',
      name: '堂梓妍',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 50,
      expressLimit: 29,
      expressPrice: 749,
      slogan: 'tempor Duis in mollit'
    }
    const handleBackClick = () => {
      router.back()
    }
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 .18rem;
}
.search {
  // height: .32rem;
  display: flex;
  margin: .2rem 0 .16rem;
  &__back{
    line-height: .32rem;
    font-size: .24rem;
    height: .32rem;
    width: .3rem;
    color: #b6b6b6;
  }
  &__content{
    display: flex;
    flex: 1;
    line-height: .32rem;
    background: #f4f5f5;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color: #b7b7b7;
    }
    &__input{
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      &::placeholder{
        color: #333;
      }
    }
  }
}
</style>
