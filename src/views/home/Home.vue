<template>
  <div class="wrapper">
    <StaticPart/>
    <Nearby/>
  </div>
  <docker-vue/>
</template>

<script>
import DockerVue from './Docker.vue'
import Nearby from './Nearby.vue'
import StaticPart from './StaticPart.vue'
export default {
  name: 'HomePage',
  components: { StaticPart, Nearby, DockerVue }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
}

</style>
