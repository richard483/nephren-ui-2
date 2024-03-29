import { createRouter, createWebHistory } from 'vue-router'

const homeView = () => import('../views/HomeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    }
  ]
})

export default router
