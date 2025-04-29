<template>
    <div class="docker">
    <span
    v-for="(item, index) in dockerList"
    :key="item.icon"
    :class="{'docker__item--active':index===0,'docker__item':true}">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </span>

  </div>
</template>

<script>
export default {
  name: 'DockerBottom',
  setup () {
    const dockerList = [
      { icon: '&#xe9db;', text: '首页' },
      { icon: '&#xe638;', text: '购物车' },
      { icon: '&#xe63e;', text: '订单' },
      { icon: '&#xe78b;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.wrapper{
  background: red;
}
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.2rem;
      font-weight: normal;
    }
    .docker__title {
      font-size: 0.1rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
