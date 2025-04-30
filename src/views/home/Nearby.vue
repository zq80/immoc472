<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
      class="nearby__item"
      v-for="item in nearbyList"
      :key="item._id"
      >
      <img
        :src="item.imgUrl"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.name}}</div>
        <div class="nearby_content_tags">
          <span class="nearby__content__tag">月售：{{item.sales}}</span>
          <span class="nearby__content__tag">起送：{{item.expressLimit}}</span>
          <span class="nearby__content__tag">基础运费：{{item.expressPrice}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.slogan}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'

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
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    border-bottom: 1px solid;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
