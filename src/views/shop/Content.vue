<template>
    <div class="content">
        <div class="category">
         <div class="category__item category__item--active">全部商品</div>
         <div class="category__item">秒杀</div>
         <div class="category__item">新鲜水果</div>
         <div class="category__item">休闲食品</div>
         <div class="category__item">时令蔬菜</div>
        </div>
        <div class="product">
        <div class="product__item">
            <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png"/>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ShopContent'
}
</script>

<style lang="scss" scoped>
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
    background: #f5f5f5;
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
    background: yellow;
    &__item{
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solide #f1f1f1;
        &__img{
            width: .68rem;
            height: .68rem;
        }
    }
}
</style>
