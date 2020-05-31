<template>
  <div id="app">
    <!-- built files will be auto injected -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>
