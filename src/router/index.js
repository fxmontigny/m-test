import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Cats from '@/pages/cats/Cats.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cats',
      name: 'Cats',
      component: Cats
    }
  ]
});
