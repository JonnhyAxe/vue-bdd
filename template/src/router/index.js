import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/components/HomeView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
  ],
});
