import Vue from "vue";
import Vuex from 'vuex'

import navigationDrawer from './modules/navigationDrawer';
import productCard from './modules/productCard';
import testimonials from './data/testimonials';

Vue.use(Vuex);

const state = {
    testimonials,
    links: {
        socialMedia: {
            facebook: 'https://www.facebook.com/nutrinataliach',
            instagram: 'https://instagram.com/nutrinataliach',
        }
    }
}

const getters = {
    getTestimonials: (state) => state.testimonials
};

const store = new Vuex.Store({
    state,
    getters,
    modules: {
        navigationDrawer,
        productCard
    }
});

export default store;