const state = {
    drawer: false,
    group: null
};

const getters = {

};


const mutations = {
    changeDrawerState(state, payload) {
        state.drawer = payload;
    },
    changeGroupState(state, payload) {
        state.group = payload;
    }
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