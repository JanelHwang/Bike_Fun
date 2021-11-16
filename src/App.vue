<template>
  <nav class="navbar navbar-expand box-shadow navbar-light bg-light zindex-sticky">
    <div class="container-fluid px-3 py-1">
      <a class="navbar-brand" href="#"><img src="../assets/images/svg/logo.svg" alt="logo" width="103" height="44"></a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="nav nav-pills ml-auto">
          <li class="nav-item"><a href="#" class="nav-link">尋找單車</a></li>
          <li class="nav-item"><a href="#" class="nav-link">尋找車道</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="bg text-left">
    <div class="bg-block-r"></div>
    <div class="bg-block-l"></div> 
    <div class="container my-5">
      <div class="search-form py-5">
        <div class="col-lg-6 col-12">
          <img src="../assets/images/svg/logo.svg" class="my-4" alt="Bike fun" width="275" height="118">
          <h1 class="dark-color my-4">尋找單車,<br>來場悠閒的放鬆之旅!</h1>
          <form class="mt-5">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: 'Noto Sans',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F0F9FC;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.box-shadow{
  box-shadow: 0px 4px 10px rgba(38, 38, 38, 0.25);
}
.navbar{
  height: 80px;
  z-index: 100;
}
</style>
