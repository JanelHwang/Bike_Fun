<template>
  <v-app class="vh-100">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Noto Sans',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F0F9FC;
  width: 100%;
  height: 100%;
}
</style>
