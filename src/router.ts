import Vue from 'vue';
import Router from 'vue-router';
import DashboardView from './views/DashboardView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () => import('./views/HeroesView.vue'),
    },
    {
      path: '/detail/:id',
      name: 'hero-detail',
      component: () => import('./components/HeroDetail.vue'),
      props: (route) => ({ id: route.params.id }),
    },
  ],
});
