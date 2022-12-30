const state = {
    types: {
        WORKSHOP: 'Taller',
        EBOOK: 'Ebook',
        EXTRA: 'Extra',
    }
};

const getters = {
    getProductsTypes: (state) => state.types,
    isWorkshop: (state) => (value) => _.lowerCase(state.types.WORKSHOP) === _.lowerCase(value),
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