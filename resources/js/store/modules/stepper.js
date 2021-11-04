const state = {
    step: 1
};

const getters = {
    getStep: (state) => state.step
};

const mutations = {
    setStep: (state) => (value) => state.step = value,
    nextStep: (state) => {
        if (state.step < 3) state.step++
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
