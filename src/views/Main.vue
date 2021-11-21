<template>
  <Navbar></Navbar>
  <div class="bg text-left">
    <div class="bg-block-r"></div>
    <div class="bg-block-l"></div> 
    <div class="container my-3 align-content-sm-between flex-wrap">
      <div class="search-form py-5 d-flex justify-content-lg-start justify-content-center">
        <div class="col-lg-6 col-md-8 col-12">
          <img src="../../assets/images/svg/logo.svg" class="mt-4 mb-4" alt="Bike fun" width="275" height="118">
          <h1 class="dark-color mt-4">尋找單車,<br>來場悠閒的放鬆之旅!</h1>
          <form class="mt-4 pt-3">
            <label class="input-item w-100" style="margin-bottom: 12px;">
              <img src="../../assets/images/svg/search-icon.svg" alt="search" width="20" height="20">
              <input type="text" class="form-control search" placeholder="輸入關鍵字" aria-label="Username" aria-describedby="basic-addon1">
            </label>
            <div class="form-inline">
              <div class="w-50 pr-2 pl-0">
                <div class="form-group mb-0">
                  <select class="form-control w-100 align-middle">
                    <option>--選擇縣市--</option>
                    <option v-for="city in cities" :value="city.value" :key="city.city">{{ city.city }}</option>
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
          <img src="../../assets/images/photo/bike-1.png" class="img-fluid" alt="biker-1">
        </div>
        <div class="col-lg-3 col-4">
          <img src="../../assets/images/photo/bike-2.png" class="img-fluid" alt="biker-2">
        </div>
        <div class="col-lg-3 col-4">
          <img src="../../assets/images/photo/bike-3.png" class="img-fluid" alt="biker-3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Cities from '../../assets/json/cityName.json';

export default {
  name: 'Main',
  components: { Navbar },
  computed: {
    cities() {
      return Cities;
    },
  },
}
</script>

<style scoped>
select {
  text-align: center !important;
    text-align-last: center !important;
}
    

option{
  text-align: center;
  line-height: 1.5;
}
        
</style>