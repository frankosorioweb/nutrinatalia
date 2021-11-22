import Vue from "vue";
import Vuex from 'vuex'

// Modules
import navigationDrawer from './modules/navigationDrawer';
import productTypes from './modules/productTypes';
import stepper from './modules/stepper';
import cart from './modules/cart';

// Data
import testimonials from './data/testimonials';
import links from './data/links';
import support from './data/support';
import products from './modules/products';

Vue.use(Vuex);

const state = {
    testimonials,
    links,
    support
}

const getters = {
    getTestimonials: (state) => state.testimonials
};

const store = new Vuex.Store({
    state,
    getters,
    modules: {
        navigationDrawer,
        productTypes,
        products,
        stepper,
        cart
    }
});

export default store;