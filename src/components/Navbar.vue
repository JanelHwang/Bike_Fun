<template>
  <nav class="navbar navbar-expand box-shadow navbar-light bg-light zindex-sticky">
    <div class="container-fluid px-3 py-1">
        <router-link class="navbar-brand" to="/"><img src="../../assets/images/svg/logo.svg" alt="logo" width="103" height="44"></router-link>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="nav nav-pills ml-auto">
          <li class="nav-item"><router-link class="nav-link" class-active="active" to="/bicycle" exact>尋找單車</router-link></li>
          <li class="nav-item"><router-link class="nav-link" class-active="active" to="/route">尋找車道</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {}
}
</script>

<style>
.box-shadow{
  box-shadow: 0px 4px 10px rgba(38, 38, 38, 0.25);
}
.navbar{
  height: 80px;
  z-index: 100;
}
</style>
