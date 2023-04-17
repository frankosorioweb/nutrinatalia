const state = {
    moneyType: 'GS',
    moneyTypes: ['USD', 'GS']
};

const getters = {
    getMoneyType: (state) => state.moneyType,
    getMoneyTypes: (state) => state.moneyTypes
};

const mutations = {
    setMoneyType: (state, payload) => {
        state.moneyType = payload;
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
