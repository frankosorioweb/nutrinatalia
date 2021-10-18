import Vue from "vue";
import Vuex from 'vuex'

// Modules
import navigationDrawer from './modules/navigationDrawer';
import productCard from './modules/productCard';

// Data
import testimonials from './data/testimonials';
import links from './data/links';

Vue.use(Vuex);

const state = {
    testimonials,
    links
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