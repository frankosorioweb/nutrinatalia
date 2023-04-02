require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue';

import vuetify from './plugins/vuetify';
import store from './store';
import router from './router'

const app = new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    vuetify
});