<template>
    <div class="content">
        <div class="category">
         <div
          :class="{'category__item':true,'category__item--active':currentTab===item.tab}" v-for="item in categories" :key="item.name" @click="() =>handleCategoryClick(item.tab)">{{item.name}}</div>
        </div>
        <div class="product">
        <div class="product__item" v-for="item in contentList" :key="item._id">
            <img class="product__item__img" :src='item.imgUrl'/>
            <div class="product__item__detail">
                <h4  class="product__item__title">{{item.name}}</h4>
                <p  class="product__item__sales">月售 {{item.sales}} 件</p>
                <p  class="product__item__price">
                    <span  class="product__item__yen">&yen;</span>{{item.price}}
                    <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
                </p>
            </div>
            <div class="product__number">
                <span  class="product__number__minus">-</span>
                0
                <span  class="product__number__plus">+</span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
export default {
  name: 'ShopContent',
  setup () {
    const categories = [{
      name: '全部商品',
      tab: 'all'
    }, {
      name: '秒杀',
      tab: 'seckill'
    }, {
      name: '新鲜水果',
      tab: 'fruit'
    }]
    const data = reactive({
      currentTab: categories[0].tab,
      contentList: []
    })
    const getContentData = async (tab) => {
      const result = await get('/api/shop/1/products', { tab })
      if (result?.errno === 0 && result?.data?.length) {
        data.contentList = result.data
      }
      console.log(result)
    }
    const handleCategoryClick = (tab) => {
      getContentData(tab)
      data.currentTab = tab
    }
    getContentData()
    const { contentList, currentTab } = toRefs(data)
    return { categories, contentList, handleCategoryClick, currentTab }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
    background: #ccc;
}
.category {
    overflow-y: scroll;
    width: .76rem;
    background: $search-bgColor;
    font-size: 14px;
    color: #333;
    &__item {
        line-height: .4rem;
        text-align: center;
        &--active{
            background: white;
        }
    }
}
.product{
    overflow-y: scroll;
    flex: 1;
    background: white;
    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solide #f1f1f1;
        &__img{
            width: .68rem;
            height: .68rem;
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
