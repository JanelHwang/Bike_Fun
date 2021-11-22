import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import("../views/Main.vue"),
    
  },
  {
    path: "/bicycle",
    component: () => import("../views/Bicycle.vue"),
  }
]

const router = createRouter({
  hash : createWebHistory(process.env.BASE_URL),
  routes,
 
})

export default router
