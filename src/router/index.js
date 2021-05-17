import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Porfolio',
    component: () => import('../views/PorfolioPage.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
