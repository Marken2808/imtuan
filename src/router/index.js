import Vue from 'vue';
import VueRouter from 'vue-router';
import Portfolio from '../views/PortfolioPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
