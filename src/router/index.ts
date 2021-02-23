import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () =>  import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/components/Settings.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
