<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link  v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
      <shop-info  :item="item"  />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    console.log(result.data)
    if (result?.errno === 0 && result?.data?.length > 0) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss">
@import "../../style/mixins.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
  a{
    text-decoration: none;
  }
}
</style>
