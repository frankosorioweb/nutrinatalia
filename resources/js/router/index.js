import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: {
          x: 0,
          y: 56
        }
      }
    }

    if(savedPosition === null) {
      savedPosition = {x:0, y:0}
    }

    return savedPosition
  }
});
