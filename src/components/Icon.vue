<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href="'#'+name" />
  </svg>
</template>

<script lang="ts">
let importAll = (requestContext: __WebpackModuleApi.RequireContext) =>
  requestContext.keys().forEach(requestContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
    props: ['name'],
    name: "Icon"
};
</script>

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>