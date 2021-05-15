import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: () => import('../views/ResumePage.vue')
  },
  {
    path: '/Skill',
    name: 'Skill',
    component: () => import('../views/SkillPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
