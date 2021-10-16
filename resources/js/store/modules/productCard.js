const state = {
    types: {
        WORKSHOP: {
            name: 'Talleres',
            posterSrc: '/storage/img/WorkshopPoster.png'
        },
        EBOOK: {
            name: 'Ebooks',
            posterSrc: '/storage/img/EbookPoster.png'
        }
    }
};

const getters = {
    getProductsTypes: (state) => state.types,
    isWorkshop: (state) => (value) => state.types.WORKSHOP.name === value,
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