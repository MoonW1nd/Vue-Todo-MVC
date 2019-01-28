<template>
  <img class="Logo" v-on="$listeners" v-bind="$attrs"/>
</template>

<script>
/**
 * @class Logo
 * @description логотип
 */
export default {
  name: 'Logo',
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.Logo {
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
}
</style>
