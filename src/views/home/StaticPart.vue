<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    南京理工大学
    <span class="iconfont position__notice">&#xe61e;</span>
  </div>
  <div class="search">
    <span class="iconfont position__icon">&#xe6b9;</span>
    山姆会员商店优惠产品
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons" >
    <div class="icons__item" v-for="(item,index) in iconList" :key="index">
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgUrl}.png`"
      />
      <p class="icons__item__img__desc">{{item.desc}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [{
      imgUrl: '超市',
      desc: '超市便利'
    }, {
      imgUrl: '菜市场',
      desc: '菜市场'
    }, {
      imgUrl: '水果店',
      desc: '水果店'
    }, {
      imgUrl: '医药健康',
      desc: '医药健康'
    }, {
      imgUrl: '家居',
      desc: '家居'
    }, {
      imgUrl: '蛋糕',
      desc: '蛋糕'
    }, {
      imgUrl: '签到',
      desc: '签到'
    }, {
      imgUrl: '大牌免运',
      desc: '大牌免运'
    }, {
      imgUrl: '红包',
      desc: '红包'
    }, {
      imgUrl: '鲜花',
      desc: '鲜花绿植'
    }]
    return { iconList }
  }
}

</script>

<style lang="scss">
@import "../../style/mixins.scss";
.position {
  overflow: hidden;
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
    // margin-right:.08rem ;
  }
  .position__notice {
    position: absolute;
    font-size: 0.2rem;
    top: 0.17rem;
    right: 0;
  }
}

.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    display: inline-block;
    font-size: 0.16rem;
    padding: 0 0.12rem 0 0.16rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
      &__desc {
        margin: 0.06rem 0 0.16rem 0;
        text-align: center;
      }
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: #f1f1f1;
}
</style>
