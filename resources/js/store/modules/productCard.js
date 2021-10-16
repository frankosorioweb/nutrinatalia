const state = {
    types: {
        WORKSHOP: {
            name: 'Talleres',
            posterSrc: '/storage/img/WorkshopPoster.png',
            description: 'Son videos de aproximadamente 2 horas con el paso a paso de recetas saludables, deliciosas y fáciles de ejecutar.'
        },
        EBOOK: {
            name: 'Ebooks',
            posterSrc: '/storage/img/EbookPoster.png',
            description: 'Son libros digitales que diseñé para que inicies tu camino hacia un estilo de vida saludable. Incluyen: información, guías, listas de compras, recetas, y mucho más.'
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