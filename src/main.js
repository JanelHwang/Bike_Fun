
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


export const eventBus = createApp(App).use(router)

createApp(App).use(router).mount('#app')