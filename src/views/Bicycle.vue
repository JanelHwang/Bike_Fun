<template>
  <Navbar></Navbar>
    <div class="search-result bg-light">
        <div class="search-container">
            <div class="card search-card box-shadow border-0">
                <div class="card-header primary-bg"></div>
                <div class="card-body text-left m-0"> 
                  <div class="d-inline title primary-color">尋找單車<i class="fas fa-chevron-down pl-2 fz-16" style="vertical-align:middle;"></i></div>
                    <form class="mt-2">
                        <label class="input-item w-100" style="margin-bottom: 12px;">
                        <img src="../../assets/images/svg/search-icon.svg" alt="search" width="20" height="20">
                        <input type="text" class="form-control search" placeholder="輸入關鍵字" aria-label="Username" aria-describedby="basic-addon1">
                        </label>
                        <div class="form-inline">
                        <div class="w-50 pr-2 pl-0">
                            <div class="form-group mb-0">
                            <select class="form-control w-100 align-middle">
                                <option>選擇縣市</option>
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
        </div>
        <hr>
        <div class="search-container bg-light scroll">
            <div class="card result-card text-left grey-100-bg border-0 box-shadow mb-3 px-3 py-2">
                <h5>iBike1.0_頂何厝</h5>
                <div class="d-inline primary-color fz-14 grey-800 pb-2"><i class="fas fa-map-marker-alt primary-color pr-2" style="vertical-align:base;"></i>臺灣大道二段/東興路三段路口</div>
                <div class="bike-state">
                    <div class="badge badge-primary">正常營運</div>
                </div>
            </div>
            <div class="card result-card mb-3 px-3 py-2 text-left grey-100-bg border-0 box-shadow">
                <h5>iBike1.0_頂何厝</h5>
                <div class="d-inline primary-color fz-14 grey-800 pb-2"><i class="fas fa-map-marker-alt primary-color pr-2" style="vertical-align:base;"></i>臺灣大道二段/東興路三段路口</div>
                <div class="bike-state">
                    <div class="badge badge-primary mr-2">正常營運</div><div class="badge badge-primary">正常營運</div>
                </div>
            </div>
            <div class="card result-card mb-3 px-3 py-2 text-left grey-100-bg border-0 box-shadow">
                <h5>iBike1.0_頂何厝</h5>
                <div class="d-inline primary-color fz-14 grey-800 pb-2"><i class="fas fa-map-marker-alt primary-color pr-2" style="vertical-align:base;"></i>臺灣大道二段/東興路三段路口</div>
                <div class="bike-state">
                    <div class="badge badge-primary">正常營運</div>
                </div>
            </div>
        </div>
    </div>
    <div id="map">
      <l-map
        ref="myMap"
        :zoom="zoom"
        :center="center"
        :minZoom="6" 
        style="height: 100vh;"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        ></l-tile-layer>
      </l-map>
    </div>  
</template>

<script>
import { ref} from 'vue';
import { 
  LMap, 
  LTileLayer,

} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from '../components/Navbar.vue';
import Cities from '../../assets/json/cityName.json';
import axios from 'axios';
import getAuthorizationHeader from '../utils/GetAuthorizationHeader.js';

export default {
  name: 'Bicycle',
  components: { 
    Navbar,
    LMap, 
    LTileLayer,
  },
  data: () => ({
      data : [],
      zoom: 18,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }),
  computed: {
    cities() {
      return Cities;
    },
  },
  setup(){
    const myMap = ref(null);
    const center = ref([25.033671, 121.564427]);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const longitude = position.coords.longitude;  // 經度
          const latitude = position.coords.latitude;  // 緯度
          center.value = [latitude, longitude];
          console.log(longitude);
          console.log(latitude);
        },
        // 錯誤訊息
        function (e) {
          const msg = e.code;
          const dd = e.message;
          console.error(msg)
          console.error(dd)
        }
      )
    }
     return {
      myMap,
      center
    };
  },
   mounted() {
    const api = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taichung?$top=30&$format=JSON';
    axios.get(api, { headers: getAuthorizationHeader() })
    .then(response => {
      this.data = response.data;
      console.log(response.data);
    }).catch(error => alert(error));
  },
};
</script>

<style scoped>

.title {
  font-size: 1.6rem;
  font-weight: 700;
}
.fz-16 {
  font-size: 16px;
}
.fz-14 {
  font-size: 14px;
}
.card-body {
  padding: 0.8rem !important;
}

</style>response