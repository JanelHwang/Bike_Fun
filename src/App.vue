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
    <div class="container my-3  align-content-sm-between flex-wrap">
      <div class="search-form py-5 d-flex justify-content-lg-start justify-content-center">
        <div class="col-lg-6 col-md-8 col-12">
          <img src="../assets/images/svg/logo.svg" class="mt-4 mb-4" alt="Bike fun" width="275" height="118">
          <h1 class="dark-color mt-4">尋找單車,<br>來場悠閒的放鬆之旅!</h1>
          <form class="mt-4 pt-3">
            <label class="input-item w-100" style="margin-bottom: 12px;">
              <img src="../assets/images/svg/search-icon.svg" alt="search" width="20" height="20">
              <input type="text" class="form-control search" placeholder="輸入關鍵字" aria-label="Username" aria-describedby="basic-addon1">
            </label>
            <div class="form-inline">
              <div class="w-50 pr-2 pl-0">
                <div class="form-group mb-0">
                  <select class="form-control w-100 align-middle">
                    <option selected>縣市</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div class="w-50 pr-0 pl-2">
                <button class="btn btn-primary primary-btn w-100 primary-bg align-middle" type="submit">搜尋</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="biker-bar row d-flex justify-content-center align-self-sm-end text-center px-4">
        <div class="col-lg-3 col-4">
          <img src="../assets/images/photo/bike-1.png" class="img-fluid" alt="biker-1">
        </div>
        <div class="col-lg-3 col-4">
          <img src="../assets/images/photo/bike-2.png" class="img-fluid" alt="biker-2">
        </div>
        <div class="col-lg-3 col-4">
          <img src="../assets/images/photo/bike-3.png" class="img-fluid" alt="biker-3">
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
  min-width: 100vw;
  min-height: 100vh;
}
.box-shadow{
  box-shadow: 0px 4px 10px rgba(38, 38, 38, 0.25);
}
.navbar{
  height: 80px;
  z-index: 100;
}
</style>
