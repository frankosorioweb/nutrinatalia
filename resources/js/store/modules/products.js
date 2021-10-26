import products from '../data/products';

const state = {
    products
};

const getters = {
    getProducts: (state) => state.products,
};

const mutations = {
    
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};