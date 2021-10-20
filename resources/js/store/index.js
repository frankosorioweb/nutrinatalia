import Vue from "vue";
import Vuex from 'vuex'

// Modules
import navigationDrawer from './modules/navigationDrawer';
import productTypes from './modules/productTypes';

// Data
import testimonials from './data/testimonials';
import links from './data/links';
import products from './data/products';

Vue.use(Vuex);

const state = {
    testimonials,
    links,
    products
}

const getters = {
    getTestimonials: (state) => state.testimonials
};

const store = new Vuex.Store({
    state,
    getters,
    modules: {
        navigationDrawer,
        productTypes
    }
});

export default store;