import products from '../data/products';

const state = {
    products
};

const getters = {
    getProducts: (state) => state.products,
    getCustomProducts: (state) => (type) => state.products.filter(item => item.type === type),
    getProductFromShortName: (state) => (type, shortName) => state.products.find(item => item.type === type && item.shortName === shortName)
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
