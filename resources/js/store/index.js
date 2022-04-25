import Vue from "vue";
import Vuex from 'vuex'

// Modules
import navigationDrawer from './modules/navigationDrawer';
import productTypes from './modules/productTypes';
import stepper from './modules/stepper';
import cart from './modules/cart';
import coupon from './modules/coupon';
import events from './modules/events';

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
    getTestimonials: (state) => state.testimonials,
    verifyInfoproduct: (state) => (type, shortName) => {
        return state.products.products.find(item => _.lowerCase(item.type) === _.lowerCase(type) && item.shortName === shortName)
    },
    isChallengeRoute: (state) => (vm) => vm.$route.path.split('/')[1] === 'reto'
};

const store = new Vuex.Store({
    state,
    getters,
    modules: {
        navigationDrawer,
        productTypes,
        products,
        stepper,
        cart,
        coupon,
        events
    }
});

export default store;