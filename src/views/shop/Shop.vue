<template>
 <div class="wrapper">
  <div class="search">
    <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
    <div class="search__content">
      <span class="search__content__icon iconfont" >&#xe6b9;</span>
      <input class="search__content__input" placeholder="enter search item name"/>
    </div>
  </div>
 <shop-info :item="item" :hideBorder="true" v-show="item.imgUrl"/>
 <shop-content/>
 </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import ShopContent from './Content.vue'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'MyShop',
  components: { ShopInfo, ShopContent },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    getItemData()
    const { handleBackClick } = useBackRouterEffect()
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
