const state = {
    step: 1,
    payment: null
};

const getters = {
    getStep: (state) => state.step,
    getPayment: (state) => state.payment
};

const mutations = {
    nextStep: (state) => {
        if (state.step < 3) state.step++
    },
    previousStep: state => state.step--,
    setPayment(state, payment) {
        state.payment = payment;
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
