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
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "nav-link-active"
})

export default router
