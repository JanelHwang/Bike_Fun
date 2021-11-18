<template>
  <Navbar></Navbar>
    <div class="search-result justify-content-start">
        <div class="search-container">
            <div class="card search-card box-shadow card-header">
                <div class="card-head w-100 active">
                    <h2>尋找單車</h2><i class="fas fa-chevron-down pl-2"></i>
                </div>
                <div class="card-body">
                    <form>
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
        <div class="search-container">
            <div class="result-card card">
                <h5></h5>
                <div class="bike-site">

                </div>
                <div class="bike-state">
                    <div class="badge  bg-primary">正常營運</div>
                </div>
            </div>
        </div>
    </div>
    <l-map style="height:100vh">
        <l-geo-json :geojson="geojson" :options="geojsonOptions" />
    </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Bicycle',
  components: { 
        Navbar,
        LMap,
        LGeoJson,
    },
      data() {
    return {
      geojson: null,
      geooptions: {
        style: {
          color: "#ff7800",
          weight: 8,
          opacity: 0.8,
          //dashArray: 15,
        },
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
    };
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
}
</script>

