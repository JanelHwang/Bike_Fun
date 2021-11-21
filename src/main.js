
import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js'
import '../assets/css/variables.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

export const app = createApp(App).use(router,axios,VueAxios)


app.config.productionTip = false

app.mount('#app')