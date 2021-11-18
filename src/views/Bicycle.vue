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
                                <option>台北市</option>
                                <option>新北市</option>
                                <option>桃園市</option>
                                <option>新竹市</option>
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
        <div class="search-container border-top bg-light">
            <div class="result-card card my-2 px-3 py-2 text-left">
                <h5>iBike1.0_頂何厝</h5>
                <div class="d-inline primary-color fz-14 grey-800"><i class="fas fa-map-marker-alt primary-color pr-2" style="vertical-align:base;"></i>臺灣大道二段/東興路三段路口</div>
                <div class="bike-state">
                    <div class="badge  bg-primary">正常營運</div>
                </div>
            </div>
        </div>
    </div>
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[47.41322, -1.219482]"
      @move="log('move')"
      style="height: 100vh;"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
        <l-tooltip>
          lol
        </l-tooltip>
      </l-marker>

      <l-marker :lat-lng="[47.41322, -1.219482]">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
      </l-marker>

      <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
        <l-popup>
          lol
        </l-popup>
      </l-marker>

      <l-polyline
        :lat-lngs="[
          [47.334852, -1.509485],
          [47.342596, -1.328731],
          [47.241487, -1.190568],
          [47.234787, -1.358337],
        ]"
        color="green"
      ></l-polyline>
      <l-polygon
        :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337],
        ]"
        color="#41b782"
        :fill="true"
        :fillOpacity="0.5"
        fillColor="#41b782"
      />
      <l-rectangle
        :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337],
        ]"
        :fill="true"
        color="#35495d"
      />
      <l-rectangle
        :bounds="[
          [46.334852, -1.190568],
          [46.241487, -1.090357],
        ]"
      >
        <l-popup>
          lol
        </l-popup>
      </l-rectangle>
    </l-map>

</template>

<script>

import {  
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Bicycle',
  components: { 
      Navbar,
      LMap,
      LIcon,
      LTileLayer,
      LMarker,
      LControlLayers,
      LTooltip,
      LPopup,
      LPolyline,
      LPolygon,
      LRectangle,
  },
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
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

</style>