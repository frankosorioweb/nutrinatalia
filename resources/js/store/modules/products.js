import products from '../data/products';

const state = {
    products
};

const getters = {
    getProducts: (state) => state.products,
    getCustomProducts: (state) => (type) => state.products.filter(item => item.type === type),
    getProductFromShortName: (state) => (type, shortName) => state.products.find(item => _.lowerCase(item.type) === _.lowerCase(type) && item.shortName === shortName),
    getDetailsTo: (state) => ({type, shortName}) => {
        return {
            name: `${type}-details`,
            params: {
                shortName
            }
        }
    }
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
