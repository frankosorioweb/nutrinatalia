const state = {
    step: 1,
    payment: null
};

const getters = {
    getStep: (state) => state.step,
    getPayment: (state) => state.payment,
    isBankDeposit: (state) => state.payment.name == 'Depósito bancario'
};

const mutations = {
    nextStep: (state) => {
        if (state.step < 3) state.step++
    },
    previousStep: state => state.step--,
    resetSteeps: (state) => state.step = 1,
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
